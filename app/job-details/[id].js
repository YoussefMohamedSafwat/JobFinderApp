import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";


const tabs = ["About", "Qualifications", "Responsibilities"];



const JobDetails = () => {
 
    const params = useGlobalSearchParams();
    const userId = params.id;
    const router = useRouter();
    const data = useFetch();
    const obj = data.find(ojb => ojb.job_id === userId)

  const [activeTab, setActiveTab] = useState(tabs[0]);
  

  const displayTabs = () => {
    switch (activeTab) {
      
      case "About":
        return <JobAbout description = {obj.job_description ?? "no data provided"}></JobAbout>;
        break;
      case "Qualifications":
        return <Specifics
          title="Qualifications"
          points={obj.job_highlights?.Qualifications??['N/A']} />
        
      case "Responsibilities":
        return <Specifics
        title="Responsibilities"
        points={obj.job_highlights?.Responsibilities??['N/A']} />
  
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
        headerRight: () => (
        
          <ScreenHeaderBtn iconUrl={icons.share} deminsion="60%" />
        ),
        headerTitle:""
      }} />
    
            <>
                <ScrollView>
                    <View style = {{padding:SIZES.medium,paddingBottom:100}}>
                        <Company
                            companylogo={obj.employer_logo}
                            jobTitle={obj.job_title}
                            companyName={obj.employer_name}
                            Location ={obj.job_country}>
                        </Company>


                        <JobTabs tabs ={tabs}
                            setActiveTab={setActiveTab}
                           activeTab={activeTab}/>
              
                   { displayTabs()}
                    </View>
                   
               
          </ScrollView>
          <JobFooter url ={ obj.job_apply_link } />
            </>

     </SafeAreaView>
    );
  }

export default JobDetails;