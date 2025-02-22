import { useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from 'components/CustomButton';


export const OnBoardingScreen = ({ navigation }) => {
   

    return (
        <View className="flex-1">
            <View className="flex-[7.5] bg-white">
                <View className=" bg-customBlue h-full rounded-b-[150px] items-center justify-center">
                    

                 </View>
                </View>
            <View className='flex-[2.5] bg-white'>
             <CustomButton onPress={() => navigation.navigate('Login')}  title='Sign In' backgroundColor='white' height={50} width='75%' margin={20} />

             <CustomButton onPress={() => navigation.navigate('Register')}  title='Create New Account' backgroundColor='#003A6C' titleColor='white' height={50} width='75%'/>

            </View>    

        </View>
    );
};
