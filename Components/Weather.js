import { View, Text, Image, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import Search from './Search';
import Header from './Header';

export default function Weather({ weatherData, getWeatherData }) {

    const { weather,
            visibility,
            weather: [{description, icon}],
            name,
            main: { temp, humidity, pressure },
            wind: { speed },
    } = weatherData;
    
    const [{ main }] = weather;
    
    
    return (
        <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#3399FF',
        }}>
            
            <StatusBar backgroundColor='#808080' />
            
            <Header />

            <Search getWeatherData={getWeatherData} />

            <ScrollView>
                {/* City Name */}
                <View style={{alignItems: 'center', marginBottom: 20.0 }}>
                    <Text style={{
                    width: '100%',
                    textAlign: 'center',
                    fontSize: 35,
                    fontWeight: 'bold',
                    color: '#fff',
                    }}>{name}</Text>               
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
                        <Text style={{fontSize: 45, color: '#fff', fontWeight: 'bold'}}>{temp} °C</Text>
                        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.20 }}>{description}</Text>
                    </View>
                    <Image
                        style={{
                            width: 150,
                            height: 150,
                        }}
                        source={{
                        uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
                        }}
                    />
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
                        source={{
                            uri: `https://toppng.com/uploads/preview/humidity-png-115539515486hder8cchj.png`,
                            }}
                        /> */}
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ fontSize: 35, color: '#000'}}>{humidity}%</Text>
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
                        source={require("../assets/visibility.png")}
                        style={{width:45, height:45, resizeMode : 'contain',}}
                        /> */}
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ fontSize: 35, color: '#000'}}>{visibility}</Text>
                        <Text style={{ fontSize: 20, color: '#808080'}}>Visibility</Text>        
                    </View>
                
                </View>

                {/* Pressure Tab */}
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
                        source={require("../assets/pressure.png")}
                        style={{width:45, height:45, resizeMode : 'contain',}}
                        /> */}
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ fontSize: 35, color: '#000'}}>{pressure} mb</Text>
                        <Text style={{ fontSize: 20, color: '#808080'}}>Pressure</Text>
                    </View>

                </View>

                {/*Windspeed Tab */}
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
                        source={require("../assets/windspeed.png")}
                        style={{width:45, height:45, resizeMode : 'contain',}}
                        /> */}
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ fontSize: 35, color: '#000'}}>{speed} m/s</Text>
                        <Text style={{ fontSize: 20, color: '#808080'}}>Wind Speed</Text> 
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
    )
}