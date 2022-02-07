import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import {dummyDataCategory, dummyNewProduct} from '../../dummy/dataDummy';
import {
  CategoryGridTile,
  InputField,
  ProductCard,
  Space,
} from '../../components';

const Home = () => {
  const renderCategory = itemData => {
    const data = itemData.item;
    return <CategoryGridTile name={data.name} color={data.color} />;
  };

  const renderNewProduct = itemData => {
    const data = itemData.item;
    console.log(data);
    <Space height={10} />;
    return <ProductCard name={data.name} image={data.img} />;
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.greetingText}>Hello, John Doe</Text>
        <Text>Avatar</Text>
      </View>
      <View style={styles.search}>
        <InputField iconName="magnify" placeholder="Search" />
      </View>
      <Space height={14} />
      <View style={styles.categoryContainer}>
        <View style={styles.categoryTitleContainer}>
          <Text style={styles.categoryTitle}>Kategori</Text>
          {/* <Text style={styles.seeAll}>See all</Text> */}
        </View>
        <Space height={10} />
        <View style={{flex: 1.5}}>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={dummyDataCategory}
            renderItem={renderCategory}
            // numColumns={2}
            horizontal
          />
        </View>
      </View>
      <View style={styles.newProductContainer}>
        <Text style={styles.categoryTitle}>Produk Terbaru</Text>
        <View style={{paddingVertical: 30}}>
          <Space height={10} />
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={dummyNewProduct}
            renderItem={renderNewProduct}
            numColumns={2}
            // horizontal
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, paddingHorizontal: 14},
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {fontFamily: 'Poppins-Regular', color: '#000'},
  search: {flex: 0.7},
  categoryContainer: {flex: 1.5},
  newProductContainer: {flex: 3},
  categoryTitleContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTitle: {fontSize: 14, fontFamily: 'Poppins-Medium', color: '#000'},
  seeAll: {fontSize: 12, fontFamily: 'Poppins-Medium'},
});
