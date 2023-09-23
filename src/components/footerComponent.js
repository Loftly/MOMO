import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterComponent = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerEmail}>alienmemerun@gmail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        position: 'absolute', // This will position the footer at the bottom
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
        padding: 10,
    },
    footerEmail: {
        color: '#ffffff', // White text color
        fontSize: 14,
    }
});

export default FooterComponent;
