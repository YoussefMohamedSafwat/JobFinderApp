import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
   const router = useRouter();
  return (
    <SafeAreaView style = {{flex:1 , backgroundColor:COLORS.lightWhite}}>
    
      <Stack.Screen options={{
        
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (

          <ScreenHeaderBtn iconUrl={icons.menu} deminsion="60%" />
        ),
        headerRight: () => (
        
          <ScreenHeaderBtn iconUrl={images.profile} deminsion="100%" />
        ),
        headerTitle:""
      }} />
      
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            } } />
          <Popularjobs />
          <Nearbyjobs/>
        </View>
        
      </ScrollView>
   </SafeAreaView>
  );
}

