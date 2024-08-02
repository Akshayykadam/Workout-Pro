import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../constants/Colors'
import ImageSlider from '../components/imageSlider';
import BodyParts from '../components/BodyParts';

const Home = () => {
    const greeting = getGreeting();
    return (
        <SafeAreaView className='flex-1' edges={['top']} style={{ backgroundColor: colors.primary.dark, }} >
            <StatusBar style="light" />
            {/* punchline and avatar */}
            <View className='flex-row justify-between items-center mx-5 mt-5'>
                <View className='space-y-1'>
                    <Text
                        style={{ fontSize: hp(1.5) }}
                        className='font-bold tracking-wider text-gray-300'
                    >
                        WORKOUT-PRO
                    </Text>

                    <Text
                        style={{ fontSize: hp(3), color: colors.primary.light }}
                        className='font-bold tracking-wider'
                    >
                        Hi,<Text className='font-bold tracking-wider text-gray-300'> {greeting} </Text>
                    </Text>
                </View>

                <View
                    className='flex justify-center items-center'
                    style={{ height: hp(5.5), width: hp(5.5) }}
                >
                    <Ionicons name="notifications" size={35} color={colors.primary.light} />
                </View>
            </View>

            {/* Image Silder */}
            {/* <View>
                <ImageSlider />
            </View> */}

            <View style={{paddingBottom: 50 }}>
                <BodyParts />
            </View>

        </SafeAreaView>
    )
}


const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
        return 'GOOD MORNING';
    } else if (hours < 18) {
        return 'GOOD AFTERNOON';
    } else {
        return 'GOOD NIGHT';
    }
};

export default Home
