import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
  RefreshControl,
} from 'react-native';
import {CloseButton} from '_components';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';
import {ChatButton} from '../../../components';
import {API} from 'aws-amplify';
import {createMessage} from '../../../../../graphql/mutations';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ProductCard = props => {
  const [productModal, setProductModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setProductModal(true)}
      style={{
        backgroundColor: Colors.GRAY_LIGHT,
        width: wp('36%'),
        height: hp('20%'),
        margin: wp('5%'),
        borderRadius: 20,
        elevation: 3,
        alignItems: 'center',
      }}>
      {/**  <Image
        style={{
          height: Mixins.scaleHeight(70),
          width: Mixins.scaleHeight(70),
          borderRadius: 100,
          top: Mixins.scaleHeight(10),
        }}></Image>*/}
      <Text style={[Typography.normal, {top: hp('2.5%')}]}>
        {props.productName}
      </Text>
      <Text style={[Typography.small, {top: hp('4%'), width: wp('25%')}]}>
        Variety: shiunyee
        {'\n'}Price: {props.priceMin} - {props.priceMax}
        {'\n'}Grade: A
      </Text>
      <Modal isVisible={productModal}>
        <ProductPopUp
          setProductModal={setProductModal}
          navigation={props.navigation}
          item={props}></ProductPopUp>
      </Modal>
    </TouchableOpacity>
  );
};

export const MarketplaceList = props => {
  const OpenWhatsapp = () => {
    let url =
      'https://wa.me/60128388188?text=Hi%20I%20am%20interested%20to%20purchase%20xxx%20but%20your%20platform%20does%20not%20currently%20have%20it.%20Please%20help%20me%20source%20it.%20Thank%20you';
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened successfully ' + data); //<---Success
      })
      .catch(() => {
        alert('Make sure WhatsApp installed on your device'); //<---Error
      });
  };
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
      keyExtractor={item => item.id}
      data={props.productList}
      numColumns={2}
      ListEmptyComponent={
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: wp('100%'),
              height: hp('40%'),
              top: hp('10%'),
              alignItems: 'center',
            }}>
            <Icon name="warning-outline" size={wp('40%')} />
          </View>
          <View style={{width: wp('70%'), bottom: hp('8%')}}>
            <Text style={[Typography.normal, {textAlign: 'center'}]}>
              Sorry the item you are looking for
            </Text>
          </View>
          <View
            style={{width: wp('70%'), bottom: hp('8%'), flexDirection: 'row'}}>
            <Text style={[Typography.normal, {textAlign: 'center'}]}>
              does not exist. Please
            </Text>
            <TouchableOpacity
              style={{marginLeft: wp('1%')}}
              onPress={() => OpenWhatsapp()}>
              <Text
                style={[
                  Typography.normal,
                  {textAlign: 'center', textDecorationLine: 'underline'},
                ]}>
                whatsapp us
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: wp('70%'), bottom: hp('8%')}}>
            <Text style={[Typography.normal, {textAlign: 'center'}]}>
              so we can source it for you.
            </Text>
          </View>
        </View>
      }
      renderItem={({item}) => {
        return (
          <ProductCard
            navigation={props.navigation}
            productName={item.productName}
            type={item.variety}
            availableQuantity={item.quantityAvailable}
            date={item.updatedAt}
            image={item.productPicture}
            priceMin={item.lowPrice}
            priceMax={item.highPrice}
            moq={item.minimumQuantity}
            supplierID={item.supplierID}
            id={item.id}
          />
        );
      }}
    />
  );
};

