import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import  styles  from '../home-screen/style'

const HomeScreen = ({navigation} : {navigation : any} ) => {

    const handleNavToLogin = () => {
        console.log('Navigate to login screen')
        navigation.replace('LoginScreen')
    }
    return (
        <>
            <View style={styles.container}>
                <Text>Text from Home screen</Text>
            </View>
            <View>
                <Button title='Go to Login Screen' onPress={handleNavToLogin}></Button>
            </View>
        </>
        
    )
}


export default HomeScreen;