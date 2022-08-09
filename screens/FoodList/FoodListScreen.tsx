import React from 'react'
import { Text, FlatList, TouchableOpacity, StyleSheet, Image, View, } from 'react-native'
// import { FlatList } from 'react-native-web'
import YoutubePlayer from "react-native-youtube-iframe";

// mUA5m-113HQ

const FoodListScreen = ({ navigation, route }: { navigation: any, route: any }) => {

  console.log(route.params)

  const [playing, setPlaying] = React.useState(false);

  const onStateChange = React.useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    // Food Lists that one can cook

    /* Making a list of columns that include foods after going through Difficulty  */
    /* <FlatList
      numColumns={2}
      columnWrapperStyle = {styles.row}

      data = {route.params.recepies}

      ListHeaderComponent = {
        <>
          <Text style = {{
            alignSelf: 'center',
            marginTop: 60,
            fontSize: 28,
          }}> {route.params.category} </Text>
        </>
      }
      renderItem={({ item }) => (
        <TouchableOpacity 
            style = {{ 
                      height: 164, 
                      width: 188, 
                      borderRadius: 10, 
                      backgroundColor: '#5BBEB3', 
                      borderColor: '#5BBEB3'
            }}
            onPress = {() => navigation.navigate('RecipeList', item)}
            >
          <Image source = { item.imagerecipe } style = {{
                     width: 188, 
                     height: 126, 
                     borderRadius: 10, 
                     borderWidth: 2, 
                     borderColor: '#5BBEB3',
                     borderBottomLeftRadius: 0,
                     borderBottomRightRadius: 0,
                  }} />
         
          <Text style = {{
            color: 'white', 
            alignSelf:'flex-start',
            marginTop: 7,
            }}>
               {item.name} 
          </Text>
          
        </TouchableOpacity>
      )} 
    /> */

    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={route.params.recepies[0].recipe}

        ListHeaderComponent={
          <>
            <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-between' }}>

              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 8 }}>

                <Image style={{ width: 32, height: 31 }} source={require('../../assets/goBack.png')} />
              </TouchableOpacity>

              <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 44, height: 38 }} source={require('../../assets/Money.png')} />
                <Text style={{ fontSize: 35 }}> 10 </Text>
              </View>
            </View>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 23,
                fontSize: 35,
                marginBottom: 50,
                fontFamily: 'BubblePop',
              }}
            >
              {" "}
              Videos{" "}
            </Text>

            <YoutubePlayer

              height={260}
              play={playing}
              videoId={ 'mUA5m-113HQ' }
              onChangeState={onStateChange}

            />

            <Text style = {{alignSelf: 'center', fontSize: 35, marginBottom: 33, fontFamily: 'BubblePop'}}> Steps </Text>


          </>
        }

        renderItem={( {item, index, separators} ) => (

          <View style = {{marginLeft: 34}}>
            <Text style = {{alignSelf: 'flex-start', fontSize: 16, marginBottom: 25, fontFamily: 'AleoBold'}}> {index + 1}. {item} </Text>
          </View>

        )}

        ListFooterComponent={
        <TouchableOpacity 
          onPress={() => navigation.navigate('Submit', route.params )}
          style = {{alignSelf: 'center'}}>
          <Image  style = {{width: 234, height: 61}} source={require('../../assets/takePic.png')} />
        </TouchableOpacity>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 20
    // backgroundColor: 'red'
  },
  label: {
    backgroundColor: 'light-grey',

  }
})

export default FoodListScreen