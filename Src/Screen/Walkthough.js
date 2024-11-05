import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import React, {useState, useRef} from 'react';
  import PrimaryBtn from '../Component/PrimaryBtn';
  
  const dataa = [
    {
      id: 1,
      image: require('./../Assets/Images/Group.png'),
      title: 'Out Station Bidding',
      subtitle: 'Request a ride get picked up by a',
      description: 'nearby community driver',
    },
    {
      id: 2,
      image: require('./../Assets/Images/Group.png'),
      title: 'Unique QR or Instant Booking',
      subtitle: 'Huge drivers network helps you find ',
      description: 'comforable, safe and cheap ride',
    },
    {
      id: 3,
      image: require('./../Assets/Images/Group.png'),
      title: '24*7 Support',
      subtitle: 'Enjoy your ride with Taxi App reliable service.',
      description: 'service',
    },
  ];
  
  const Walkthough = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const viewabilityConfig = {itemVisiblePercentThreshold: 50};
  
    const onViewRef = useRef(({viewableItems}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
      }
    });
  
    const render = ({item}) => (
      <View style={styles.container}>
        <Image source={item.image} style={styles.walkth} />
        <Text style={styles.txt}>{item.title}</Text>
        <Text style={styles.txt2}>{item.subtitle}</Text>
        <Text style={styles.txt3}>{item.description}</Text>
      </View>
    );
  
    const renderIndicators = () => {
      return (
        <View style={styles.indicatorContainer}>
          {dataa.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                {backgroundColor: index === currentIndex ? '#FCCB06' : 'grey'},
              ]}
            />
          ))}
        </View>
      );
    };
  
    return (
      <ImageBackground
        source={require('./../Assets/Images/intro-bg.png')}
        resizeMode="cover"
        style={styles.bckimg}>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={dataa}
            renderItem={render}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            decelerationRate="fast"
            snapToInterval={300}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewabilityConfig}
          />
          {renderIndicators()}
        </View>
        <PrimaryBtn
          marginTop={150}
          title={'Login'}
          press={() => navigation.navigate('Login')}
        />
      </ImageBackground>
    );
  };
  
  export default Walkthough;
  
  const styles = StyleSheet.create({
    bckimg: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    flatlistContainer: {
      height: 420,
      alignItems: 'center',
      // backgroundColor:"red",
    },
    walkth: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    container: {
      width: 300,
      alignItems: 'center',
      marginTop: 80,
    },
    txt: {
      fontSize: 24,
      fontWeight: '500',
      color: '#222E50',
      fontFamily: 'Inter-Medium',
      marginTop: 10,
    },
    txt2: {
      fontSize: 14,
      fontWeight: '400',
      color: '#8E92A8',
      fontFamily: 'Inter-Medium',
      marginTop: 10,
    },
    txt3: {
      fontSize: 14,
      fontWeight: '400',
      fontFamily: 'Inter-Medium',
      color: '#8E92A8',
    },
    indicatorContainer: {
      flexDirection: 'row',
    },
    indicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    newuser: {
      fontSize: 14,
      color: 'gainsboro',
    },
    register: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 24,
    },
    txt11: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      fontWeight: '400',
      color: '#8E92A8',
    },
    txt22: {
      fontSize: 14,
      marginLeft: 5,
    },
  });