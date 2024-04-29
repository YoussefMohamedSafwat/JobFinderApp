import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'
import useFetch from '../../hook/useFetch'

const JobSearch = () => {
    const params = useGlobalSearchParams();
    const router = useRouter()


    const [page, setPage] = useState(1);

    const data = useFetch();

    console.log(params.id);

    const search = () => {
        switch (params.id) {
            
            case "Full-time":
                params.id = "FULLTIME";
                break;
                
            case "Part-time":
                params.id = "PARTTIME";
                break;
                
            case "Contractor":
                params.id = "CONTRACTOR";
                break;
        }
    }
    
    search();

    console.log(params.id);
  
    const searchResult = data.filter((item) => (item.job_title).toLowerCase().includes(params.id.toLowerCase())
        || (item.job_employment_type.includes(params.id)));

 
    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
          <Stack.Screen options={{
        
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (

            <ScreenHeaderBtn iconUrl={icons.left} deminsion="60%"
                handlePress={()=>router.back()}/>
        ),
        headerTitle:""
      }} />

            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                    
                    </>
                )}
                // ListFooterComponent={() => (
                //     <View style={styles.footerContainer}>
                //         <TouchableOpacity
                //             style={styles.paginationButton}
                //             onPress={() => handlePagination('left')}
                //         >
                //             <Image
                //                 source={icons.chevronLeft}
                //                 style={styles.paginationImage}
                //                 resizeMode="contain"
                //             />
                //         </TouchableOpacity>
                //         <View style={styles.paginationTextBox}>
                //             <Text style={styles.paginationText}>{page}</Text>
                //         </View>
                //         <TouchableOpacity
                //             style={styles.paginationButton}
                //             onPress={() => handlePagination('right')}
                //         >
                //             <Image
                //                 source={icons.chevronRight}
                //                 style={styles.paginationImage}
                //                 resizeMode="contain"
                //             />
                //         </TouchableOpacity>
                //     </View>
                // )}
            />
        </SafeAreaView>
    )
}

export default JobSearch