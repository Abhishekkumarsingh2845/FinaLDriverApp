import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import MapViewComponent from '../Component/map';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const SelectD = () => {
  const [selected, setselected] = useState(null);
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback(() => {
    console.log('handleSheetChanges');
  }, []);
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <MapViewComponent />
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          index={0}
          enablePanDownToClose={true}
          snapPoints={['45%']}
          handleComponent={null}
          backgroundStyle={styles.bottomSheetBackground}>
          <BottomSheetView style={styles.contentContainer}>
            <Text>cnfjncv</Text>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default SelectD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
