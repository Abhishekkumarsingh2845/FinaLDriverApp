
import firestore from '@react-native-firebase/firestore';


export const sendMessage = async (senderId, receiverId, text) => {
  try {
    await firestore().collection('chats').add({
      sender: senderId,
      receiver: receiverId,
      text,
      createdAt: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export const listenToMessages = (callback) => {
  return firestore()
    .collection('chats')
    .orderBy('createdAt', 'asc')
    .onSnapshot((querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => doc.data());
      callback(messages);
    });
};
