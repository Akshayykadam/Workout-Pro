import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState, useMemo } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExerciseBodypart } from '../api/exerciseDB';
import { capitalizeFirstLetter, dummyData, exerciseData } from '../constants';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

const Exercises = () => {
    const router = useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();

    console.log('Item:', item);

    const memoizedItemName = useMemo(() => item.name, [item.name]);

    useEffect(() => {
        console.log('UseEffect:', memoizedItemName);
        if (memoizedItemName) getExercises(memoizedItemName);
    }, [memoizedItemName]);

    const getExercises = async (bodypart) => {
        console.log('Fetching exercises for:', bodypart);
        let data = await fetchExerciseBodypart(bodypart);
        setExercises(data);
    };

    return (
        <ScrollView style={{ backgroundColor: colors.primary.dark }}>
            <StatusBar style='light' />
            <View style={styles.container}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <View style={styles.tint} />
            </View>
            <TouchableOpacity
                onPress={() => router.back()}
                style={styles.button}
            >
                <Ionicons name="arrow-back" size={hp(3)} color={colors.primary.dark} />
            </TouchableOpacity>

            {/* Exercises */}
            <View className='mx-4 space-y-3 mt-4'>
                <Text style={{ fontSize: hp(3), paddingTop: 10 }} className='font-semibold text-white'>
                    {capitalizeFirstLetter(memoizedItemName)} Exercises
                </Text>
                <View className='mb-10' style={{ paddingTop: 10 }}>
                    <ExerciseList data={exercises} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 60,
        left: 20,
        backgroundColor: colors.primary.light,
        height: hp(5.5),
        width: hp(5.5),
        borderRadius: hp(5.5) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    container: {
        position: 'relative',
        width: wp(100),
        height: hp(40),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    tint: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
});

export default Exercises;




// useEffect(() => {
    //     if (exerciseData[item.name]) {
    //         setExercises(exerciseData[item.name]);
    //     } else {
    //         setExercises([]);
    //     }
    // }, [item]);