export const ProductPopUp = props => {
  const createProductInquiry = async () => {
    //try to send a chat to the chatroom
    const createProductInquiry = await API.graphql({
      query: createMessage,
      variables: {input: {}},
    });
  };
  return (
    <View
      style={{
        right: wp('5%'),
        height: hp('70%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: hp('60%'),
          width: wp('80%'),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            right: wp('-2%'),
            top: hp('-1%'),
          }}>
          <CloseButton setModal={props.setProductModal}></CloseButton>
        </View>
        <View
          style={{
            left: wp('7%'),
            top: hp('3%'),
            position: 'absolute',
            width: wp('50%'),
            flexDirection: 'row',
            zIndex: 2,
          }}>
          <Text style={[Typography.header]}>{props.item.productName}</Text>
        </View>

        <Image
          style={{
            top: hp('8%'),
            height: hp('18%'),
            width: wp('38%'),
            borderRadius: 100,
            backgroundColor: 'red',
          }}
          source={require('_assets/images/agridata.png')}></Image>
        <View
          style={{
            top: hp('29%'),
            left: wp('4%'),
            position: 'absolute',
            width: wp('80%'),
            flexDirection: 'row',
          }}>
          <View>
            <Rating
              imageSize={wp('6%')}
              readonly={true}
              startingValue={3.5}></Rating>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('store', {
                  itemId: props.item.supplierID,
                })
              }
              style={{
                width: wp('40%'),
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: hp('3%'),
                left: wp('4%'),
                marginTop: hp('0.5%'),
              }}>
              <Icon name="rocket-outline" size={wp('5%')}></Icon>
              <Text
                style={[
                  Typography.normal,
                  {
                    fontFamily: 'Poppins-SemiBold',
                    left: wp('3%'),
                    width: wp('30%'),
                  },
                ]}>
                Visit store
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: wp('30%'),
              right: wp('-1%'),
            }}>
            <Text
              style={[
                Typography.normal,
                {top: wp('6%'), color: Colors.PALE_BLUE},
              ]}>
              RM {props.item.priceMin}20-{props.item.priceMax}40/kg
            </Text>
          </View>
        </View>
        <View
          style={{
            top: hp('18%'),
            width: wp('70%'),
            height: hp('22%'),
            backgroundColor: Colors.GRAY_LIGHT,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <View
            style={{
              left: wp('25%'),
              top: hp('2%'),
            }}>
            <ChatButton size={wp('8%')}></ChatButton>
          </View>
          <Text
            style={[
              Typography.normal,
              {
                lineHeight: hp('3%'),
                top: hp('2%'),
                left: wp('5%'),
                position: 'absolute',
              },
            ]}>
            Variety:{props.item.type} hi
            {'\n'}Grade: a{'\n'}Available: {props.item.availableQuantity} yes
            {'\n'}MOQ: {props.item.moq} 30
            {'\n'}Other Details: blablabla
          </Text>
        </View>
      </View>
    </View>
  );
};

export const FavouritesList = props => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
      keyExtractor={item => item.id}
      data={props.data}
      numColumns={2}
      ListEmptyComponent={
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: wp('100%'),
              height: hp('40%'),
              top: hp('10%'),
              alignItems: 'center',
            }}>
            <Icon name="warning-outline" size={wp('40%')} />
          </View>
          <View style={{width: wp('70%'), bottom: hp('8%')}}>
            <Text style={[Typography.normal, {textAlign: 'center'}]}>
              Sorry you have not added any suppliers to your favourites. You can
              do so by going to their store.
            </Text>
          </View>
        </View>
      }
      renderItem={({item}) => {
        return (
          <StoreCard
            navigation={props.navigation}
            storeID={item.id}
            storeName={item.name}
          />
        );
      }}
    />
  );
};

const StoreCard = props => {
  console.log(props);
  const image = 1;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('store', {itemId: props.id})}
      style={{
        backgroundColor: Colors.GRAY_LIGHT,
        width: wp('40%'),
        height: hp('18%'),
        margin: wp('3%'),
        borderRadius: 20,
        elevation: 3,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: wp('30%'),
          height: hp('12%'),
          top: hp('1%'),
          right: wp('0%'),

          alignItems: 'center',
        }}>
        {image == null ? (
          <Image
            source={require('_assets/images/online-store.png')}
            style={{
              width: wp('24%'),
              height: hp('12%'),
              resizeMode: 'contain',
            }}
          />
        ) : (
          <Image
            source={require('_assets/images/agridata.png')}
            style={{
              width: wp('24%'),
              height: hp('12%'),
              resizeMode: 'contain',
            }}
          />
        )}
      </View>
      <Text style={[Typography.normal, {top: hp('1%')}]}>
        {props.storeName}SHIUN YEE
      </Text>
    </TouchableOpacity>
  );
};
