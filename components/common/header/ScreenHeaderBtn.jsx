import React from 'react'
import { View, Text , TouchableOpacity,Image} from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl , deminsion, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}
     onPress={handlePress}>
      <Image source={iconUrl}
        resizeMode='cover'
        style = {styles.btnImg(deminsion)}
      />
  </TouchableOpacity>

  )
}

export default ScreenHeaderBtn