import React from 'react'
import {
  View, Text, TouchableOpacity,  ActivityIndicator, FlatList} from 'react-native';

import { useRouter } from 'expo-router';

import styles from './nearbyjobs.style';
import { COLORS ,SIZES} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import data  from "../../../hook/useFetch";
import useFetch from '../../../hook/useFetch';


const NearbyJobs = () => {

  const router = useRouter();
 
  const data = useFetch();

   
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        
        {/* {
          isloading ? (
            <ActivityIndicator colors={COLORS.primary} size={"large"} ></ActivityIndicator>
          )
            : error ? (
              <Text>Something went wrong</Text>
            )
              : (
               
              )
        } */}
        {/* data?.map((job) => (
          <NearbyJobCard
            job={job}
            key={`nearby-job-${job.job_id}`}
            handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
          />
        )) */}
              <FlatList
                  data={data}
          renderItem={({ item } ) => (
                    <NearbyJobCard
                      job={item}
                      handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                  
                   />
               )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{ rowGap: SIZES.medium }}
          
                  />
        
        
      </View>
     
    </View>
  );
};

export default NearbyJobs;