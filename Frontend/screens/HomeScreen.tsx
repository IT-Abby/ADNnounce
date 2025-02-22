import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import { CustomButton } from 'components/CustomButton';
import axios from "axios";

export const HomeScreen = ({navigation}) => {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

   const sendData = async () => {
    try{
        const response = await axios.post('http://192.168.1.15:5000/comehere', {
            name, 
            pass
        })
        
        Alert.alert(`Success', 'welcome ${response.sendData.username}`)
    }catch(err){
        console.log("Error in sending data: ", err)
    }
   }

  return (
    <View className='bg-red-400 h-screen m-56' style={{
        display:'flex',

    }}>
        <TextInput
        style={{borderWidth:1, width: '90%', padding:10, marginBottom:10}}
        placeholder='type here..'
        value={name}
        onChangeText={setName}
        />
         <TextInput
        style={{borderWidth:1, padding:10, marginBottom:10}}
        placeholder='type password here..'
        secureTextEntry
        value={pass}
        onChangeText={setPass}
        />
        <CustomButton title='Submit' width='70' height={40} margin={5} borderRadius={50} onPress={sendData} />

        <CustomButton title='Navigate to login!' onPress={()=> navigation.navigate('LoginScreen') } backgroundColor='#A50E0E'></CustomButton>
      
    </View>
  );
};
