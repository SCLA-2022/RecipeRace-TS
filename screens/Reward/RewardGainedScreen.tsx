import React from 'react'
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native'


const RewardGainedScreen = ({route, navigation}) => {

    let image1 = require('../../assets/crispy-fried-egg-recipe.png');

    const [rewardGained, setRewardGained] = React.useState([
        {
            
            coin: 10,
            message: "progress level up",      
        },


    ]);
  return (
    <View>
        <Text style={{ textAlign: 'center', marginTop: 60, fontSize: 25}}>Rewards Gained</Text>

        <View>
            <Text style={{ textAlign: 'center', marginTop: 60, fontSize: 20, marginBottom: 40}}>omlette</Text>
            {/* <Image /> */}

            {/* FOR CONTAINER WITH REWARD CONTENT */}
            
            <View style={{
                backgroundColor: "#E5FCF1",
                marginHorizontal: 25,
                paddingBottom: 100,
                borderRadius: 50,


                }}>
                <Image source={image1} style={{
                    alignSelf: 'center',
                    borderRadius: 1000,
                    width:125,
                    borderColor: "#5BBEB3",
                    borderWidth: 2, 
                    // borderStyle: 'solid',
                    marginTop: 20,
                }}
                    />
                    <View style={{
                        marginTop: 50,
                        marginLeft: 25,
                        

                    }}>
                        <Text style={{fontSize: 30,}}>10 coins</Text>
                        <Text style={{fontSize: 30,}}>Progress Level Up++</Text>
                    </View>
                    
                    
            </View>
        </View>
        <TouchableOpacity 
                    style = {{
                        backgroundColor: 'grey', 
                        height: 50, 
                        width: 188, 
                        borderRadius: 10, 
                        backgroundColor: '#5BBEB3', 
                        borderColor: '#5BBEB3',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 30,
                    }}
                        
                    onPress = {() => navigation.navigate('Beginner')}>
                  {/* Display the name of the category ons the top of the screen */}
                 
                  <Text style = {{
                            color: 'white', 
                            alignSelf:'center',
                            justifyContent: 'center',
                            marginTop: 0,

                            
                                }}> Home </Text>
                </TouchableOpacity>
    </View>
  )
}

export default RewardGainedScreen