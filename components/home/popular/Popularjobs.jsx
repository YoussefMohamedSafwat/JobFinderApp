import React , {useState} from 'react'
import {
  View, Text, TouchableOpacity, FlatList,
  ActivityIndicator
} from 'react-native';

import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from "../../../hook/useFetch";


const Popularjobs = () => {

  const router = useRouter();

  const data = useFetch();
  // const { data, isloading, error } = useFetch
  //   ('search', {
  //     query: 'React developer',
  //     num_pages: 1,
  //   });
  
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity style ={styles.headerBtn}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
      <FlatList
                  data={data}
                  renderItem={({ item }) => (
                    <PopularJobCard
                      item={item}
                      onHandlePress={() => router.push(`/job-details/${item.job_id}`)} />
               )}
                  keyExtractor={item => item?.job_id}
                  contentContainerStyle={{ columnGap: SIZES.medium }}
                  horizontal/>
            
        {/* {
          isloading ? (
            <ActivityIndicator colors={COLORS.primary} size={"large"} ></ActivityIndicator>
          )
            : error ? (
              <Text>Something went wrong</Text>
            )
              : (
          
        }
         */}
      </View>
     
    </View>
  )
}

export default Popularjobs