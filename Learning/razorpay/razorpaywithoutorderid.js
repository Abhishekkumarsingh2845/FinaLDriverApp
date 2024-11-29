

// import React from 'react';
// import {View, Text, TouchableHighlight, Alert} from 'react-native';
// import RazorpayCheckout from 'react-native-razorpay';

// const RazorpayPaymentScreen = () => {
//   const initiatePayment = () => {
//     var options = {
//       description: 'Credits towards consultation',
//       image: 'https://i.imgur.com/3g7nmJC.png',
//       currency: 'INR',
//     
//       amount: '50000',
//       name: 'Abhishek',
//       prefill: {
//         email: 'void@razorpay.com',
//         contact: '9026679170',
//         name: 'Razorpay Software',
//       },
//       theme: {color: '#F37254'},
//     };

//     RazorpayCheckout.open(options)
//       .then(data => {
//         Alert.alert(`Success: ${data.razorpay_payment_id}`);
//       })
//       .catch(error => {
//         Alert.alert(`Error: ${error.code} | ${error.description}`);
//       });
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Razorpay Payment</Text>
//       <TouchableHighlight
//         onPress={initiatePayment}
//         style={{
//           marginTop: 20,
//           padding: 10,
//           backgroundColor: '#007BFF',
//           borderRadius: 5,
//         }}>
//         <Text style={{color: '#fff'}}>Pay Now</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };

// export default RazorpayPaymentScreen;












