import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// import User(s)



import * as ImagePicker from 'expo-image-picker';

export default function UploadProfilePictureScreen({ route, navigation, imageSource }: { route: any, navigation: any, imageSource: ImageSourcePropType}) {

  // useEffect(() => {
  //   checkForCameraRollPermission()
  // }, []);

  const [image, setImage] = useState<null | string>(null);

  const checkForCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert("Please grant camera roll permissions inside your system's settings");
    } else {
      console.log('Media Permissions are granted')
    }

  }
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  return (
    <View style={imageUploaderStyles.container}>

      {
        <Image source={imageSource} style={{ width: 200, height: 200 }} />
      }



      {/* <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
          <Text>{image ? 'Edit' : 'Upload'} Image</Text>
          <AntDesign name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View> */}


    </View>

  );
}

const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 999,
    overflow: 'hidden',
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  }
})