import React from 'react'
import { Image } from 'react-native'

const Reward = () => {
    
    let checkmark = require('../../assets/checkmark.png')

  return (
    <View>
        <Image source={checkmark} />
    </View>
  )
}

export default Reward