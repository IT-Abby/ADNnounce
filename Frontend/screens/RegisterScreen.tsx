import { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, TextInput, Image } from 'react-native';
import { CustomButton } from 'components/CustomButton';
import RNPickerSelect from 'react-native-picker-select';
import { LoginScreen } from './LoginScreen';
import Modal from 'react-native-modal';
import LoadingModal from 'components/LoadingModal';


export const RegisterScreen = ({ navigation }) => {
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [org, setOrg] = useState({});
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const registerUser = async () => {
        try{
            setIsLoading(true);

            const response = await fetch('http://192.168.1.21:5000/register', {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    FName,
                    LName,
                    email,
                    org,
                    pass,
                    confirmPass
                })
            })

            const data = await response.json();
            console.log(data)
            if(response.ok){
                Alert.alert('Success', 'Registration Successful',
                    [{text: 'OK', onPress: () => {
                        navigation.replace('Login');
                    }}]
                )
            }else{
                Alert.alert("Error", data.error)
            }

        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    }

    // Password visibility toggle icons
    const eyeOpen = <Image source={require("../assets/eye-open.png")} style={{ width: 20, height: 20 }} />;
    const eyeClose = <Image source={require("../assets/eye-close.png")} style={{ width: 20, height: 20 }} />;

    return (
        <View className="flex-1">
            <View className="flex-[7.5] bg-white">
                <View className="bg-darkBlue h-full rounded-b-[150px] items-center justify-center">

                    {/* First Name & Last Name Text Input */}
                    <View className="flex flex-row w-[80%] justify-between items-center">
                        {/* First Name */}
                        <View className="flex-[50%]">
                            <Text style={{ color: 'white', fontSize: 14, marginVertical: 3 }}>First Name</Text>
                            <TextInput
                                style={{
                                    width: '95%',
                                    height: 50,
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    borderRadius: 10,
                                    paddingHorizontal: 10,
                                }}
                                placeholder="Enter First Name"
                                value={FName}
                                onChangeText={setFName}
                            />
                        </View>

                        {/* Last Name */}
                        <View className="flex-[50%]">
                            <Text style={{ color: 'white', fontSize: 14, marginVertical: 3 }}>Last Name</Text>
                            <TextInput
                                style={{
                                    width: '95%',
                                    height: 50,
                                    backgroundColor: 'white',
                                    borderWidth: 1,
                                    borderColor: 'black',
                                    borderRadius: 10,
                                    paddingHorizontal: 10,
                                }}
                                placeholder="Enter Last Name"
                                value={LName}
                                onChangeText={setLName}
                            />
                        </View>
                    </View>

                    {/* Email */}
                    <Text style={{ color: 'white', fontSize: 14, marginVertical: 3, alignSelf: 'flex-start', marginLeft: 48 }}>Email</Text>
                    <TextInput
                        style={{
                            width: '80%',
                            height: 50,
                            backgroundColor: 'white',
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                        }}
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={setEmail}
                    />

                    {/* Organization Dropdown */}
                    <Text style={{ color: 'white', fontSize: 14, marginVertical: 3, alignSelf: 'flex-start', marginLeft: 48 }}>Organization</Text>
                    <View style={{ backgroundColor: 'white', width: '80%', borderRadius: 10 }}>
                        <RNPickerSelect
                            onValueChange={(value) => setOrg(value)}
                            placeholder={{ label: "Choose an organization", value: null }}
                            items={[
                                { label: 'COCS', value: { orgAbbr: 'COCS', orgName: 'College Of Computer Science' } },
                                { label: 'ABBS', value: { orgAbbr: 'ABBS', orgName: 'Association of Bicol Business Schools' } },
                                { label: 'AJMA', value: { orgAbbr: 'AJMA', orgName: 'Ateneo Junior Marketing Association' } },
                            ]}
                        />
                    </View>

                    {/* Password */}
                    <Text style={{ color: 'white', fontSize: 14, marginVertical: 3, alignSelf: 'flex-start', marginLeft: 48 }}>Password</Text>
                    <View style={{ backgroundColor: 'white', width: '80%', height: 50, flexDirection: 'row', alignItems: 'center', borderRadius: 10 }}>
                        <TextInput
                            style={{
                                flex: 1,
                                height: '100%',
                                paddingHorizontal: 10,
                            }}
                            secureTextEntry={!showPassword}
                            placeholder="Enter Password"
                            value={pass}
                            onChangeText={setPass}
                        />
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ? eyeClose : eyeOpen}
                        </TouchableOpacity>
                    </View>

                    {/* Confirm Password */}
                    <Text style={{ color: 'white', fontSize: 14, marginVertical: 3, alignSelf: 'flex-start', marginLeft: 48 }}>Confirm Password</Text>
                    <View style={{ backgroundColor: 'white', width: '80%', height: 50, flexDirection: 'row', alignItems: 'center', borderRadius: 10 }}>
                        <TextInput
                            style={{
                                flex: 1,
                                height: '100%',
                                paddingHorizontal: 10,
                            }}
                            secureTextEntry={!showPassword}
                            placeholder="Confirm Password"
                            value={confirmPass}
                            onChangeText={setConfirmPass}
                        />
                        <TouchableOpacity style={{ padding: 10 }} onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ? eyeClose : eyeOpen}
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            {/* Buttons */}
            <View className="flex-[2.5] bg-white">
                <CustomButton onPress={() => registerUser()} title="Sign Up" titleColor="white" backgroundColor="#003A6C" height={50} width="75%" margin={20} />
                <CustomButton onPress={() => Alert.alert("Notice", "This feature is still under development")} title="Continue with Google Account" backgroundColor="white" height={50} width="75%" margin={2} />

                {/* Sign In Link */}
                <View className="flex-row justify-center items-center">
                    <Text>Don't Have An Account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ textDecorationLine: 'underline' }}>Sign In Here</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <LoadingModal isVisible={isLoading}/>
        </View>
    );
};
