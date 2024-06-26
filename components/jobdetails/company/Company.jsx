import React from 'react'
import { View, Text, Image } from 'react-native'
import { checkImageURL } from '../../../utils'
import { icons } from '../../../constants'
import styles from './company.style'
import { JobTabs } from '../..'

const Company = ({ companylogo, jobTitle, companyName, Location }) => {

  return (
    <View style={styles.container}>
      <View style ={styles.logoBox}>
      <Image 
        source={{
          uri: checkImageURL(companylogo) ?
            companylogo :
            "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
        }}
        resizeMode="contain"
        style={styles.logoImage}
        />
      </View>

      <View style ={styles.jobTitleBox}>
      <Text style = {styles.jobTitle}>
        {jobTitle}
      </Text>
      </View>
   
      <View style={styles.companyInfoBox}>
      <Text style ={styles.companyName}>
        {companyName} / </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location}
            style={styles.locationImage}
            resizeMode='contain'/>

          <Text style={styles.locationName} >{Location}</Text>
          
        </View>
      </View>


      
    </View>
  );
}

export default Company