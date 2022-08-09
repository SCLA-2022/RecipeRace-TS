import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraCapturedPicture } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";

// fixing camera reloading issue
import { useIsFocused } from "@react-navigation/native";

//include all data //
export default function CameraScreen({
  route,
  navigation,
}: {
  navigation: any;
  route: any;
}) {
  // useRef() <- does not cause the page to keep refreshing
  let cameraRef = useRef<Camera>(null);
  console.log(route.params.category)

  // const [photo, setPhoto] = useState({
  //     photo: null,
  // })

  // re renders whenever switched to that tab
  const isFocused = useIsFocused();

  // pass new data to these variables -> then update value
  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState<boolean>(false);
  const [photo, setPhoto] = useState<CameraCapturedPicture>();
  const [showCamera, setShowCamera] = useState();

  const [photoUri, setPhotoUri] = useState<string>();
  const [hasPhoto, setHasPhoto] = useState<boolean>();

  // need help on understanding asynchronous function and await
  // happens after every render
  useEffect(() => {
    async function getPermissions() {
      try {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const mediaLibraryPermission =
          await MediaLibrary.requestPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === "granted");
        setHasMediaLibraryPermission(
          mediaLibraryPermission.status === "granted"
        );
      } catch (e) {
        console.log(e);
      }
    }

    getPermissions();
  }, []);

  // simulating a POSTMAN API into your server
  const upload = async () => {
    try {
      // check if photo exists first
      if (photo) {
        //  get image file path
        let localUri = photo.uri;
        // get the image name
        let filename = `${localUri.split("/").pop()}`;

        // find the stright has the file name
        let match = /\.(\w+)$/.exec(filename);
        // extract the file typer
        let type = match ? `image/${match[1]}` : `image`;

        // create form to upload - keep in mind form is empty
        let formData = new FormData();
        // fill in form data
        // @ts-ignore
        formData.append("file", { uri: localUri, name: filename, type });

        // construct payload to upload image data
        const payload: RequestInit = {
          method: "POST",
          body: formData,
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        const response = await fetch("https://reciperace.herokuapp.com/upload", payload);

        // grab data as object
        const labels = await response.json();

        // CHECKING if the "food" is in the image
        var strs = labels.data;

        // a picture will be invalid be default
        let isValid = false;

        // total amount of labels
        let b = route.params.labels.length;
        // number of times we had match
        let a = 0;

        // loop through labels
        for (let i = 0; i < route.params.labels.length; i++) {
          // store label for easy acces
          let label = route.params.labels[i];

          // loop through server results
          for (let j = 0; j < strs.length; j++) {
            if (label.toLowerCase() === strs[j].toLowerCase()) {
              console.log(`Label: ${label} MATCH Str: ${strs[j]}`);
              a++; // increment number by 1
            } else {
              console.log(`Label: ${label} DID NOT MATCH Str: ${strs[j]}`);
            }
          }
        }

        // GET PERCENT
        const percent = (a / b) * 100;

        // it has to be more than 70 for valid
        if (percent >= 70) {
          isValid = true;
          console.log(
            `the image was ${isValid} (${a} / ${b} ) - we had  ${a} matches`
          );
        } else {
          console.log(
            `the image was ${isValid}  (${a} / ${b} )  - we had  ${a} matches`
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  // confirming this variable -> checking if var has the value of granted
  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  // making objects that create a picture model
  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    if (cameraRef && cameraRef.current) {
      // wait until picture is taken, then create a "new photo file"
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      console.log(newPhoto.uri);
      setPhoto(newPhoto);
    }
  };

  // if the photo is taken, choose any of these options

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };
    // save photo
    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhotoUri(photo.uri);
        // console.log(photo)
        if (photoUri !== undefined) {
          setHasPhoto(true);
        }
        setPhoto(undefined);
        // send photo to server
        upload();

        navigation.navigate("Reward", 
        { info: route.params,
          image: photo.base64
        });
      });
    };

    // show the user the button to transfer the photo
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View style={{ height: 20, display: 'flex', justifyContent: 'center', marginTop: 20 }}>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 8, width: 32, height: 31, marginTop: 50 }}>

            <Image style={{ width: 32, height: 31 }} source={require('../../assets/goBack.png')} />
          </TouchableOpacity>

        </View>

        <SafeAreaView style={styles.container}>



          <Image
            style={{ width: 400, height: 500, marginBottom: 10 }}
            source={{ uri: "data:image/jpg;base64," + photo.base64 }}
          />

          <TouchableOpacity onPress={() => savePhoto()}>
            <Image style={{ height: 61, width: 234, marginTop: 100 }} source={require('../../assets/upload.png')} />
          </TouchableOpacity>

          {/* <Image style = {{width: 428, height: 242}} source={ require('../../assets/CameraOverlay.png') }/> */}
        </SafeAreaView>
      </View>

    );
  }

  // camera showing the option to take pic
  return (
    <>

      <View style={{ height: 20, display: 'flex', justifyContent: 'center', marginTop: 20 }}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 8, width: 32, height: 31, marginTop: 50 }}>

          <Image style={{ width: 32, height: 31 }} source={require('../../assets/goBack.png')} />
        </TouchableOpacity>

      </View>

      {isFocused ? (
        <Camera style={styles.container} ref={cameraRef}>
          <View style={styles.buttonContainer}>


          
            <TouchableOpacity onPress={takePic} style={styles.buttonTake}>
              <Text
                style={{
                  marginLeft: 25,

                  marginTop: 75,

                  width: 100,
                  height: 59,
                  marginBottom: 20,
                  // borderRadius: 100,
                  // borderWidth: 10,
                }}
              >
                {" "}
              </Text>
            </TouchableOpacity>
            {/* <Button style={styles.buttonStyle} title= "close" onPress={() => setShowCamera(null)} /> */}
          </View>
          <StatusBar style="auto" />
        </Camera>
      ) : null}

      {/* {hasPhoto ? <Image source = {{uri : photoUri}}/>: null} */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",

    justifyContent: "center",
    marginTop: 'auto',

    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 10,
    marginBottom: 25,
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  buttonStyle: {
    padding: 40,
  },
  buttonTake: {
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
});
