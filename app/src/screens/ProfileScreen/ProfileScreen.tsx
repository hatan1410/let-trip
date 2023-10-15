import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface ProfileScreenProps {
    navigation: any;
}

const ProfileScreen = (props: ProfileScreenProps) => {
    const { navigation } = props || {};

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.pop();
                }}
            >
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default ProfileScreen;
