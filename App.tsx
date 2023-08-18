import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>hello world</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        backgroundColor: 'red',
        color: 'white',
    },
});

export default App;
