import React from 'react'
import { View, Image } from 'react-native'

const BeginnerCard = ({ image } : {image:any}) => {
  return (
    <View>
        <Image
                source = {image}  
            />
    </View>
  )
}

export default BeginnerCard