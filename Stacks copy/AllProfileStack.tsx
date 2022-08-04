import React from "react";
import { View, Text, StyleSheet } from "react-native";

import UploadProfilePictureScreen from "../Screens/Profile/UploadProfilePictureScreen";

const AllProfileStack = () => {
  return (
    <View>
      <View style={styles.alignThem}>
        <UploadProfilePictureScreen style={styles.alignThem} />
      </View>

      {/* <View
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
        <Image
          style={{ height: 50, width: 50, marginLeft: 20, marginTop: 20 }}
          source={item.image}
        />
        <View>
          <Text style={{ marginLeft: 20, marginTop: 20 }}>
            {item.firstName}
          </Text>
          <Text style={{ marginLeft: 20, marginTop: 0 }}>{item.exp} XP</Text>
        </View>
      </View> */}

      <View>
        <Text>Achievements</Text>
      </View>
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
    alignItems: "center",
    marginTop: 40,
  },
});
