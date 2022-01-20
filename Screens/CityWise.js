import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Weather from '../Components/Weather';
import Search from '../Components/Search';

const API_KEY = "1857199a7494d1fb6259499a69949f79";


function CityWise() {
    // React Hooks
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function getWeatherData(cityName) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`

        try {
            const response = await fetch(API);
            if(response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherData('London');
    }, [])
    

    if(!loaded) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#6dd5ed",
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <ActivityIndicator color='#1CB5E0' size='large' />
            </View>

        )
    }

    else if(weatherData === null) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#6dd5ed",
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Search getWeatherData={getWeatherData}/>
                <Text style={{
                    margin: 18,
                    fontSize: 26
                }}>City Not Found! Try Again.</Text>
            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#6dd5ed",
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Weather weatherData={weatherData} getWeatherData={getWeatherData}  />
        </View>
    );
}

export default CityWise
