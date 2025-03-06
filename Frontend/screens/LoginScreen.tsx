import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { CustomButton } from 'components/CustomButton';
import { useState, useEffect } from 'react';
import { auth, signInWithCustomToken,signInWithEmailAndPassword } from '../firebase';
import Modal from 'react-native-modal'; 



export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
  if (!email.trim() || !pass.trim()) {
    Alert.alert('Error', 'Please fill in all fields');
    return;
  }

  try {
    console.log("Logging in with:", email, pass);
    const userCredential = await signInWithEmailAndPassword(auth, email.trim(), pass.trim());
    
    console.log("Login Successful:", userCredential.user);

    // Fetch Firebase ID Token
    const idToken = await userCredential.user.getIdToken();
    console.log("Firebase ID Token:", idToken);

    // Send Token to Backend
    const response = await fetch('http://192.168.1.21:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken }),
    });

    const data = await response.json();
    if (data.success) {
      Alert.alert('Success', 'Logged in successfully');
      console.log("Backend Token:", data.token);
      navigation.reset({
        index: 0,  // Make sure to reset the stack to the first screen
        routes: [{ name: 'Home' }],  // Navigate to Home after successful login
      });
    } else {
      Alert.alert('Login Failed', data.message);
    }

  } catch (error) {
    console.error("Firebase Login Error:", error.code, error.message);

    let errorMessage = "Login failed. Please try again.";
    if (error.code === "auth/invalid-credential") errorMessage = "Invalid email or password.";
    else if (error.code === "auth/user-not-found") errorMessage = "User does not exist.";
    else if (error.code === "auth/wrong-password") errorMessage = "Incorrect password.";
    else if (error.code === "auth/too-many-requests") errorMessage = "Too many failed attempts. Try again later.";

    Alert.alert("Login Error", errorMessage);
  }
};



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
            value={email}
            onChangeText={setEmail}
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
            value={pass}
            onChangeText={setPass}
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
              onPress={() => handleLogin()}
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
