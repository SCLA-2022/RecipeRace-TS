import React from "react";
import { ScrollView, Text, View, FlatList, Image } from "react-native";

// import FirstPlaceCard from "../../Cards/FirstPlaceCard";

import { useFaker } from "react-fakers";
import { TouchableOpacity } from "react-native-gesture-handler";

const LeaderboardScreen = ({navigation} : any) => {
  const { success, error, loading } = useFaker({
    type: 'user',
    params: { users: { quantity: 7 } }
  });

  console.log(success)


  const [players, setPlayers] = React.useState([
    {
      firstName: "Logan",
      lastName: "Cena",
      exp: 1260,
      image: "http://placeimg.com/640/480/people",
      color: '#349D22',
    },
    {
      firstName: "Henry",
      lastName: "Martinez",
      exp: 1110,
      image: "http://placeimg.com/640/480/people",
      color: '#FFE28B',
    },
    {
      firstName: "Arnaldo",
      lastName: "Hane",
      exp: 1050,
      image: "http://placeimg.com/640/480/people",
      color: '#D30101',
    },
    {
      firstName: "Hoyt",
      lastName: "Johnson",
      exp: 990,
      image: "http://placeimg.com/640/480/people",
      color: 'black',
    },
    {
      firstName: "Kory",
      lastName: "Botsford",
      exp: 950,
      image: "http://placeimg.com/640/480/people",
      color: 'black',
    },
    {
      firstName: "Ivy",
      lastName: "Gerhold",
      exp: 760,
      image: "http://placeimg.com/640/480/people",
      color: 'black',
    },
    {
      firstName: "Moshe",
      lastName: "Baumbach",
      exp: 580,
      image: "http://placeimg.com/640/480/people",
      color: 'black',
    },

  ]);

  return (
    <>
      <View style={{ marginTop: 60, flexDirection: 'row', alignItems: 'center'}}>

        <TouchableOpacity style={{ width: 32, height: 31, position: 'relative',  left: 8, zIndex: 1, }} onPress={() => navigation.navigate("Profile")}>
          <Image style={{ width: 32, height: 31 }} source={require('../../assets/goBack.png')} />
        </TouchableOpacity>


        <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Text
            style={{
              // marginTop: 20,
              alignSelf: "center",
              // marginBottom: 50,
              fontSize: 40,
              fontFamily: 'BubblePop'

            }}
          >
            Leaderboard
          </Text>
        </View>
      </View>

      <FlatList
        nestedScrollEnabled={true}
        data={players}
        style={{ marginTop: 50 }}
        contentContainerStyle={{ alignItems: "center" }}
        numColumns={1}
        renderItem={({ item }) => (
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              borderColor: item.color,
              // alignItems: 'center',
              width: 397,
              height: 145,
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

              <Image style={{ height: 70, width: 70, marginTop: 39, marginLeft: 42, borderRadius: 200 }} source={{ uri: item.image }} />

              <View style={{ marginTop: 39, marginLeft: 31 }}>
                <Text style={{ fontSize: 25, fontFamily: 'BubblePop' }} >{item.firstName}</Text>
                <Text style={{ fontSize: 25, fontFamily: 'BubblePop' }}>{item.exp} XP</Text>
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default LeaderboardScreen;
