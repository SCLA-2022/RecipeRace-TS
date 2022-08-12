import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import UploadProfilePictureScreen from "../screens/Profile/UploadProfilePictureScreen";
import { useAppSelector } from "../store/hooks";
import { getCoins, getUser } from "../store/slices/userSlice";

const AllProfileStack = ({ navigation }: any, { route }: any) => {
  const user = useAppSelector(getUser);

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
          <Text style={{ fontSize: 35 }}> {user?.coins || "10"} </Text>
        </View>
      </View>

      <View style={styles.alignThem}>
        <UploadProfilePictureScreen
          imageSource={
            user?.profileImage
              ? user.profileImage
              : require("../assets/players/chef.png")
          }
          route={undefined}
          navigation={undefined}
        />
      </View>

      <View style={[styles.alignThem, { marginTop: 25, marginBottom: 33 }]}>
        <Text style={{ fontSize: 35, fontFamily: "BubblePop" }}>
          Achievements
        </Text>
      </View>
      {/* Achievements list */}
      {/* <View > */}
      <FlatList
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
        }}
        data={user?.badges || []}
        renderItem={({ item }) => (
          <View key={item.id}>
            <Image style={{ width: 150, height: 150 }} source={item.image} />
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
