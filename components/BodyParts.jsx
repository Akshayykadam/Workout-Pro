import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyparts, capitalizeFirstLetter } from '../constants';
import { colors } from '../constants/Colors';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import Animated, { FadeInDown } from 'react-native-reanimated';


const BodyParts = () => {
    const router = useRouter();
    return (
        <View
            className='mx-5'>
            <Text style={{ fontSize: hp(3), padding: 5, paddingTop: 0 }} className='font-semibold text-white'>
            </Text>

            <FlatList
                data={bodyparts}
                numColumns={1}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100, paddingTop: 20 }}
                renderItem={({ item, index }) => <BodyPartCard router={router} index={index} item={item} />}
                key={'single-column'}
            />
        </View>
    );
};

const BodyPartCard = ({ item, index, router }) => {
    return (
        <Animated.View entering={FadeInDown.duration(500).delay(index * 200).springify()}>
            <TouchableOpacity onPress={() => {
                    console.log('Button pressed!', item);
                    router.push({ pathname: '/exercise', params: item });
                }} activeOpacity={0.8} style={{ marginBottom: 16 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#384046',
                        borderRadius: 30,
                        overflow: 'hidden',
                        padding: 10,
                        width: wp(90),
                        position: 'relative',
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 10,
                            left: '50%',
                            transform: [
                                { translateX: -wp(20) / 2 },
                                { translateY: -11 }
                            ],
                            backgroundColor: colors.primary.light,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            paddingVertical: 5,
                            paddingHorizontal: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: colors.primary.dark,
                                fontWeight: 'bold',
                                fontSize: hp(1.3),
                            }}
                        >
                            {capitalizeFirstLetter(item.level)}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                fontSize: hp(2.5),
                                color: 'white',
                                fontWeight: 'bold',
                                paddingLeft: 10,
                            }}
                        >
                            {capitalizeFirstLetter(item.name)}
                        </Text>
                        <Text
                            className='font-semibold'
                            style={{
                                fontSize: hp(1.5),
                                color: 'white',
                                opacity: 0.8,
                                paddingLeft: 10,
                                marginTop: 5,
                            }}
                        >
                            {item.reps} Reps per day
                        </Text>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <Image
                            source={item.image}
                            style={{
                                width: wp(25),
                                height: wp(25),
                                borderRadius: 20,
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: 20,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>

    );
};

export default BodyParts;
