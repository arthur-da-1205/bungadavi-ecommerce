import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Counter, CustomNumber} from '../../components';
import {COLORS, DIMENSIONS} from '../../../constant';

const DetailProductScreen = ({navigation, route}) => {
  const data = route.params;
  console.log(data);
  const [totalItem, setTotalItem] = useState(1);

  const onCounterChange = value => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * data.price;
    const driverCost = 5000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driverCost + tax;

    const dataOrder = {
      item: data,
      transaction: {
        totalItem,
        totalPrice,
        driverCost,
        tax,
        total,
      },
    };
    navigation.navigate('OrderSummaryScreen', dataOrder);
  };

  return (
    <View style={styles.pageContainer}>
      <ImageBackground source={data.img} style={styles.imageBanner}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-left" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.descContainer}>
        <View style={styles.textContainer}>
          <View style={styles.textAlign}>
            <View>
              <Text style={styles.foodLabel}>{data.name}</Text>
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.foodDesc}>{data.desc}</Text>
          {/* <Text style={styles.ingredientsLabel}>Ingredients:</Text>
          <Text style={styles.ingredientsDetail}>
            Seledri, Sayur, Daging dan Keju
          </Text> */}
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.priceFlex}>
            <Text style={styles.priceLabel}>Total Price</Text>
            <CustomNumber
              number={totalItem * data.price}
              style={styles.priceTotal}
            />
          </View>
          <View style={styles.btnOrder}>
            <Button labelBtn="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailProductScreen;

const styles = StyleSheet.create({
  pageContainer: {flex: 1},
  imageBanner: {
    flex: 1,
    height: DIMENSIONS.heightScreen / 3,
    paddingTop: 26,
    paddingLeft: 22,
  },
  descContainer: {
    backgroundColor: COLORS.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 30,
    paddingHorizontal: 16,
    flex: 2,
  },
  textContainer: {flex: 1},
  textAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  foodLabel: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  foodDesc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    marginBottom: 16,
  },
  ingredientsLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  ingredientsDetail: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  priceContainer: {
    flex: 0.2,
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceFlex: {flex: 1},
  priceLabel: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  btnOrder: {flex: 1},
});
