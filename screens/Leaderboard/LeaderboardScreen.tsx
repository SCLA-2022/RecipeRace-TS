import React, { useState } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import usePlayers from "../../hooks/usePlayers";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/slices/userSlice";

const LeaderboardScreen = ({ navigation }: any) => {
  const { players } = usePlayers();
  const user = useAppSelector(getUser);

  let allPlayers = players;

  if (user) {
    allPlayers = [...players, user].sort((a,b) => {
      return b.exp - a.exp
    });
  }


  return (
    <>
      <View
        style={{ marginTop: 60, flexDirection: "row", alignItems: "center" }}
      >
        {/* <TouchableOpacity
          style={{
            width: 32,
            height: 31,
            position: "relative",
            left: 8,
            zIndex: 1,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={{ width: 32, height: 31 }}
            source={require("../../assets/goBack.png")}
          />
        </TouchableOpacity> */}

        <View style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Text
            style={{
              // marginTop: 20,
              alignSelf: "center",
              // marginBottom: 50,
              fontSize: 50,
              fontFamily: "BubblePop",
            }}
          >
            Leaderboard
          </Text>
        </View>
      </View>

      <FlatList
        nestedScrollEnabled={true}
        data={allPlayers}
        style={{ marginTop: 28 }}
        contentContainerStyle={{ alignItems: "center" }}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              borderColor: item.color,
              // alignItems: 'center',
              width: 360,
              height: 145,
              marginBottom: 13,
              borderRadius: 20,
            }}
            onPress={() => {
              navigation.navigate("Leaderboard", {
                screen: "LeaderboardProfile",
                params: { item },
              });
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: 15,
                  backgroundColor: item.color,
                  // borderRightWidth: 1,
                  // alignItems: 'center',
                  // display: 'flex',
                  // alignItems: 'center',
                  borderWidth: 1,
                  borderColor: item.color,
                  height: "100%",
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              />

              <Image
                style={{
                  height: 70,
                  width: 70,
                  marginTop: 39,
                  marginLeft: 42,
                  borderRadius: 200,
                }}
                source={item.profileImage}
              />

              <View style={{ marginTop: 39, marginLeft: 31 }}>
                <Text style={{ fontSize: 25, fontFamily: "BubblePop" }}>
                  {item.firstName}
                </Text>
                <Text style={{ fontSize: 25, fontFamily: "BubblePop" }}>
                  {item.exp} XP
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default LeaderboardScreen;
