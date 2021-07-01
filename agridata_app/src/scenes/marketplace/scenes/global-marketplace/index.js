import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from '../../components';
import {NavBar} from '_components';
import {MarketplaceList, FavouritesList} from './components';
import {API} from 'aws-amplify';
import {
  getRetailerCompany,
  listProductListings,
} from '../../../../graphql/queries';

export const Marketplace = props => {
  const [choice, setChoice] = useState('product');
  const [productsList, setProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  console.log(props.user);
  const fetchFavourites = async () => {
    const favourites = await API.graphql({
      query: getRetailerCompany,
      variables: {id: props.user.retailerCompanyID},
    });
  };

  const fetchProducts = async () => {
    try {
      const products = await API.graphql({
        query: listProductListings,
        variables: {},
      });
      console.log(products);
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
      <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
        Local Marketplace
      </Text>
      <View style={{top: Mixins.scaleHeight(40)}}>
        <Searchbar />
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(50),
          width: Mixins.scaleWidth(360),
          height: Mixins.scaleWidth(30),
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: Colors.GRAY_LIGHT,
        }}>
        {choice == 'product' ? (
          <View
            style={{
              marginHorizontal: Mixins.scaleWidth(60),
              top: Mixins.scaleHeight(4),
            }}>
            <Text
              style={[
                Typography.normal,
                {
                  color: Colors.GRAY_DARK,
                  fontFamily: 'Poppins-Bold',
                  textDecorationLine: 'underline',
                },
              ]}>
              Product
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setChoice('product')}
            style={{
              marginHorizontal: Mixins.scaleWidth(60),
              top: Mixins.scaleHeight(4),
            }}>
            <Text style={Typography.normal}>Product</Text>
          </TouchableOpacity>
        )}
        <View
          style={{
            height: Mixins.scaleHeight(15),
            marginVertical: Mixins.scaleHeight(5),
            borderColor: Colors.GRAY_LIGHT,
            borderWidth: Mixins.scaleWidth(1),
          }}></View>
        {choice == 'favourites' ? (
          <View
            style={{
              width: Mixins.scaleWidth(179),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                Typography.normal,
                {
                  color: Colors.GRAY_DARK,
                  fontFamily: 'Poppins-Bold',
                  textDecorationLine: 'underline',
                },
              ]}>
              Favourites
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setChoice('favourites')}
            style={{
              width: Mixins.scaleWidth(179),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={Typography.normal}>Favourites</Text>
          </TouchableOpacity>
        )}
      </View>
      {choice == 'favourites' ? (
        <View
          style={{
            width: Mixins.scaleWidth(330),
            height: Mixins.scaleHeight(425),
            top: Mixins.scaleHeight(70),
          }}>
          <FavouritesList
            data={[
              {name: 'Freshest Wholesale', id: 3},
              {name: "Jane's Farm", id: 2},
              {name: "Matthew's Farm", id: 1},
            ]}
            navigation={props.navigation}
          />
        </View>
      ) : (
        <View
          style={{
            width: Mixins.scaleWidth(330),
            height: Mixins.scaleHeight(425),
            top: Mixins.scaleHeight(70),
          }}>
          <MarketplaceList
            productList={[
              {
                lowPrice: 5,
                highPrice: 10,
                productName: 'Avacadoes',
                minimumQuantity: '30',
                quantityAvailable: '300',
              },
              {
                lowPrice: 5.5,
                highPrice: 9,
                productName: 'Avacadoes',
                minimumQuantity: '50',
                quantityAvailable: '400',
              },
              {
                lowPrice: 4.5,
                highPrice: 10,
                productName: 'Avacadoes',
                minimumQuantity: '45',
                quantityAvailable: '100',
              },
              {
                lowPrice: 5,
                highPrice: 10,
                productName: 'Avacadoes',
                minimumQuantity: '30',
                quantityAvailable: '300',
              },
              {
                lowPrice: 2,
                highPrice: 4,
                productName: 'Bananas',
                minimumQuantity: '30',
                quantityAvailable: '300',
              },
              {
                lowPrice: 2.1,
                highPrice: 3.3,
                productName: 'Bananas',
                minimumQuantity: '40',
                quantityAvailable: '300',
              },
              {
                lowPrice: 3,
                highPrice: 3.5,
                productName: 'Bananas',
                minimumQuantity: '30',
                quantityAvailable: '300',
              },
            ]}
            navigation={props.navigation}
          />
        </View>
      )}

      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-20)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
