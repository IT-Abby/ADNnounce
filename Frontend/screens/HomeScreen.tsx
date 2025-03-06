import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { auth, db, getDoc, doc, firestore,getDocs, collection } from '../firebase';  // Assuming you have Firebase auth
import LogoutBtn from 'components/LogoutBtn';
import LoadingModal from 'components/LoadingModal';

export const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)

  // Fetching the logged-in user's name when the screen loads
  useEffect(() => {
      const user = auth.currentUser;
      console.log('dipsajdiosajkodpsa', user.uid)
      fetchUserData(user.uid); 



    if (user) {
      setUserName(user.email || 'User');
    }
  }, []);

  console.log('userdataa:', userData)


  const fetchUserData = async (uid) => {
    try {
      setLoading(true)
      const docRef = doc(firestore, 'users',uid); 
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setUserData(docSnap.data());  
        setLoading(false)
      } else {
        setLoading(false)
        console.log('No such document!');
      }

    } catch (error) {
      setLoading(false)
      console.error("Error fetching user data:", error);
    }
  };

  


  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
      }}
    >
      {/* Welcome Message */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#003A6C',
          marginBottom: 20,
        }}
      >
        Welcome, {userData.firstName}!
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: '#003A6C',
          marginBottom: 20,
          textAlign:'center',
          margin:20
        }}
      >
        Organization: {userData.organization.orgName}!
        </Text>
        <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: 'blue',
          marginBottom: 20,
          textAlign:'center',
        }}
      >
       {userData.organization.orgAbbr}!
        </Text>

        <LogoutBtn navigation={navigation}></LogoutBtn>
        <LoadingModal isVisible={loading}></LoadingModal>
      

     
    </View>
  );
};
