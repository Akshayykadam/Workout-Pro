// import { View, StyleSheet, Text } from 'react-native';
// import React from 'react';
// import Carousel from 'react-native-snap-carousel';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { sliderImage } from '../constants/index';
// import { LinearGradient } from 'expo-linear-gradient';
// import { colors } from '../constants/Colors'
// import { Image } from 'expo-image';

// const imageSlider = () => {
//   return (
//     <Carousel
//       data={sliderImage}
//       loop={false}
//       autoplay={false}
//       renderItem={ItemCard}
//       sliderWidth={wp(100)}
//       firstItem={1}
//       itemWidth={wp(100) - 45} 
//       layout={'default'}
//       slideStyle={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         paddingHorizontal: 20
//       }}
//       layoutCardOffset={100}
//     />
//   );
// };


// const ItemCard = ({ item }) => {
//   return (
//     <View style={styles.container}>
//       <Image source={item} style={styles.image} />
//       <LinearGradient
//         colors={['rgba(0,0,0,0)', 'transparent']}
//         style={styles.gradient}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: wp('90%'), // 90% of screen width
//     height: hp('25%'), // 25% of screen height
//     borderRadius: wp('8%'), // Radius based on percentage of width
//     overflow: 'hidden',
//     margin: wp('5%'), // 5% of screen width for margin
//     position: 'relative', // Ensure children are positioned relative to the container
//     borderWidth: 0, // Width of the border
//     borderColor: 'black', // Color of the border
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     contentFit: 'cover',
//   },
//   gradient: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     borderRadius: wp('5%'), // Match the border radius of the container
//   },
// });



// export default imageSlider;

// {/*

// const imageSlider = () => {
//   return (
//     <Carousel
//       data={sliderImage}
//       loop={true}
//       autoplay={false}
//       renderItem={ItemCard}
//       sliderWidth={wp(100)}
//       firstItem={1}
//       sliderStyle={{ display: 'flex', alignItems: 'center' }}
//       itemWidth={wp(100) - 70}
//       layout={'default'}
//       slideStyle={{display:'flex', alignItems: 'center'}}
//       layoutCardOffset={100}
//     />
//   );
// };
// */}
