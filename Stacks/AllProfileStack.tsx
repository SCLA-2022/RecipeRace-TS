import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { UserInformation } from "../Data/UserData";

import UploadProfilePictureScreen from "../screens/Profile/UploadProfilePictureScreen";
import { useAppSelector } from "../store/hooks";
import { getCoins } from "../store/slices/userSlice";

// redux into profile

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { appendMarker, appendReports, getCoin } from '../store/slices/coinslice';


const BADGES = UserInformation.achievements;
const Badge = ({ image }: { image: any }) => (
  <View>
    <Image source={image} />
  </View>
);
const AllProfileStack = ({ navigation }: any) => {
  const coins = useAppSelector(getCoins);


  // redux
  const getValue = async () => {
    //call store functipn to update the state
    let latLong = await Location.getCurrentPositionAsync({});
    dispatch(appendMarker({
        id: markerList.length,
        lat: latLong.coords.latitude,
        long: latLong.coords.longitude,
        title: `ATM Skimmer`,
        description: `${location} | ${description}`,
        image: require('../assets/Group236.png'),
    }))
    dispatch(appendReports({
        id: reportList.length,
        data: null, // null because no pumps at atm
        address: location,
        date: `${new Date()}`,
        description: description,
        type: 'atm'
        // description: 'Skimmer made me go broke'
    }))
    setVisible(false)
    console.log(location, description)
    navigation.navigate('Map')
}


  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Leaderboard")}>
          <Image
            style={{ width: 47, height: 48 }}
            source={require("../assets/LeaderBoard.png")}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 44, height: 38 }}
            source={require("../assets/Money.png")}
          />
          <Text style={{ fontSize: 35 }}> {coins || '10'} </Text>
        </View>
      </View>

      <View style={styles.alignThem}>
        <UploadProfilePictureScreen route={undefined} navigation={undefined} />
      </View>

      <View style={[styles.alignThem, { marginTop: 25, marginBottom: 33 }]}>
        <Text style={{ fontSize: 35, fontFamily: "BubblegumSans" }}>
          Achievements
        </Text>
      </View>
      {/* Achievements list */}
      {/* <View > */}
      <FlatList
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
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
    alignSelf: "center",
    alignItems: "center",
    // marginTop: 40,
  },
});
