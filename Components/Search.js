import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search({ getWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        // Search Tab
        <View 
            style={{
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',
            marginRight: 10,
            marginLeft: 10,
            fontWeight: "bold",
            padding: 12,
            marginVertical: 25,
            width: Dimensions.get('screen').width - 20,
        }}>
        <Ionicons name="location-sharp" size={28} />
        <TextInput 
            placeholder='City Name'
            value={cityName}
            onChangeText={(text) => setCityName(text)}
        />
        <Ionicons name="search" size={28} color="black"  onPress={() => getWeatherData(cityName)}/>
        </View>
    )
}