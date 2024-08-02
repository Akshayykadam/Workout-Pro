import { StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../constants/Colors';

export default function Page() {
  const router = useRouter();
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('hasLaunched');
        if (value === null) {
          // First time launch
          await AsyncStorage.setItem('hasLaunched', 'true');
          setIsFirstLaunch(true);
        } else {
          // Not the first time
          setIsFirstLaunch(false);
          router.push('home');
        }
      } catch (e) {
        console.error(e);
      }
    };

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    // Still checking
    return null;
  }

  if (isFirstLaunch) {
    return (
      <Animated.View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#121212' }}>
        <StatusBar style='dark' />
        <Image
          style={{ position: 'absolute', width: wp(100), height: hp(100), opacity: 0.4 }}
          source={require('../assets/images/welcome.png')}
        />
        <LinearGradient
          colors={['transparent', '#000']}
          style={{ width: wp(100), height: hp(50), justifyContent: 'flex-end', paddingBottom: hp(3) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        >
          <View style={{ alignItems: 'stretch', marginBottom: hp(5), paddingLeft: wp(5) }}>
            <Animated.Text entering={FadeInDown.delay(200).springify()} style={{ fontSize: hp(5), color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
              BE <Text style={{ color: colors.primary.light }}>HEALTHY</Text>
            </Animated.Text>
            <Animated.Text entering={FadeInDown.delay(400).springify()} style={{ fontSize: hp(5), color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
              BE <Text style={{ color: colors.primary.light }}>STRONGER</Text>
            </Animated.Text>
            <Animated.Text entering={FadeInDown.delay(600).springify()} style={{ fontSize: hp(5), color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
              BE <Text style={{ color: colors.primary.light }}>YOURSELF</Text>
            </Animated.Text>
          </View>
          <Animated.View entering={FadeInDown.delay(600).springify()} style={{ alignItems: 'center', marginBottom: hp(5) }}>
            <TouchableOpacity
              onPress={() => router.push('home')}
              style={{
                height: hp(6),
                width: wp(90),
                backgroundColor: colors.primary.light,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                alignSelf: 'center',
              }}
            >
              <Text style={{ fontSize: hp(2.5), color: 'black', fontWeight: '400' }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </LinearGradient>
      </Animated.View>
    );
  }

  return null;
}
