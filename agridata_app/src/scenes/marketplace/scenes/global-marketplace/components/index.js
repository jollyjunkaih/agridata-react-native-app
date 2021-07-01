import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
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
        Price: {props.priceMin} - {props.priceMax}
        {'\n'}MOQ: {props.moq}
        {'\n'}Available: {props.availableQuantity}
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
        <View
          style={{
            width: wp('100%'),
            height: hp('30%'),
            top: hp('100%'),
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <Image
            style={{resizeMode: 'cover', width: wp('40%')}}
            source={require('_assets/images/produce.png')}></Image>
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
            farmerID={item.supplierID}
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
          }}>
          <Text style={[Typography.header]}>{props.item.productName}</Text>
          <View
            style={{
              position: 'absolute',
              left: wp('55%'),
              top: hp('0.5%'),
            }}>
            <ChatButton size={wp('8%')}></ChatButton>
          </View>
        </View>

        <Image
          style={{
            top: hp('7%'),
            height: hp('15%'),
            width: wp('32%'),
            borderRadius: 100,
          }}
          source={require('_assets/images/agridata.png')}></Image>
        <View
          style={{
            top: hp('23%'),
            left: wp('7%'),
            position: 'absolute',
            width: wp('80%'),
            flexDirection: 'row',
          }}>
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
              height: hp('50%'),
              left: wp('4%'),
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
              Visit supplier store
            </Text>
            <Rating
              imageSize={wp('6%')}
              readonly={true}
              startingValue={3.5}></Rating>
          </TouchableOpacity>
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
              RM {props.item.priceMin}-{props.item.priceMax}/kg
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: wp('6%'),
            width: wp('70%'),
            height: hp('25%'),
            backgroundColor: Colors.GRAY_LIGHT,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text
            style={[
              Typography.small,
              {
                lineHeight: hp('3%'),
                top: hp('2%'),
                left: wp('5%'),
                position: 'absolute',
              },
            ]}>
            Variety:{props.item.type}
            {'\n'}Available: {props.item.availableQuantity}
            {'\n'}MOQ: {props.item.moq}
            {'\n'}Other Details:
          </Text>

          <View
            style={{
              width: wp('60%'),
              height: hp('7%'),
              backgroundColor: 'white',
              top: hp('15%'),
            }}></View>
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
        <View
          style={{
            width: wp('80%'),
            height: Mixins.scaleHeight(420),
            top: Mixins.scaleHeight(30),
            alignItems: 'center',
          }}>
          <Image
            style={{resizeMode: 'cover', width: Mixins.scaleWidth(340)}}
            source={require('_assets/images/produce.png')}></Image>
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
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('store', {itemId: props.id})}
      style={{
        backgroundColor: Colors.GRAY_LIGHT,
        width: Mixins.scaleWidth(130),
        height: Mixins.scaleHeight(155),
        margin: Mixins.scaleWidth(17.5),
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
        }}></Image>
      */}
      <Text style={[Typography.normal, {top: Mixins.scaleHeight(20)}]}>
        {props.storeName}
      </Text>
    </TouchableOpacity>
  );
};
