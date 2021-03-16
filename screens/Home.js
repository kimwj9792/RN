import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { TextInput, Button, Card, Title, ActivityIndicator } from 'react-native-paper';
import Header from './Header';

const Home = (props) => {
    const [info, setInfo] = useState({
        name: 'loading',
        temp: 'loading',
        humidity: 'loading',
        desc: 'loading',
        icon: 'loading',
    });
    useEffect(() => {
        getWeather()
    }, []);

    const getWeather = () => {
        let myCity;
        const { city } = props.route.params;
        console.log(props.route.params);
        myCity = city;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=bcb29687b7383a315241d44566e196f0`)
            .then(data => data.json())
            .then(results => {
                setInfo({
                    name: results.name,
                    temp: results.main.temp,
                    humidity: results.main.humidity,
                    desc: results.weather[0].description,
                    icon: results.weather[0].icon,
                });
                console.log('query');
            });
    }

    if (props.route.params.city != 'seoul') {
        getWeather();
        props.route.params.city = 'seoul';
    }
    
    return (
        <View style={{ flex: 1 }}>
            <Header name='Weather App' />
            <View style={{ alignItems: 'center' }}>
                <Title style={{ color: '#00aaff', marginTop: 30, fontSize: 30 }}>{info.name}</Title>
                <Image style={{ width: 120, height: 120 }} source={{ uri: 'https://openweathermap.org/img/w/' + info.icon + '.png' }} />
            </View>
            <Card style={{ margin: 5, padding: 12, backgroundColor: '#F7F7F7' }}>
                <Title style={{ color: '#00aaff' }}>Temperature - {info.temp}</Title>
            </Card>
            <Card style={{ margin: 5, padding: 12, backgroundColor: '#F7F7F7' }}>
                <Title style={{ color: '#00aaff' }}>Humidity - {info.humidity}</Title>
            </Card>
            <Card style={{ margin: 5, padding: 12, backgroundColor: '#F7F7F7' }}>
                <Title style={{ color: '#00aaff' }}>Description - {info.desc}</Title>
            </Card>
        </View>
    );
}

export default Home;