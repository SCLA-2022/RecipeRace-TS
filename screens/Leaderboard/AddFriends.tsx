import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, FlatList} from 'react-native'


const AddFriends = () => {
    const [text, onChangeText] = React.useState<any>("Useless Text");
    const [number, onChangeNumber] = React.useState<any>(null);

    const [name, setName] = React.useState([
        {
          username: "user1",
        },
        {
          username: "user2",
        },
        {
            username: "user3",
        },
        {
            username: "user4",
        },
      ]);
    

  return (
    <View>
        
        <View>
            <Text>Add friends to compete with</Text>
        </View>
        <View>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
        </View>
        <View>
        <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={name}
        ListHeaderComponent={
          <>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 60,
                fontSize: 28,
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
              backgroundColor: "#5BBEB3",
              borderColor: "#5BBEB3",
            }}
            onPress={() => navigation.navigate("FoodList", item)}
          >
            {/* Display the name of the category ons the top of the screen */}
            <Image
              source={item.image}
              style={{
                width: 188,
                height: 126,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: "#5BBEB3",
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
            <Text
              style={{
                color: "white",
                alignSelf: "flex-start",
                marginTop: 7,
              }}
            >
              {" "}
              {item.category}{" "}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
        </View>
        <View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  

export default AddFriends