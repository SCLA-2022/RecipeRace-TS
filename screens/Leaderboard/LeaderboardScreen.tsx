import React from "react";
import { ScrollView, Text, View, FlatList, Image } from "react-native";

import FirstPlaceCard from "../../Cards/FirstPlaceCard";

const LeaderboardScreen = () => {
  const [players, setPlayers] = React.useState([
    {
      firstName: "John",
      lastName: "Cena",
      exp: 766,
      image: require("../../assets/BlankProfile.png"),
      color: '#F9EBA6',
    },
    {
      firstName: "Henry",
      lastName: "Martinez",
      exp: 1000,
      image: require("../../assets/BlankProfile.png"),
      color: '#C0C0C0',
    },
    {
        firstName: "anonymous",
        lastName: "anonymous",
        exp: 766,
        image: require("../../assets/BlankProfile.png"),
        color: 'brown',
      },
      {
        firstName: "anonymous",
        lastName: "anonymous",
        exp: 766,
        image: require("../../assets/BlankProfile.png"),
        color: '',
      },
      {
        firstName: "anonymous",
        lastName: "anonymous",
        exp: 766,
        image: require("../../assets/BlankProfile.png"),
        color: '',
      },
      {
        firstName: "anonymous",
        lastName: "anonymous",
        exp: 766,
        image: require("../../assets/BlankProfile.png"),
        color: '',
      },
      {
        firstName: "anonymous",
        lastName: "anonymous",
        exp: 766,
        image: require("../../assets/BlankProfile.png"),
        color: '',
      },

  ]);

  return (
    <>
      <View>
        <Text
          style={{
            marginTop: 20,
            textAlign: "center",
            paddingBottom: 50,
            fontSize: 40,
            
          }}
        >
          Leaderboard
        </Text>
      </View>

      <FlatList
        nestedScrollEnabled={true}
        data={players}
        style={{ marginTop: 0 }}
        contentContainerStyle={{ alignItems: "center" }}
        numColumns={1}
        renderItem={({ item }) => (
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              // borderLeftWidth: 1,
              width: 325,
              height: 105,
              marginBottom: 13,
              borderRadius: 20,
              
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
                  borderWidth: 1,
                  height: "100%",
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                }}
              />
              <Image style={{ height: 50, width: 50, marginLeft: 20, marginTop: 20,  }} source={item.image} />
              <View>
                <Text style={{marginLeft: 20, marginTop: 20,}}>{item.firstName}</Text>
                <Text style={{marginLeft: 20, marginTop: 0,}}>{item.exp} XP</Text>
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default LeaderboardScreen;
