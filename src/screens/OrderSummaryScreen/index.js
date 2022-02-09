import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, ItemProductCard, Space} from '../../components';
import ItemValue from '../../components/molecules/ItemValue';

const OrderSummaryScreen = ({navigation, route}) => {
  const {item, transaction} = route.params;
  console.log('sum', item);
  console.log('trans', transaction);
  const [paymentUrl, setPaymentUrl] = useState('https://google.com');
  const onCheckout = () => {
    navigation.navigate('SnapPaymentScreen', paymentUrl);
  };

  return (
    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemProductCard
          type="order-summary"
          name={item.name}
          price={item.price}
          items={transaction.totalItem}
          image={item.img}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue
          label="Driver"
          value={transaction.driverCost}
          type="currency"
        />
        <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor="#1ABC9C"
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Nama" />
        <ItemValue label="Phone No." value="081913581675" />
        <ItemValue
          label="Address"
          value="Jl. Jambu 5 no 16 Perumnas Kamal, Bangkalan Madura"
        />
        <ItemValue label="House No." value="16" />
        <ItemValue label="City" value="Bangkalan" />
      </View>
      <View style={styles.button}>
        <Button labelBtn="Checkout Now" onPress={onCheckout} />
      </View>
      <Space height={40} />
    </ScrollView>
  );
};

export default OrderSummaryScreen;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
