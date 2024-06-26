import React from 'react'
import { View, Text,TouchableOpacity ,FlatList} from 'react-native'

import styles from './tabs.style'

const TabButton = ({name,activeTab ,onHandleSearch}) => {
 
  return(
    <TouchableOpacity style={styles.btn(name, activeTab)}
      onPress={onHandleSearch}>
    <Text style ={styles.btnText(name,activeTab)} >{name}</Text>

  </TouchableOpacity>
  );


}
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style = {styles.container}>
     
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton name={item}
            activeTab={activeTab}
          onHandleSearch={()=>{setActiveTab(item)}}/>
        )}

        horizontal
      showsHorizontalScrollIndicator = {false}>
        
         </FlatList>
    </View>
  )
}

export default Tabs