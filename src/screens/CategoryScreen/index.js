import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSubcategories} from '../../redux/action';

const CategoryScreen = ({navigation, route}) => {
  const data = route.params.id;
  const filterCategory = String(data);
  const dispatch = useDispatch();
  const {subcategories} = useSelector(state => state.allSubcategoriesReducer);

  useEffect(() => {
    dispatch(getAllSubcategories());
  }, [dispatch]);

  console.log(subcategories);
  //   subcategories.map((item, index) => {
  //     if (item.category_id === filterCategory) {
  //       console.log('aa', item.name);
  //     }
  //   });

  //   console.log(subcategories.category_id);
  return (
    <View>
      <Text>CategoryScreen{filterCategory}</Text>
      {subcategories.map((item, index) => {
        //console.log(subcategories[data].category_id);
        if (item.category_id === filterCategory) {
          return (
            <View style={{flexDirection: 'row'}}>
              <Text>{item.category_id}. </Text>
              <Text>{item.name}</Text>
            </View>
          );
        }
      })}
    </View>
  );
};

export default CategoryScreen;
