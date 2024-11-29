
import React, {useState} from 'react';
import {View, Text, TouchableHighlight, Alert} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';
import {Buffer} from 'buffer';

const RazorpayPaymentScreen = () => {
  const [orderId, setOrderId] = useState(null);

  const createOrder = async () => {
   

    try {
      const auth =
        'Basic ' + Buffer.from(API_KEY + ':' + SECRET_KEY).toString('base64');
      console.log('Authorization Header:', auth);

      const response = await axios.post(
        'https://api.razorpay.com/v1/orders',
        {
          amount: 50000,
          currency: 'INR',
          receipt: 'order_rcptid_11',
          payment_capture: 1,
          notes: {
            key1: 'value3',
            key2: 'value2',
          },
        },
        {
          headers: {
            Authorization: auth,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Order created:', response.data);
      setOrderId(response.data.id);
    } catch (error) {
      console.error(
        'Error creating order:',
        error.response ? error.response.data : error,
      );
      Alert.alert(
        'Error',
        'There was an error creating the order. Please try again.',
      );
    }
  };

  const initiatePayment = () => {
    if (!orderId) {
      console.log('Order ID not available');
      Alert.alert('Error', 'Order ID is not available');
      return;
    }

    const options = {
      key: 'rzp_test_750EkwFHhBJxcu',
      amount: '50000',
      currency: 'INR',
      name: 'Abhishek',
      description: 'Test Payment',
      order_id: orderId,
      image: 'https://i.imgur.com/3g7nmJC.png',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9026679170',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };

    console.log('Payment options:', options);

    RazorpayCheckout.open(options)
      .then(data => {
        console.log('Payment Success:', data);
        Alert.alert(`Payment Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        console.error('Payment Error:', error);
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Razorpay Payment</Text>
      <TouchableHighlight
        onPress={createOrder}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: '#007BFF',
          borderRadius: 5,
        }}>
        <Text style={{color: '#fff'}}>Create Order</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={initiatePayment}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: '#007BFF',
          borderRadius: 5,
        }}>
        <Text style={{color: '#fff'}}>Pay Now</Text>
      </TouchableHighlight>
    </View>
  );
};

export default RazorpayPaymentScreen;

