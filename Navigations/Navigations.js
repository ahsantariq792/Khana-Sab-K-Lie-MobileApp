import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, Header } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import Logo from '../Components/Logo';

import GetStarted from '../screens/GetStarted';
import Home from '../screens/Home';
import Signup from '../screens/PublicUser/Signup';
import LoginUser from '../screens/PublicUser/LoginUser';
import MapPage from '../screens/PublicUser/MapPage';
import RashanForm from '../screens/PublicUser/RashanForm';
import ApplicationStatus from '../screens/PublicUser/ApplicationStatus';
import GenerateQRCode from '../screens/PublicUser/GenerateQRCode';

import LoginManager from '../screens/Manager/LoginManager';
import ManagerHome from '../screens/Manager/ManagerHome';
import VerifyByQR from '../screens/Manager/VerifyByQR';

function Navigations() {
    const Stack = createNativeStackNavigator();

    return (
        < NavigationContainer >
            <Stack.Navigator initialRouteName="VerifyByQR">

                <Stack.Screen name="GetStarted" component={GetStarted}
                    options={{
                        title: '',
                        headerTitle: () => (<Image style={{ width: 60, height: 60 }} source={require("../assets/kahana.png")} />),
                        headerStyle: {
                            backgroundColor: '#90EE90',
                            borderRadius: 10
                        },
                    }} />

                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: "Home",
                        headerTitleAlign: 'center',
                        headerTitleStyle: { fontSize: 18, color: "white" },
                        headerStyle: {
                            backgroundColor: '#32CD32',
                        },
                    }} />

                <Stack.Screen name="LoginUser" component={LoginUser} options={{ headerTitleAlign: 'center', title: 'Login', headerTitleStyle: { fontSize: 18 } }} />
                <Stack.Screen name="LoginManager" component={LoginManager} options={{ headerTitleAlign: 'center', title: 'Manager Login', headerTitleStyle: { fontSize: 20 } }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerTitleAlign: 'center', title: '', headerTitleStyle: { fontSize: 18 } }} />
                <Stack.Screen name="MapPage" component={MapPage} />
                <Stack.Screen name="RashanForm" component={RashanForm} options={{ headerTitleAlign: 'center', title: 'Rashan Form', headerTitleStyle: { fontSize: 18 } }} />
                <Stack.Screen name="ApplicationStatus" component={ApplicationStatus} options={{ headerTitleAlign: 'center', title: '', headerTitleStyle: { fontSize: 18 } }} />
                <Stack.Screen name="ManagerHome" component={ManagerHome} options={{ headerTitleAlign: 'center', title: '', headerTitleStyle: { fontSize: 18 } }} />
                <Stack.Screen name="GenerateQRCode" component={GenerateQRCode} options={{ headerTitleAlign: 'center', title: '', headerTitleStyle: { fontSize: 18 } }} />
                <Stack.Screen name="VerifyByQR" component={VerifyByQR} options={{ headerTitleAlign: 'center', title: '', headerTitleStyle: { fontSize: 18 } }} />

            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Navigations;