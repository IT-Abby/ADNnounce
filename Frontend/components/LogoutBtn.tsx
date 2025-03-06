import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import { auth } from '../firebase';  // Assuming Firebase authentication setup

const LogoutBtn = () => {
    const navigation = useNavigation(); // Hook to access navigation

    const handleLogout = async () => {
        try {
            await auth.signOut();
            Alert.alert("Logged out", "You have been logged out successfully.");
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        } catch (error) {
            console.error("Error logging out:", error);
            Alert.alert("Logout Failed", "An error occurred during logout.");
        }
    };

    return (
        <TouchableOpacity
            onPress={handleLogout}
            style={{
                backgroundColor: '#D9534F',
                padding: 15,
                borderRadius: 10,
                marginTop: 20,
            }}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
            >
                Logout
            </Text>
        </TouchableOpacity>
    );
};

export default LogoutBtn;
