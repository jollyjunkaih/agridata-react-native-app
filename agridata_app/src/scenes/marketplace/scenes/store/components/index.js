import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {CloseButton, AddButton} from '_components';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Modal from 'react-native-modal';
import {Rating} from 'react-native-ratings';
import {ChatButton} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? -120 : null}
      style={{
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
      }}>
      <View
        style={{
          height: Mixins.scaleHeight(450),
          width: Mixins.scaleWidth(310),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          left: Mixins.scaleWidth(
            7.5,
          ) /* taking into account the margin from Product Card */,
          top: Mixins.scaleHeight(80),
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
            top: Mixins.scaleHeight(80),
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
        <View
          style={{
            width: Mixins.scaleWidth(260),
            top: Mixins.scaleHeight(120),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={Typography.normal}>Quantity to buy:</Text>
          <TextInput
            keyboardType="number-pad"
            style={{
              left: Mixins.scaleWidth(15),
              width: Mixins.scaleWidth(80),
              height: Mixins.scaleHeight(20),
              borderWidth: 1,
              borderRadius: 20,
              textAlign: 'center',
            }}></TextInput>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            width: Mixins.scaleWidth(250),
            top: Mixins.scaleHeight(75),
          }}></View>

        <View style={{position: 'absolute', bottom: Mixins.scaleHeight(10)}}>
          <TouchableOpacity
            onPress={() => console.log('add to purchase order')}
            style={{
              width: Mixins.scaleWidth(150),
              backgroundColor: Colors.GRAY_LIGHT,
              borderRadius: 20,
              alignItems: 'center',
              flexDirection: 'row',
              height: Mixins.scaleHeight(25),
            }}>
            <View
              style={{
                left: Mixins.scaleWidth(5),
                bottom: Mixins.scaleHeight(1),
              }}>
              <Icon name="add-outline" size={Mixins.scaleWidth(20)}></Icon>
            </View>

            <Text style={[Typography.normal, {left: Mixins.scaleWidth(10)}]}>
              Purchase Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
