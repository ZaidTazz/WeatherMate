import React, { useEffect, useState } from 'react';
import { Text, View, Image, ActivityIndicator, SafeAreaView, ScrollView, FlatList, Alert, RefreshControl, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import Header from '../Components/Header';


const openWeatherKey = `1857199a7494d1fb6259499a69949f79`;
let url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${openWeatherKey}`;



function HourlyWise() {
  // React Hooks
  const [forecast, setForecast] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadForecast = async () => {
    setRefreshing(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied');
    }

    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

    const response = await fetch( `${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
    const data = await response.json();

    if(!response.ok) {
      Alert.alert(`Error in retrieving Data: ${data.message}`); 
    } else {
      setForecast(data);
    }

    setRefreshing(false);
  }

  useEffect(() => {
    loadForecast();
  }, [])

  if (!forecast) {
    return <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <ActivityIndicator size="large" />
      </SafeAreaView>;
  }
  

  const current = forecast.current.weather[0];

  
  return (
    <SafeAreaView 
    style={{flex: 1,
    backgroundColor: '#3399FF', }}>

      <StatusBar backgroundColor='#808080' /> 

      <Header />
      
      <ScrollView
        // To Trigger onRefresh Event when Screen is Swiped Down
        refreshControl={
          <RefreshControl 
            onRefresh={() => {  loadForecast() }} 
            refreshing={refreshing}
          />}
      >

        {/* Screen Title */}      
        <View style={{alignItems: 'center', marginBottom: 10.0 }}>
          <Text style={{        
            width: '100%',
            marginVertical: 10.0,
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',}}>Hourly Forecast</Text>
          
          {/*Hourly Forecast Tab */}    
          <FlatList vertical showsVerticalScrollIndicator={false}
            data={forecast.hourly.slice(0, 24)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(hour) => {
              const weather = hour.item.weather[0];
              // Timestamp
              var dt = new Date(hour.item.dt * 1000); 

              return <View style={{        
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: 380,
              backgroundColor: '#fff',
              marginHorizontal: 10,
              marginBottom: 20,
              padding: 10,
              borderRadius: 20,}}>

                <Text style={{fontSize: 15}}>{dt.toLocaleTimeString().replace(/:\d+ /, ' ')}</Text>

                <Image
                  style={{
                  width: 70,
                  height: 70,}}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${weather.icon}@4x.png`,
                  }}
                />
                <Text style={{fontSize: 15}}>{weather.description}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{Math.round(hour.item.temp)}°C</Text>

              </View>
              
            }}
            />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default HourlyWise
