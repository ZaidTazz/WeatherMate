import React from 'react'
import { View, Text } from 'react-native';

function Header() {

  return (

    // Header Section
    <View style={{ flexDirection: "column", justifyContent: 'center', alignContent:'center', alignItems:'center', backgroundColor: '#48ACFF', paddingVertical: 10.0, paddingHorizontal: 5.0}}>
      <Text style={{fontSize:40.0, fontWeight:'bold', color: '#fff'}}>WeatherMate</Text>
      <Text style={{fontSize:15.0, color: '#000', lineHeight: 18.0 }}>Developed By Zaid Ahamed</Text>
    </View>
    // End of Header Section

  );

}

export default Header
