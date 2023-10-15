import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface HomeScreenProps {
    navigation: any;
}

const HomeScreen = (props: HomeScreenProps) => {
    const { navigation } = props || {};

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.push('ProfileScreen');
                }}
            >
                <Text>Go To Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;
