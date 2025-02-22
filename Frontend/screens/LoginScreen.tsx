import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { CustomButton } from 'components/CustomButton';

export const LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1">
      <View className="flex-[9] bg-white">
        <View className="bg-darkBlue h-full rounded-b-[150px] items-center justify-center w-full">

          {/* Logo Section */}
          <View>
            <Text>Logo here</Text>
          </View>

          {/* Email Input */}
          <Text className='self-start mx-12 text-[14px] color-white my-3'>Email</Text>
          <TextInput
            style={{
              width: '80%',
              height: '10%',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
            placeholder='Enter Email'
          />

          {/* Password Input */}
          <Text className='self-start mx-12 text-[14px] color-white my-3'>Password</Text>
          <TextInput
            style={{
              width: '80%',
              height: '10%',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
            placeholder='Enter Password'
            secureTextEntry={true}
          />

          {/* Forgot Password */}
          <TouchableOpacity
            className='self-start mx-12 my-2'
            onPress={() => Alert.alert("Notice","This feature is still under development")}
          >
            <Text style={{color:'#BDC3C7'}}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <View className="w-full">
            <CustomButton
              onPress={() => navigation.navigate('Login')}
              title='Login'
              backgroundColor='#FFFFFF'
              titleColor='#003A6C'
              height={50}
              width='80%'
              margin={10}
            />
          </View>
        </View>
      </View>

      <View className='flex-[1] flex-row bg-white justify-center items-center'>
        <Text>Don't Have An account? </Text>
        <TouchableOpacity className='mx-1' onPress={() => navigation.navigate('Register')}>
          <Text style={{ textDecorationLine: 'underline' }}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
