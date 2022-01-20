import React, { useEffect, useState } from 'react';
import { Text, View, Image, ActivityIndicator, SafeAreaView, ScrollView, Alert, RefreshControl, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import Header from '../Components/Header';


const openWeatherKey = `1857199a7494d1fb6259499a69949f79`;
let url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=${openWeatherKey}`;



function Current() {
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
      Alert.alert(`Error in retrieving data: ${data.message}`); 
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

      <View style={{alignItems: 'center'}}>

      {/* Screen Title */}
      <View style={{alignItems: 'center', marginBottom: 10.0 }}>
        <Text style={{        
        width: '100%',
        marginVertical: 10.0,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',}}>Current Weather</Text>               
      </View>

      {/* Current Temperature and Description */}
      <View style={{        
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 380,
      backgroundColor: '#00007F',
      marginHorizontal: 10,
      marginBottom: 20,
      padding: 4,
      borderRadius: 20,}}>
        <View style={{alignItems: 'flex-start', justifyContent: 'center', marginHorizontal: 20.0}}>
            <Text style={{fontSize: 45, color: '#fff', fontWeight: 'bold'}}>{Math.round(forecast.current.temp)}°C</Text>
            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.20 }}>{current.description}</Text>
        </View>
        <Image
            style={{      
              width: 150,
              height: 150,}}
            source={{
            uri: `http://openweathermap.org/img/wn/${current.icon}@4x.png`
            }}
        />
      </View>

      {/*Feels Like Tab */}
    <View style={{
    flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 380,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginBottom: 8,
      padding: 10,
      borderRadius: 20,
    }}>
        {/* <Image 
          source={require('../assets/temp.png')}
          style={{width:45, height:45, resizeMode : 'contain',}}
        /> */}
        <View style={{alignItems: 'center'}}>
          <Text style={{ fontSize: 35, color: '#000'}}>{forecast.current.feels_like}°C</Text> 
          <Text style={{ fontSize: 20, color: '#808080'}}>Feels Like</Text>
        </View>  
      </View>

        {/*Humidity Tab */}    
      <View style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 380,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginBottom: 8,
      padding: 10,
      borderRadius: 20,
      }}>
          {/* <Image 
            source={require('../assets/humidity.png')}
            style={{width:45, height:45, resizeMode : 'contain',}}
          /> */}
          <View style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 35, color: '#000'}}>{forecast.current.humidity}% </Text>
            <Text style={{ fontSize: 20, color: '#808080'}}>Humidity</Text>
          </View>
        </View>

        {/*Visibility Tab */}
      <View style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 380,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginBottom: 8,
      padding: 10,
      borderRadius: 20,
      }}>
          {/* <Image 
            source={require('../assets/visibility.png')}
            style={{width:45, height:45, resizeMode : 'contain',}}
          /> */}
          <View style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 35, color: '#000'}}>{forecast.current.visibility}</Text>
            <Text style={{ fontSize: 20, color: '#808080'}}>Visibility</Text>
          </View>
        </View>

        {/*Pressure Tab */}
      <View style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: 380,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      marginBottom: 8,
      padding: 10,
      borderRadius: 20,
      }}>
          {/* <Image 
            source={require('../assets/pressure.png')}
            style={{width:45, height:45, resizeMode : 'contain',}}
          /> */}
          <View style={{alignItems: 'center'}}>
            <Text style={{ fontSize: 35, color: '#000'}}>{forecast.current.pressure} mb </Text>
            <Text style={{ fontSize: 20, color: '#808080'}}>Pressure</Text>
          </View>
        </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default Current




