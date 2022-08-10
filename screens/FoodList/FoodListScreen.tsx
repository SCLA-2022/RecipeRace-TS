import React from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
} from "react-native";
// import { FlatList } from 'react-native-web'
import YoutubePlayer from "react-native-youtube-iframe";
import { useAppSelector } from '../../store/hooks';
import { getCoins } from '../../store/slices/userSlice';

// mUA5m-113HQ

const FoodListScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const [playing, setPlaying] = React.useState(false);

  const coins = useAppSelector(getCoins);
  
  const onStateChange = React.useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const renderHeader = () => {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            marginTop: 50,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 8 }}
          >
            <Image
              style={{ width: 32, height: 31 }}
              source={require("../../assets/goBack.png")}
            />
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 44, height: 38 }}
              source={require("../../assets/Money.png")}
            />
            <Text style={{ fontSize: 35 }}> {coins || '0'} </Text>
          </View>
        </View>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 23,
            fontSize: 35,
            marginBottom: 50,
            fontFamily: "BubblePop",
          }}
        >
          {" "}
          Videos{" "}
        </Text>

        <YoutubePlayer
          height={260}
          play={playing}
          videoId={"mUA5m-113HQ"}
          onChangeState={onStateChange}
        />

        <Text
          style={{
            alignSelf: "center",
            fontSize: 35,
            marginBottom: 33,
            fontFamily: "BubblePop",
          }}
        >
          {" "}
          Steps{" "}
        </Text>
      </>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={route.params.recipies[0].recipe}
        ListHeaderComponent={renderHeader()}
        renderItem={({ item, index, separators }) => (
          <View style={{ paddingHorizontal: 34,}}>
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 16,
                marginBottom: 15,
                fontFamily: "AleoBold",
              }}
            >
              {" "}
              {index + 1}. {item}{" "}
            </Text>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity
            onPress={() => navigation.navigate("Submit", route.params)}
            style={{ alignSelf: "center", marginTop: 5}}
          >
            <Image
              style={{ width: 234, height: 61 }}
              source={require("../../assets/takePic.png")}
            />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-evenly",
    marginTop: 20,
    // backgroundColor: 'red'
  },
  label: {
    backgroundColor: "light-grey",
  },
});

export default FoodListScreen;
