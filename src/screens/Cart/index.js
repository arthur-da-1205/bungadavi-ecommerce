import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../../constant';

import {
  Counter,
  CustomNumber,
  EmptyData,
  ItemProductCard,
} from '../../components';
import {dummyCart} from '../../dummy/dataDummy';

const Cart = () => {
  const dataCart = dummyCart;
  const [totalItem, setTotalItem] = useState(1);
  // const [priceing, setPricing] = useState(dummyCart.price);
  const onCounterChange = value => {
    setTotalItem(value);
    // setPricing(totalItem * value);
  };

  // useEffect(() => {
  //   onCounterChange;
  // });

  return (
    <>
      <ScrollView>
        {dataCart ? (
          dataCart.map((item, index) => {
            let price = item.price * totalItem;
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                }}>
                {/* <ItemProductCard
                  type="cart"
                  name={item.name}
                  // price={item.price * totalItem}
                  // onCount={onCounterChange}
                  image={item.img}
                  onPress={() => {
                    console.log([index, item.name, item.price]);
                  }}
                /> */}
                <View style={{flex: 1}}>
                  <Image
                    source={item.img}
                    style={{
                      width: 80,
                      height: 60,
                      borderRadius: 8,
                      overflow: 'hidden',
                      marginRight: 12,
                    }}
                  />
                  <Text>{item.name}</Text>
                </View>
                <View style={{flex: 2}}>
                  <CustomNumber
                    // key={index}
                    number={price}
                    style={{
                      fontSize: 18,
                      fontFamily: 'Poppins-Regular',
                      color: '#020202',
                    }}
                  />
                  <Counter onValueChange={onCounterChange} />
                </View>
                {/* {console.log(item.price * totalItem)} */}
                {/* {console.log([index, item.name])} */}
              </View>
            );
          })
        ) : (
          <EmptyData iconName="cart-outline" text="Your Cart is Empty" />
        )}
      </ScrollView>
      <View
        style={{
          padding: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18, fontFamily: 'Poppins-Regular'}}>Total</Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
            color: COLORS.primary2,
          }}>
          IDR.
        </Text>
      </View>
    </>
  );
};

export default Cart;
