import { Text, View, Image } from 'react-native';

export const Carousel = ({title='Input Here!', subTitle='This is editable', item, imgSize= 0.7 }) => {
    return (
       <View className="w-screen items-center justify-center p-5">
               <Text style={{
                   fontSize:32,
                   margin:15,
                   fontFamily:'Inter',
                   color:'#FFFFFF'
               }}>{title}</Text>
               <Image source={require('../assets/favicon')} style={{
                 width: width * imgSize, // 60% of screen width
                 height: width * imgSize, // Maintain square ratio
                 resizeMode: 'contain' // Keeps the aspect ratio
               }}></Image>
               <Text className='text-[13px] color-white'>{subTitle}</Text>
         </View>
    );
};
