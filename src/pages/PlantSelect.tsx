import React, { useEffect, useState } from 'react'
import { 
    View, 
    StyleSheet, 
    Text, 
    FlatList
} from 'react-native'
import { EnvironmentButton } from '../components/EnvironmentButton';

import { Header } from '../components/Header'
import api from '../services/api';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentProps {
    key: string;
    title: string;
}

export function PlantSelect(){

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>();

    useEffect(() => {
        async function fetchEnviroment(){
            const { data } = await api.get('plants_environments');
            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ])
        }

        fetchEnviroment();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>Em qual ambiente</Text>
                <Text style={styles.subtitle}>você quer colocar a sua planta?</Text>
            </View>

            <View>
                <FlatList 
                    data={enviroments}
                    renderItem={({ item }) => (
                        <EnvironmentButton title={item.title}></EnvironmentButton>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.text,
        lineHeight: 20
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    }
});