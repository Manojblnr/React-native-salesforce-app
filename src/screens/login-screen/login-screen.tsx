import React, {useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './style';
import HomeScreen from '../home-screen/home-screen';
import { useNavigation } from '@react-navigation/native';
// import { setUsername, setPassword } from "../../redux/reducers/persistant-reducer";


// interface LoginScreenStates {
//     userName : string;
//     password : string
// }

console.log('login screen');
const LoginScreen = ({navigation} : {navigation : any}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleNavToHome = () => {
        console.log('navigate to home screen')
        navigation.replace('HomeScreen')
    }

    const makeCheck = () => {
        return password.length > 0 && userName.length > 0;
    }

    const handleLogin = () => {
        console.log('login pressed');
        console.log('username', userName);
        console.log('password', password);
    }
    return (
        <>  
            <View style={styles.topNavStyle}>
                <Text style={styles.topNavTextStyle}>{'mVerve Login'}</Text>
            </View>
            <View style={styles.containerStyle}>
                <View style={{alignItems:'center'}}>
                    <Image
                    source={require('../../assets/salesforce.png')}
                    style={styles.image}
                    />
                </View>
                <View style={{paddingVertical: 8}}>
                        <Text style={styles.userNameTextStyle}>Username</Text>
                        <TextInput 
                        placeholder='Enter User Name'
                        placeholderTextColor={'grey'} 
                        style={styles.textInputStyle}
                        onChangeText={(text) => setUserName(text)}
                        value={userName}
                        />
                </View>
                <View style={{paddingVertical: 8}}>
                        <Text style={styles.passwordTextStyle}>Password</Text>
                        <TextInput 
                        placeholder='Enter Password'
                        placeholderTextColor={'grey'} 
                        style={styles.textInputStyle}
                        secureTextEntry
                        onChangeText={(pass) => setPassword(pass)}
                        value={password}
                        />
                </View>
                <View style={styles.buttonContainerStyle}>
                        <TouchableOpacity 
                        disabled={!makeCheck()}
                        style={!makeCheck() ? styles.disabledButton : styles.buttonStyle}
                        onPress={() => handleLogin()}
                        >
                            <View style={styles.buttonTitleContainer}>
                                <Text style={styles.buttonTextStyle}>Login</Text>
                            </View>
                        </TouchableOpacity>
                </View>
                <View>
                    <Button title='go to home screen' onPress={handleNavToHome}/>
                </View>
            </View>
        </>
    )
}



export default LoginScreen;