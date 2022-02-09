import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../../constant';

const windowWidth = Dimensions.get('screen').width;

const ProductCard = ({name, image, price, onPress}) => {
  var TouchCompt = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchCompt = TouchableNativeFeedback;
  }
  return (
    <TouchCompt onPress={onPress}>
      <View style={styles.foodContainer}>
        <Image source={image} style={styles.imageContainer} />
        <View style={styles.descContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.foodName}>{name}</Text>
            <Text>Rp. {price}</Text>
          </View>
          <TouchableOpacity style={styles.btnCart}>
            <Icon name="cart-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchCompt>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  price: PropTypes.number,
};
export default ProductCard;

const styles = StyleSheet.create({
  foodContainer: {
    width: windowWidth / 2 - 30,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
    marginBottom: 12,
  },
  imageContainer: {height: 120, width: 180, flex: 1},
  descContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
  },
  textContainer: {padding: 12, flex: 1},
  foodName: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLORS.black,
  },
  btnContainer: {
    padding: 6,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnCart: {
    flex: 0.3,
    backgroundColor: COLORS.primary2,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  btnBuy: {flex: 3, marginLeft: 8},
});
