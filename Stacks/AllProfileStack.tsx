import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { UserInformation } from "../Data/UserData";

import UploadProfilePictureScreen from "../screens/Profile/UploadProfilePictureScreen";

const BADGES = UserInformation.achievements;
const Badge = ({ image }: { image: any }) => (
  <View >
    <Image source={image} />
  </View>
)
const AllProfileStack = ({navigation} : any) => {


  return (
    <View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, padding: 10 }}>

        <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
          <Image style={{ width: 47, height: 48 }} source={require('../assets/LeaderBoard.png')} />
        </TouchableOpacity>

        {/* <View style={styles.alignThem}>
        <UploadProfilePictureScreen />
      </View> */}

        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: 44, height: 38 }} source={require('../assets/Money.png')} />
          <Text style={{ fontSize: 35 }}> 10 </Text>
        </View>

      </View>

      <View style={styles.alignThem}>
        <UploadProfilePictureScreen route={undefined} navigation={undefined} />
      </View>

      <View style={[styles.alignThem, { marginTop: 25, marginBottom: 33 }]}>
        <Text style={{ fontSize: 35, fontFamily: 'BubblegumSans' }}>Achievements</Text>
      </View>
      {/* Achievements list */}
      {/* <View > */}
      <FlatList

        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-evenly'
        }}
        data={BADGES}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Image source={item.image} />
          </View>
        )}
      />

      {/* </View> */}
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
    alignSelf: 'center',
    alignItems: "center",
    // marginTop: 40,
  },
});
