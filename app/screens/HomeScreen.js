import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../assets/fitness_app_2.jpeg')}
                style={styles.logo}
            />
            <Text style={styles.textStyle}>
                Are you ready to start getting healthy?
            </Text>
            <StatusBar style="auto" />
            <TouchableOpacity
                style={styles.startBtn}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text>Let's Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    startBtn: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    textStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        marginBottom: 100,
    },
    logo: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
        aspectRatio: 1,
    },
});
