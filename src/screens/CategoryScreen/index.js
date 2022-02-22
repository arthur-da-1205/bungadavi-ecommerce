import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSubcategories, getProductBySubcat} from '../../redux/action';
import {Space, SubcategoriesTile} from '../../components';
import {getData} from '../../utils/storage';

const CategoryScreen = ({navigation, route}) => {
  const data = route.params.id;
  const filterCategory = String(data);
  const dispatch = useDispatch();
  const {subcategories} = useSelector(state => state.allSubcategoriesReducer);
  const {productBySubcat} = useSelector(state => state.productBySubcatReducer);

  const [token, setToken] = useState('');
  const [subcategoryId, setSubCategoryId] = useState('');

  useEffect(() => {
    getData('TOKEN').then(res => {
      setToken(res.value);
      // console.log(token);
    });
  });

  const bearerToken = `Bearer ${token}`;

  useEffect(() => {
    dispatch(getAllSubcategories());
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getProductBySubcat(subcategoryId, bearerToken));
  // });

  // console.log('a', productBySubcat);

  const onFilter = (id, tkn) => {
    dispatch(getProductBySubcat(id, tkn));
  };

  return (
    <View style={styles.pageContainer}>
      <ScrollView horizontal style={styles.filterContainer}>
        {subcategories.map((item, index) => {
          //console.log(subcategories[data].category_id);
          if (item.category_id === filterCategory) {
            return (
              <SubcategoriesTile
                name={item.name}
                key={index}
                onSelect={() => {
                  console.log(item.id);
                  setSubCategoryId(item.id);
                  onFilter(subcategoryId, bearerToken);
                }}
              />
            );
          }
        })}
      </ScrollView>
      <Space height={25} />
      <View style={styles.dataContainer}>
        <Text>
          {productBySubcat.map(item => {
            console.log(item);
          })}
        </Text>
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  pageContainer: {paddingVertical: 10, paddingHorizontal: 14, flex: 1},
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  dataContainer: {flex: 20},
});
