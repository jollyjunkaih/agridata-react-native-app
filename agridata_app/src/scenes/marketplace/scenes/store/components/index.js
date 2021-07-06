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
import {LIME_GREEN} from '_styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';

const ProductCard = props => {
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
      {/*<Image
        style={{
          height: Mixins.scaleHeight(70),
          width: Mixins.scaleHeight(70),
          borderRadius: 100,
          top: Mixins.scaleHeight(10),
        }}></Image>*/}
      <Text style={[Typography.normal, {top: hp('3%')}]}>
        {props.productName}
      </Text>
      <Text style={[Typography.small, {top: hp('4%'), width: wp('20%')}]}>
        {Strings.price}: 3{props.priceMin} - 8{props.priceMax}
        {'\n'}MOQ: {props.moq}
        {'\n'}
        {Strings.available}: {props.availableQuantity}
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
            width: wp('90%'),
            height: hp('70%'),
            top: hp('5%'),
            alignItems: 'center',
          }}>
          <Image
            style={{resizeMode: 'cover', width: wp('90%')}}
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

const ProductPopUp = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? -120 : -180
      } /* Keyboard Offset needs to be tested against multiple phones */
    >
      <View
        style={{
          height: hp('90%'),
          width: wp('90%'),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            right: wp('1%'),
            top: hp('1%'),
          }}>
          <CloseButton setModal={props.setProductModal}></CloseButton>
        </View>
        <View
          style={{
            left: wp('0%'),
            top: hp('1.5%'),
            position: 'absolute',
            width: wp('77%'),
            flexDirection: 'row',
          }}>
          <Text style={[Typography.header, {left: wp('5%')}]}>
            {props.productName}Ginger
          </Text>
          <View style={{position: 'absolute', right: wp('2%')}}>
            <ChatButton size={wp('8%')}></ChatButton>
          </View>
        </View>
        <Image
          style={{
            top: hp('5%'),
            height: hp('20%'),
            width: hp('20%'),
            borderRadius: 100,
          }}
          source={{uri: ''}}></Image>
        <View
          onPress={() => console.log('navigate')}
          style={{
            width: wp('35%'),
            flexDirection: 'row',
            height: hp('13%'),
            top: hp('6%'),
            alignSelf: 'center',
            right: wp('15%'),
          }}>
          <Rating
            imageSize={wp('7%')}
            readonly={true}
            startingValue={3.5}></Rating>
          <Text
            style={[
              Typography.large,
              {color: Colors.PALE_BLUE, left: wp('5%')},
            ]}>
            RM 25-18/kg
          </Text>
        </View>
        <View
          style={{
            top: hp('3%'),
            width: wp('65%'),
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
                top: hp('3%'),
                left: wp('5%'),
                position: 'absolute',
              },
            ]}>
            {Strings.variety}:{'\n'}
            {Strings.available}:{'\n'}MOQ:{'\n'}
            {Strings.otherDetails}:
          </Text>
          <Text
            style={[
              Typography.small,
              {
                lineHeight: hp('3%'),
                top: hp('3%'),
                right: wp('5%'),
                position: 'absolute',
                textAlign: 'right',
              },
            ]}>
            1{'\n'}30{'\n'}10
          </Text>
          <View
            style={{
              width: wp('60%'),
              height: hp('7%'),
              backgroundColor: 'white',
              top: hp('15.5%'),
            }}></View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            width: wp('75%'),
            top: hp('5%'),
          }}></View>
        <View
          style={{
            width: wp('70%'),
            top: hp('8%'),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={Typography.normal}>{Strings.quantityToBuy}:</Text>
          <TextInput
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            style={{
              left: wp('3%'),
              width: wp('20%'),
              height: hp('6%'),
              /* 20 works for IOS but we need a 25 for android */
              borderWidth: 1,
              borderRadius: 20,
              textAlign: 'center',
              textAlignVertical: 'bottom',
              borderBottomColor: 'black',
              color: 'black',
            }}></TextInput>
        </View>
        <View style={{position: 'absolute', bottom: hp('5%')}}>
          <TouchableOpacity
            onPress={() => console.log('add to purchase order')}
            style={{
              width: wp('50%'),
              backgroundColor: Colors.GRAY_LIGHT,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              height: hp('5%'),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View>
              <Icon name="add-outline" size={wp('5.5%')}></Icon>
            </View>
            <Text style={[Typography.normal, {left: wp('3%')}]}>
              {Strings.purchaseOrder}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export const PurchaseOrderButton = props => {
  const [purchaseOrderModal, setPurchaseOrderModal] = useState(false);
  return (
    <TouchableOpacity
      style={{
        height: hp('6%'),
        width: wp('38%'),
        backgroundColor: Colors.PALE_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
      onPress={() => setPurchaseOrderModal(true)}>
      <Text style={[Typography.normal]}>{Strings.purchaseOrder}</Text>
      <Modal isVisible={purchaseOrderModal}>
        <PurchaseOrder
          setPurchaseOrderModal={setPurchaseOrderModal}></PurchaseOrder>
      </Modal>
    </TouchableOpacity>
  );
};

const PurchaseOrder = props => {
  return (
    <View
      style={{
        height: hp('70%'),
        width: wp('90%'),
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={[
            Typography.large,
            {
              fontFamily: 'Poppins-SemiBold',
              top: hp('2%'),
            },
          ]}>
          {Strings.purchaseOrderFor}
        </Text>
        <Text
          style={[
            Typography.header,
            {
              fontFamily: 'Poppins-Bold',
              color: Colors.LIME_GREEN,
              top: hp('2%'),
            },
          ]}>
          Jane's Farm
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.GRAY_WHITE,
          height: hp('30%'),
          top: hp('5%'),
          borderRadius: 10,
          width: wp('60%'),
        }}>
        <PurchaseOrderList></PurchaseOrderList>
      </View>
      <TouchableOpacity
        style={{
          bottom: hp('2%'),
          backgroundColor: Colors.LIGHT_BLUE,
          width: wp('65%'),
          alignItems: 'center',
          justifyContent: 'center',
          height: hp('5%'),
          borderRadius: 10,
          shadowColor: 'grey',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 3,
          shadowRadius: 5,
          position: 'absolute',
        }}
        onPress={() => console.log('Button')}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[Typography.normal]}>{Strings.sendPOtoSupplier}</Text>
          <View style={{right: wp('-2%')}}>
            <Icon name="paper-plane-outline" size={wp('5%')}></Icon>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          right: wp('1%'),
          top: hp('1%'),
        }}>
        <CloseButton setModal={props.setPurchaseOrderModal} />
      </View>
    </View>
  );
};
const PurchaseOrderList = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          borderBottomWidth: 1,
          width: wp('55%'),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
    );
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
      data={DATA}
      numColumns={1}
      ItemSeparatorComponent={Seperator}
      ListEmptyComponent={
        <View
          style={{
            width: wp('70%'),
            height: hp('60%'),
            top: hp('5%'),
            alignItems: 'center',
          }}></View>
      }
      renderItem={({item}) => {
        return (
          <PurchaseOrderComponent name={item.name} quantity={item.quantity} />
        );
      }}
    />
  );
};

const PurchaseOrderComponent = props => {
  return (
    <View
      style={{
        height: hp('5%'),
        justifyContent: 'center',
        backgroundColor: Colors.GRAY_WHITE,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text
            style={[Typography.small, {position: 'absolute', left: wp('2%')}]}>
            {props.name}
          </Text>
        </View>
        <View>
          <Text style={[Typography.small, {left: wp('25%')}]}>
            |{'\t'}
            {props.quantity}kg
          </Text>
        </View>
        <TouchableOpacity style={{left: wp('28%')}}>
          <Icon name="create-outline" size={wp('5%')} />
        </TouchableOpacity>
        <TouchableOpacity style={{left: wp('33%')}}>
          <Icon name="trash-outline" size={wp('5%')} color={Colors.FAIL} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const DATA = [
  {name: 'Ginger', quantity: '30'},
  {name: 'Bananas', quantity: '40'},
  {name: 'Avacadoes', quantity: '50'},
  {name: 'Durian', quantity: '60'},
];
