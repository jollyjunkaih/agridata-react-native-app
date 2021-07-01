import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from '../../components';
import {ProductPopUp, AddItemsButton, SupplierplaceList} from './components';
import {NavBar, BackButton} from '_components';
import {listProductListings} from '../../../../graphql/queries';
import {API} from 'aws-amplify';

export const SupplierStore = props => {
  const [productsList, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProducts = async () => {
    try {
      const products = await API.graphql({
        query: listProductListings,
        variables: {filter: {supplierID: {eq: props.user.supplierCompanyID}}},
      });

      if (products.data.listProductListings) {
        console.log('Products: \n');
        console.log(products);
        setProducts(products.data.listProductListings.items);
      }
      console.log(productsList);
    } catch (e) {
      console.log(e);
      console.log("there's a problem");
    }
  };
  useEffect(() => {
    fetchProducts();
    console.log('Refreshing...');
  }, []);
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          left: Mixins.scaleWidth(Spacing.BackButtonLeft),
          top: Mixins.scaleHeight(Spacing.BackButtonTop),
        }}>
        <BackButton />
      </View>
      <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
        My Store
      </Text>
      <View style={{top: Mixins.scaleHeight(40)}}>
        <Searchbar />
      </View>
      <View
        style={{
          width: Mixins.scaleWidth(330),
          height: Mixins.scaleHeight(425),
          top: Mixins.scaleHeight(70),
        }}>
        <SupplierplaceList
          productList={productsList}
          setProducts={setProducts}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(20),
          bottom: Mixins.scaleHeight(80),
        }}>
        <AddItemsButton setProducts={setProducts} user={props.user} />
      </View>

      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-10)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};

const items = [
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
];
