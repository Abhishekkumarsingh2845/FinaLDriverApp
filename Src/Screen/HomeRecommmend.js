import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import MapViewComponent from '../Component/map';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Recommend from '../Component/Recommend';

const HomeRecommmend = () => {
  const [select, setselect] = useState(null);
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback(() => {
    console.log('handleSheetChanges');
  }, []);
  return (
    <GestureHandlerRootView>
      <View style={[styles.container]}>
        <MapViewComponent />
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          index={0}
          enablePanDownToClose={true}
          snapPoints={['60%']}
          handleComponent={null}
          backgroundStyle={styles.bottomSheetBackground}>
          <BottomSheetView style={styles.contentContainer}>
            <Text style={styles.txt}>Recommended for you</Text>
            <Recommend />
            <Recommend marginTop={10} />
            <Recommend marginTop={10} />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default HomeRecommmend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 15,
    color: '#222E50',
  },
});
