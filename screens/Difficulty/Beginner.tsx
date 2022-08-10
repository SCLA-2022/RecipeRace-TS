import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import useBeginnerCategories from "../../hooks/useBeginnerCategories";
import { useAppSelector } from '../../store/hooks';
import { getCoins } from '../../store/slices/userSlice';

const Beginner = ({ navigation }: { navigation: any }) => {
  // get categorie data
  const { categories } = useBeginnerCategories();
  const coins = useAppSelector(getCoins);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={categories}
        ListHeaderComponent={
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
                fontSize: 28,
                marginBottom: 50,
                fontFamily: "BubblePop",
              }}
            >
              {" "}
              Beginner{" "}
            </Text>
          </>
        }
        columnWrapperStyle={styles.row}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              height: 164,
              width: 188,
              borderRadius: 10,
              backgroundColor: "#FEAD62",
              borderColor: "#FEAD62",
            }}
            onPress={() => navigation.navigate("FoodList", item)}
          >
            {/* Display the name of the category ons the top of the screen */}
            <Image
              source={item.image}
              style={{
                width: 175,
                height: 115,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#FEAD62",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                marginTop: 6,
                // marginLeft: 4
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                marginTop: 7,
                fontFamily: "BubblePop",
                fontSize: 20,
              }}
            >
              {" "}
              {item.category}{" "}
            </Text>
          </TouchableOpacity>
        )}
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
});
export default Beginner;
