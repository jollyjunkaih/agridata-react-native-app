import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from '../../components';
import {MarketplaceList, PurchaseOrderButton} from './components';
import {NavBar, BackButton} from '_components';
import {API, Storage} from 'aws-amplify';
import {productListingByRetailer} from '../../../../graphql/queries';

export const Store = props => {
  const {itemId} = props.route.params; //supplierid
  const [products, setProducts] = useState([]);

  const fetchProducts = async props => {
    const products = await API.graphql({
      query: productListingByRetailer,
      variables: {supplierID: itemId, sortDirection: 'ASC'},
    });
    useEffect(() => {
      console.log('Fetching Products from ' + itemId);
      fetchProducts();
    }, []);
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
        <BackButton navigation={props.navigation} />
      </View>
      <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
        {props.name}Jane's Farm
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
        <MarketplaceList productList={items} />
      </View>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(20),
          bottom: Mixins.scaleHeight(80),
        }}>
        <PurchaseOrderButton />
      </View>

      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-10)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};

const items = [
  {produce: 'Avacadoes', quantity: '10'},
  {produce: 'Bananas', quantity: '10'},
  {produce: 'Pineapple', quantity: '10'},
  {produce: 'Mango', quantity: '10'},
  {produce: 'Sayur Sawi', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
];
