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

export const ProductCard = props => {
  const [productModal, setProductModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setProductModal(true)}
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
        }}></Image>*/}
      <Text style={[Typography.normal, {top: Mixins.scaleHeight(20)}]}>
        {props.productName}
      </Text>
      <Text
        style={[
          Typography.small,
          {top: Mixins.scaleHeight(20), width: Mixins.scaleWidth(80)},
        ]}>
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
            width: Mixins.scaleWidth(330),
            height: Mixins.scaleHeight(420),
            top: Mixins.scaleHeight(30),
            alignItems: 'center',
          }}></View>
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
        right: Mixins.scaleWidth(17.5),
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: Mixins.scaleHeight(385),
          width: Mixins.scaleWidth(290),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            right: Mixins.scaleWidth(-10),
            top: Mixins.scaleHeight(-10),
          }}>
          <CloseButton setModal={props.setProductModal}></CloseButton>
        </View>
        <View
          style={{
            left: Mixins.scaleWidth(10),
            top: Mixins.scaleHeight(15),
            position: 'absolute',
            width: Mixins.scaleWidth(270),
            flexDirection: 'row',
          }}>
          <Text style={[Typography.header, {left: Mixins.scaleWidth(15)}]}>
            {props.item.productName}
          </Text>
          <View
            style={{
              position: 'absolute',
              left: Mixins.scaleWidth(110),
              top: Mixins.scaleHeight(6),
            }}>
            <ChatButton size={Mixins.scaleWidth(25)}></ChatButton>
          </View>
        </View>

        <Image
          style={{
            top: Mixins.scaleHeight(40),
            height: Mixins.scaleWidth(130),
            width: Mixins.scaleWidth(130),
            borderRadius: 100,
          }}
          source={require('_assets/images/agridata.png')}></Image>
        <View
          style={{
            top: Mixins.scaleHeight(160),
            left: Mixins.scaleWidth(20),
            position: 'absolute',
            width: Mixins.scaleWidth(250),
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('store', {
                itemId: props.item.supplierID,
              })
            }
            style={{
              width: Mixins.scaleWidth(145),
              flexDirection: 'row',
              flexWrap: 'wrap',
              height: Mixins.scaleHeight(42),
              left: Mixins.scaleWidth(10),
            }}>
            <Icon name="rocket-outline" size={Mixins.scaleWidth(20)}></Icon>
            <Text
              style={[
                Typography.normal,
                {
                  fontFamily: 'Poppins-SemiBold',
                  left: Mixins.scaleWidth(10),
                  width: Mixins.scaleWidth(110),
                },
              ]}>
              Visit supplier store
            </Text>
            <Rating
              imageSize={Mixins.scaleWidth(22)}
              readonly={true}
              startingValue={3.5}></Rating>
          </TouchableOpacity>
          <View
            style={{
              width: Mixins.scaleWidth(105),
              right: Mixins.scaleWidth(0),
            }}>
            <Text
              style={[
                Typography.normal,
                {bottom: Mixins.scaleHeight(-15), color: Colors.PALE_BLUE},
              ]}>
              RM {props.item.priceMin}-{props.item.priceMax}/kg
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: Mixins.scaleHeight(20),
            width: Mixins.scaleWidth(245),
            height: Mixins.scaleHeight(155),
            backgroundColor: Colors.GRAY_LIGHT,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text
            style={[
              Typography.small,
              {
                lineHeight: Mixins.scaleHeight(20),
                top: Mixins.scaleHeight(20),
                left: Mixins.scaleWidth(20),
                position: 'absolute',
              },
            ]}>
            Variety:{props.item.type}
            {'\n'}Available:{props.item.availableQuantity}
            {'\n'}MOQ:{props.item.moq}
            {'\n'}Other Details:
          </Text>

          <View
            style={{
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(40),
              backgroundColor: 'white',
              top: Mixins.scaleHeight(100),
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
            width: Mixins.scaleWidth(330),
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
