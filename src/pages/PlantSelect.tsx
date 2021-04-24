import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import colors from '../styles/colors';

export function PlantSelect(){
    return (
        <View style={styles.container}>
            <Text>
                Selecionar Planta
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
});