import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Header from '../Components/Header';

import Ionicons from 'react-native-vector-icons/Ionicons';

let url = "https://www.hpb.health.gov.lk/api/get-current-statistical";



function CovidUpdate() {
  // React Hooks
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCovidData = async () => {
        setIsLoading(true);
        try{
            const result = await fetch(url);
            const response = await result.json();
            setData(response)
            setIsLoading(false);
            // console.log(response, 'response');
        }
        catch(error){
            console.log(error)
        }
    }
    fetchCovidData();
  }, [])
  
  return (
    <SafeAreaView style={{
    flex: 1,
    backgroundColor: '#3399FF'
    }}>

    <StatusBar backgroundColor='#808080' />

      <Header />
      
      <ScrollView>

      {/* Screen Title */}
      <View style={{alignItems: 'center', marginBottom: 10.0 }}>
        <Text style={{        
        width: '100%',
        marginVertical: 10.0,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',}}>Covid-19 DashBoard</Text>               
      </View>

      <View style={{        
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 380,
      backgroundColor: '#d63a3a',
      marginHorizontal: 10,
      marginBottom: 20,
      padding: 4,
      borderRadius: 20,}}>
        <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 20.0}}>
            <Ionicons name="pulse-sharp" size={35} color={'#fff'} style={{marginVertical: 15.0}}/>
            <Text style={{fontSize: 25, color: '#808080', fontWeight: 'bold'}}>Total Cases</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.20 }}>{data ? data.data.global_total_cases : 0}</Text>
        </View>
      </View>

      <View style={{        
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 380,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginBottom: 20,
      padding: 4,
      borderRadius: 20,}}>
        <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 20.0}}>
            <Ionicons name="ios-medkit" size={35} color={'#f00'} style={{marginVertical: 15.0}}/>
            <Text style={{fontSize: 25, color: '#808080', fontWeight: 'bold'}}>Recovered</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.20 }}>{data ? data.data.global_recovered : 0}</Text>
        </View>
      </View>

      <View style={{        
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 380,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginBottom: 20,
      padding: 4,
      borderRadius: 20,}}>
        <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 20.0}}>
            <Ionicons name="nuclear" size={35} color={'#f00'} style={{marginVertical: 15.0}}/>
            <Text style={{fontSize: 25, color: '#808080', fontWeight: 'bold'}}>Death Report</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.20 }}>{data ? data.data.global_deaths : 0}</Text>
        </View>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default CovidUpdate




