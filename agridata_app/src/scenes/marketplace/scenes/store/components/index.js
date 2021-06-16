import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import {CloseButton, AddButton} from '_components';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Modal from 'react-native-modal';
import {Rating} from 'react-native-ratings';
import {ChatButton} from '../../../components';

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
      <Image
        style={{
          height: Mixins.scaleHeight(70),
          width: Mixins.scaleHeight(70),
          borderRadius: 100,
          top: Mixins.scaleHeight(10),
        }}></Image>
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
        <ProductPopUp setProductModal={setProductModal}></ProductPopUp>
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
          }}>
          <Image
            style={{resizeMode: 'cover', width: Mixins.scaleWidth(340)}}
            source={require('_assets/images/produce.png')}></Image>
        </View>
      }
      renderItem={({item}) => {
        return (
          <ProductCard
            productName={item.produce}
            type={item.variety}
            availableQuantity={item.quantity}
            date={item.updatedAt}
            image={item.image}
            priceMin={item.listedPrice}
            priceMax={item.listedPrice}
            farmName={item.farmName} //need to add
            farmLocation={item.farmLocation} //need to add
            availdate={item.delivery} //need to add
            moq={item.moq}
            farmerID={item.farmerID}
            id={item.id}
          />
        );
      }}
    />
  );
};

export const ProductPopUp = props => {
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
          height: Mixins.scaleHeight(410),
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
            top: Mixins.scaleHeight(10),
            position: 'absolute',
            width: Mixins.scaleWidth(270),
            flexDirection: 'row',
          }}>
          <Text style={[Typography.header]}>{props.productName}Ginger</Text>
          <View style={{position: 'absolute', right: Mixins.scaleWidth(10)}}>
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
          source={{uri: ''}}></Image>
        <View
          style={{
            top: Mixins.scaleHeight(160),
            left: Mixins.scaleWidth(20),
            position: 'absolute',
            width: Mixins.scaleWidth(250),
            flexDirection: 'row',
          }}>
          <View
            onPress={() => console.log('navigate')}
            style={{
              width: Mixins.scaleWidth(145),
              flexDirection: 'row',
              flexWrap: 'wrap',
              height: Mixins.scaleHeight(42),
            }}>
            <Rating
              imageSize={Mixins.scaleWidth(25)}
              readonly={true}
              startingValue={3.5}></Rating>
          </View>
          <View
            style={{
              width: Mixins.scaleWidth(105),
              right: Mixins.scaleWidth(0),
            }}>
            <Text
              style={[
                Typography.large,
                {bottom: Mixins.scaleHeight(-3), color: Colors.PALE_BLUE},
              ]}>
              RM 25-18/kg
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: Mixins.scaleHeight(50),
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
            Variety:{'\n'}Available:{'\n'}MOQ:{'\n'}Other Details:
          </Text>
          <Text
            style={[
              Typography.small,
              {
                lineHeight: Mixins.scaleHeight(20),
                top: Mixins.scaleHeight(20),
                right: Mixins.scaleWidth(20),
                position: 'absolute',
                textAlign: 'right',
              },
            ]}>
            Variety:{'\n'}Available:{'\n'}MOQ:
          </Text>
          <View
            style={{
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(40),
              backgroundColor: 'white',
              top: Mixins.scaleHeight(100),
            }}></View>
        </View>
        <View style={{position: 'absolute', bottom: Mixins.scaleHeight(10)}}>
          <AddButton text="Purchase Order" width={150} />
        </View>
      </View>
    </View>
  );
};
