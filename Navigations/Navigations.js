import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';
import Home from '../screens/Home';
import Signup from '../screens/Signup';

function Navigations() {
    const Stack = createNativeStackNavigator();
    return (
        < NavigationContainer >
            <Stack.Navigator initialRouteName="GetStarted">
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Navigations;