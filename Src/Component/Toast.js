import React from 'react';
import Toast from 'react-native-toast-message';

const Toast = ({ text2 }) => {
  const showToast = () => {
    Toast.show({
      type: 'success', 
      position: 'top',
      text1: 'Notification',
      text2: text2,
      visibilityTime: 3000,
    });
  };

  return <Toast ref={(ref) => Toast.setRef(ref)} />;
};

export default Toast;
