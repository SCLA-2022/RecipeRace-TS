import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import { UserInformation } from "../Data/UserData";

import UploadProfilePictureScreen from "../screens/Profile/UploadProfilePictureScreen";

const BADGES = UserInformation.achievements;
const Badge = ({image} : {image:any}) => (
  <View >
    <Image source={image} />
  </View>
)
const AllProfileStack = () => {

  // const renderItem = ({image}) => (
  //   <Badge image={image}/>
  // )

  return ( 
    <View>
      <View style={styles.alignThem}>
        <UploadProfilePictureScreen />
      </View>

      <View>
        <Text>Achievements</Text>
      </View>
      {/* Achievements list */}
      <View>
        <FlatList 
          data={BADGES}
          renderItem={({item}) => (
            <View key={item.id}>
              <Image source={item.image} />
            </View>
          )}
        />
        
      </View>
    </View>
  );
};

export default AllProfileStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  alignThem: {
    alignItems: "center",
    marginTop: 40,
  },
});
