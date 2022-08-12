import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/slices/userSlice";
import UploadProfilePictureScreen from "../Profile/UploadProfilePictureScreen";

const LeaderboardProfileScreen = ({ navigation, route }: any) => {
  const user = route.params.item;
  console.log(user);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 50,
          padding: 10,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Leaderboard", { screen: "LeaderboardHome" })
          }
        >
          <Image
            style={{ width: 47, height: 48 }}
            source={require("../../assets/LeaderBoard.png")}
          />
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 44, height: 38 }}
            source={require("../../assets/Money.png")}
          />
          <Text style={{ fontSize: 35 }}> {user?.coins || "10"} </Text>
        </View>
      </View>

      <View
        style={[
          {
            marginTop: 15,
            marginBottom: 33,
            width: "100%",
          },
        ]}
      >
        <Text
          style={[
            styles.alignThem,
            {
              fontSize: 35,
              fontFamily: "BubblePop",
              textAlign: "center",
              color: "black",
            },
          ]}
        >
          {user.firstName} {user.lastName}
        </Text>
      </View>

      <View style={[styles.alignThem]}>
        <UploadProfilePictureScreen
          imageSource={
            user?.profileImage ? user.profileImage : require("../../assets/players/chef.png")
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

      <View style={[styles.alignThem, { flexDirection: "column" }]}>
        <FlatList
          numColumns={2}
          scrollEnabled={true}
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 20, paddingBottom: 500 }}
          columnWrapperStyle={{
            justifyContent: "space-evenly",
          }}
          data={user?.badges ? user.badges : []}
          renderItem={({ item }) => (
            <View key={item.id} style={{ marginHorizontal: 20, marginBottom: 25 }}>
              <Image style={{ width: 150, height: 150 }} source={item.image} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default LeaderboardProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  alignThem: {
    alignSelf: "center",
    overflow: "scroll",
    // marginTop: 40,
  },
});
