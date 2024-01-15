import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BodyDetails } from './app/screens/BodyDetails';
import { HomeScreen } from './app/screens/HomeScreen';
import { Nutrition } from './app/screens/Nutrition';
import { Profile } from './app/features/profile/Profile';
import { Settings } from './app/screens/Settings';
import { Workout } from './app/screens/Workout';
import { Provider } from 'react-redux';
import store from './app/store';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="BodyDetails" component={BodyDetails} />
                    <Stack.Screen name="Workout" component={Workout} />
                    <Stack.Screen name="Nutrition" component={Nutrition} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Settings" component={Settings} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
