// import firestore from '@react-native-firebase/firestore';
// import {useEffect, useState} from 'react';
// import {Button, TextInput, FlatList, Text, View} from 'react-native';

// const Message = ({chatId}) => {
//   const [messageText, setMessageText] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [gender, setGender] = useState('male');

//   // Fetch messages from Firestore when the component mounts
//   const fetchMessages = async () => {
//     try {
//       const snapshot = await firestore()
//         .collection('chats')
//         .doc(chatId)
//         .collection('messages')
//         .orderBy('timestamp', 'asc')
//         .get();

//       const messagesList = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       setMessages(messagesList);  // Set the fetched messages
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   // Send a message and update the state with the new message
//   const sendMessage = async () => {
//     if (messageText.trim() === '') {
//       return;
//     }

//     try {
//       const newMessage = {
//         sender: 'userA',
//         gender: gender,
//         text: messageText,
//         timestamp: firestore.FieldValue.serverTimestamp(),
//       };

//       // Add the message to Firestore
//       const messageRef = await firestore()
//         .collection('chats')
//         .doc(chatId)
//         .collection('messages')
//         .add(newMessage);

//       // After sending, add the new message to the state (optimistic update)
//       setMessages(prevMessages => [
//         ...prevMessages,
//         {id: messageRef.id, ...newMessage},
//       ]);

//       // Clear the input field
//       setMessageText('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   // Listen to real-time updates for new messages
//   useEffect(() => {
//     fetchMessages();

//     const unsubscribe = firestore()
//       .collection('chats')
//       .doc(chatId)
//       .collection('messages')
//       .orderBy('timestamp', 'asc')
//       .onSnapshot(snapshot => {
//         const newMessages = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data(),
//         }));

//         setMessages(newMessages);
//       });

//     return () => unsubscribe();
//   }, [chatId]);

//   return (
//     <View style={{padding: 20}}>
//       <FlatList
//         data={messages}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => (
//           <View style={{paddingVertical: 5}}>
//             <Text>
//               {item.sender} ({item.gender}):
//             </Text>
//             <Text>{item.text}</Text>
//           </View>
//         )}
//       />
//       <TextInput
//         value={messageText}
//         onChangeText={setMessageText}
//         placeholder="Type a message"
//         style={{borderBottomWidth: 1, marginBottom: 10}}
//       />
//       <Button title="Send Message" onPress={sendMessage} />
//     </View>
//   );
// };

// export default Message;

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { sendMessage } from './../Utlis/Firebase';

// const Message = () => {
//   const [messageText, setMessageText] = useState('');
//   const [sentMessage, setSentMessage] = useState('');
//   const [currentUser, setCurrentUser] = useState('userId1');
//   const senderId = currentUser;
//   const receiverId = currentUser === 'userId1' ? 'userId2' : 'userId1';

//   const handleSendMessage = async () => {
//     if (messageText.trim() === '') {
//       return;
//     }

//     await sendMessage(senderId, receiverId, messageText);
//     setSentMessage(messageText);
//     setMessageText('');
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       {sentMessage !== '' && (
//         <View style={styles.messageContainer}>
//           <Text style={styles.messageText}>{currentUser}: {sentMessage}</Text>
//         </View>
//       )}

//       <TextInput
//         value={messageText}
//         onChangeText={setMessageText}
//         placeholder="Type a message"
//         style={{ borderBottomWidth: 1, marginBottom: 10 }}
//       />

//       <Button title="Send Message" onPress={handleSendMessage} />
//       <Button
//         title={`Switch to ${currentUser === 'userId1' ? 'User2' : 'User1'}`}
//         onPress={() => setCurrentUser(currentUser === 'userId1' ? 'userId2' : 'userId1')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   messageContainer: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#DCF8C6',
//     borderRadius: 8,
//   },
//   messageText: {
//     fontSize: 16,
//     color: 'black',
//   },
// });

// export default Message;






















































import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import {sendMessage, fetchMessages} from './../Utlis/Firebase';

const Message = () => {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([]);

  const senderId = 'userId1';
  const receiverId = 'userId2';

  useEffect(() => {
    const getMessages = async () => {
      const fetchedMessages = await fetchMessages(senderId, receiverId);
      setMessages(fetchedMessages);
    };

    getMessages();
  }, []);

  const handleSendMessage = async () => {
    await sendMessage(senderId, receiverId, messageText);
    setMessageText('');

    const updatedMessages = await fetchMessages(senderId, receiverId);
    setMessages(updatedMessages);
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{paddingVertical: 5}}>
            <Text>
              {item.sender}: {item.text}
            </Text>
          </View>
        )}
      />
      <TextInput
        value={messageText}
        onChangeText={setMessageText}
        placeholder="Type a message"
        style={{borderBottomWidth: 1, marginBottom: 10}}
      />
      <Button title="Send Message" onPress={handleSendMessage} />
    </View>
  );
};

export default Message;
