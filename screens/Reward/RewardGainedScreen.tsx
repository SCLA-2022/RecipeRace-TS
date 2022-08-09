import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";

const RewardGainedScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  let image1 = require("../../assets/crispy-fried-egg-recipe.png");

  console.log(route.params.image)

  const [rewardGained, setRewardGained] = React.useState([
    {
      coin: 10,
      message: "progress level up",
    },
  ]);

  const [changeScreen, setChangeScreen] = React.useState(false);

  setTimeout(() => {
    setChangeScreen(true)
  }, 2000)
  return (
    <>
      {changeScreen ? (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 60,
                fontSize: 30,
                marginBottom: 20,
                fontFamily: 'BubblePop'
              }}
            >
              {route.params.info.category}
            </Text>
            {/* <Image /> */}

            {/* FOR CONTAINER WITH REWARD CONTENT */}

            <View
              style={{
                backgroundColor: "#FEAD62",
                marginHorizontal: 25,
                paddingBottom: 100,
                borderRadius: 50,
                width: 381
              }}
            >
              <Image
                source={{ uri: "data:image/jpg;base64," + route.params.image }}
                style={{
                  alignSelf: "center",
                  borderRadius: 1000,
                  width: 150,
                  height: 150,
                  borderWidth: 2,
                  // borderStyle: 'solid',
                  marginTop: 76,
                  // marginBottom: 33,
                }}
              />
              <View
                style={{
                  marginTop: 50,
                  // marginLeft: 25,
                }}
              >
                <Text style={{ fontSize: 40, alignSelf: 'center', marginBottom: 35, fontFamily: 'BubblePop' }}>10 coins</Text>
                <Text style={{ fontSize: 40, alignSelf: 'center', fontFamily: 'BubblePop' }}>Progress Level Up++</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 7,
              backgroundColor: "#FEAD62",
              // alignSelf: "center",
              justifyContent: "center",
              marginTop: 30,
              height: 64,
              width: 231
            }}
            onPress={() => navigation.navigate("Profile", route.params.image)}
          >
            {/* Display the name of the category ons the top of the screen */}
            <Text style = {{color: 'white', fontSize: 28, alignSelf: 'center', fontFamily: 'BubblePop'}}> Profile </Text>
            {/* <Image style={{ height: 64, width: 231 }} source={require('../../assets/goHome.png')} /> */}
          </TouchableOpacity>
        </View>
      ) :
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

          <Text style={{ fontSize: 25, marginBottom: 124, fontFamily: 'BubblePop' }}> Final Dish Verified </Text>

          <Image style={{ height: 160, width: 209 }} source={require('../../assets/Verified.png')} />

        </View>
      }
    </>

  );
};

export default RewardGainedScreen;
