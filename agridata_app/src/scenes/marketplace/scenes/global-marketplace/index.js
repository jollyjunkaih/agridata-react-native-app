import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from '../../components';
import {NavBar} from '_components';
import {MarketplaceList, FavouritesList} from './components';
import {API} from 'aws-amplify';
import {
  getRetailerCompany,
  listProductListings,
  productListingByNameStartingWithLowestPrice,
} from '../../../../graphql/queries';

export const Marketplace = props => {
  const [choice, setChoice] = useState('product');
  const [productsList, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [initialRender, setInitialRender] = useState(true);
  const [searchPressed, setSearchPressed] = useState(false);
  const [favourites, setFavourites] = useState(
    props.user.retailerCompany.favouriteStores,
  );
  const [refreshing, setRefreshing] = useState(false);
  console.log('marketplace initial render' + props.user);
  const fetchFavourites = async () => {
    const favourites = await API.graphql({
      query: getRetailerCompany,
      variables: {id: props.user.retailerCompanyID},
    });
  };

  const fetchProducts = async () => {
    try {
      const products = await API.graphql({
        query: productListingByNameStartingWithLowestPrice,
        variables: {productName: searchValue, sortDirection: 'ASC'},
      });
      console.log(products);
      if (products.data.productListingByNameStartingWithLowestPrice) {
        console.log('Products: \n');
        console.log(products);
        setProducts(
          products.data.productListingByNameStartingWithLowestPrice.items,
        );
      }
      console.log(productsList);
    } catch (e) {
      console.log(e);
      console.log("there's a problem");
    }
  };
  useEffect(() => {
    if (searchPressed && choice == 'product') {
      console.log('useEffectTriggered');
      console.log('searching for ' + searchValue);
      setInitialRender(false);
      setSearchPressed(false);
      fetchProducts();
    }
    //potentially do a search for favourites but must have a way to remove the filter
  }, [searchPressed]);
  useEffect(() => {
    console.log('resetting search');
    setSearchValue('');
  }, [choice]);

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
        <Searchbar
          setSearchPressed={setSearchPressed}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
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
            onPress={() => [setChoice('product'), setInitialRender(true)]}
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
          <FavouritesList data={favourites} navigation={props.navigation} />
        </View>
      ) : initialRender ? (
        <View
          style={{
            width: Mixins.scaleWidth(330),
            height: Mixins.scaleHeight(425),
            top: Mixins.scaleHeight(70),
          }}>
          <View
            style={{
              width: Mixins.scaleWidth(330),
              height: Mixins.scaleHeight(420),
              top: Mixins.scaleHeight(30),
              alignItems: 'center',
            }}>
            <Image
              style={{resizeMode: 'cover', width: Mixins.scaleWidth(340)}}
              source={require('_assets/images/produce.png')}></Image>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: Mixins.scaleWidth(330),
            height: Mixins.scaleHeight(425),
            top: Mixins.scaleHeight(70),
          }}>
          <MarketplaceList
            productList={productsList}
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
