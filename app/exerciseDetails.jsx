import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { capitalizeFirstLetter, capitalizeFirstLetterOfWords } from '../constants';
import Animated, { FadeInDown } from 'react-native-reanimated';

const exerciseDetails = () => {
    const item = useLocalSearchParams();
    const router = useRouter();

    // Split the secondaryMuscles string by commas and map over the array
    const musclesArray = item?.secondaryMuscles ? item.secondaryMuscles.split(',') : [];


    return (
        <Animated.View entering={FadeInDown.duration(600).delay(200).springify()} className='flex flex-1' style={{ backgroundColor: colors.primary.dark }}>
            <View className='shadow-md bg-neutral-200 rounded-b-[40px]'>
                <Image
                    source={{ uri: item.gifUrl }}
                    contentFit='cover'
                    style={{ width: wp(100), height: wp(100) }}
                    className='rounded-b-[40px]'
                />
            </View>

            {/* Close Button */}

            <TouchableOpacity
                onPress={() => router.back()}
                style={styles.button}
            >
                <Ionicons name="close" size={hp(3)} color='white' />
            </TouchableOpacity>

            {/* Exercise Details */}

            <ScrollView className='mx-4 space-y-2 mt-3' showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10, }}>
                <Text
                    style={{
                        fontSize: hp(3.5),
                        color: 'white',
                        fontWeight: '800',
                        paddingBottom: 5,
                        paddingTop: 5
                    }}
                >
                    {capitalizeFirstLetterOfWords(item.name)}
                </Text>

                {/* equipment */}

                <View
                    style={{
                        backgroundColor: colors.primary.light,
                        borderRadius: 10,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        alignSelf: 'flex-start'
                    }}
                >
                    <Text
                        style={{
                            fontSize: hp(2),
                            color: colors.primary.dark,
                            opacity: 0.8,
                            fontWeight: '500',
                        }}
                    >
                        {capitalizeFirstLetterOfWords(item?.equipment)}
                    </Text>
                </View>

                {/* Muscles */}

                <Text
                    style={{
                        fontSize: hp(2),
                        color: colors.primary.light,
                        opacity: 0.8,
                        fontWeight: 'bold',
                    }}
                >
                    Secondary Muscles: {musclesArray.map((muscle, index) => (
                        <Text
                            key={index}
                            style={{
                                fontSize: hp(2),
                                color: 'white',
                                opacity: 0.8,
                                fontWeight: '500',
                                paddingBottom: 10,
                            }}
                        >
                            {capitalizeFirstLetterOfWords(muscle.trim())}
                            {index < musclesArray.length - 1 ? ', ' : ''}
                        </Text>
                    ))}
                </Text>


                {/* Target */}
                <Text
                    style={{
                        fontSize: hp(2),
                        color: colors.primary.light,
                        opacity: 0.8,
                        fontWeight: 'bold',
                    }}
                >
                    Target: <Text
                        style={{
                            fontSize: hp(2),
                            color: 'white',
                            opacity: 0.8,
                            fontWeight: '500',
                        }}
                    >
                        {capitalizeFirstLetterOfWords(item?.target)}
                    </Text>
                </Text>


                {/* Instructions */}
                <Text
                    style={{
                        fontSize: hp(2),
                        color: colors.primary.light,
                        opacity: 0.8,
                        fontWeight: 'bold',
                    }}
                >
                    Instructions: </Text>
                {
                    item?.instructions.split(',').map((instructions, index) => {
                        return (
                            <Text
                                key={instructions}
                                style={{ fontSize: hp(2), paddingBottom: 10 }}
                                className='text-white'
                            >
                                {capitalizeFirstLetterOfWords(item?.instructions)}
                            </Text>
                        )
                    })
                }


            </ScrollView>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 30,
        left: 20,
        backgroundColor: colors.primary.dark,
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
});


export default exerciseDetails