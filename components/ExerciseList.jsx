import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { capitalizeFirstLetterOfWords } from '../constants';
import { colors } from '../constants/Colors';
import Animated, { FadeInDown } from 'react-native-reanimated';

const ExerciseList = ({ data }) => {
    const router = useRouter();

    return (
        <View>
            <FlatList
                data={data}
                numColumns={1}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 500, paddingTop: 20 }}
                renderItem={({ item, index }) => <ExerciseCard router={router} index={index} item={item} />}
                key={'single-column'}
            />
        </View>
    );
}

const ExerciseCard = ({ item, router, index }) => {
    return (
        <Animated.View entering={FadeInDown.duration(500).delay(index * 200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({ pathname: '/exerciseDetails', params: item })}
                activeOpacity={0.8}
                style={{ marginBottom: 16 }}
            >
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
                    <View style={{ flex: 1, padding: 10 }}>
                        <Text
                            style={{
                                fontSize: hp(2.4),
                                color: 'white',
                                fontWeight: 'semi-bold',
                                paddingBottom: 5
                            }}
                        >
                            {capitalizeFirstLetterOfWords(item.name)}
                        </Text>
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
                                    fontSize: hp(1.5),
                                    color: colors.primary.dark,
                                    opacity: 0.8,
                                    fontWeight: '500',
                                }}
                            >
                                10 Reps per day
                            </Text>
                        </View>
                    </View>

                    <View style={{ position: 'relative' }}>
                        <Image
                            source={{ uri: item.gifUrl }}
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
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>

    );
};

export default ExerciseList