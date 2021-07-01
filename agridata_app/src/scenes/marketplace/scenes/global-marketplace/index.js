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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        height: hp('100%'),
        width: wp('100%'),
        alignItems: 'center',
      }}>
      <Text style={[Typography.header, {top: hp('5%')}]}>
        Local Marketplace
      </Text>
      <View style={{top: hp('6%')}}>
        <Searchbar />
      </View>
      <View
        style={{
          top: hp('7%'),
          width: wp('100%'),
          height: hp('4%'),
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: Colors.GRAY_LIGHT,
        }}>
        {choice == 'product' ? (
          <View
            style={{
              marginHorizontal: wp('15%'),
              top: hp('0.5%'),
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
              marginHorizontal: wp('15%'),
              top: hp('0.5%'),
            }}>
            <Text style={Typography.normal}>Product</Text>
          </TouchableOpacity>
        )}
        <View
          style={{
            height: hp('2.5%'),
            marginVertical: hp('1%'),
            borderColor: Colors.GRAY_LIGHT,
            borderWidth: wp('0.2%'),
            alignItems: 'center',
          }}></View>
        {choice == 'favourites' ? (
          <View
            style={{
              width: wp('50%'),
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
              width: wp('50%'),
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
            width: wp('90%'),
            height: hp('100%'),
            top: hp('10%'),
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
            width: wp('93%'),
            height: hp('80%'),
            top: hp('10%'),
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

      <View style={{position: 'absolute', top: hp('92%')}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
