import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  FlatList,
  Text,
  Image,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {CloseButton} from '_components';
import {API} from 'aws-amplify';
import {
  createMessage,
  deleteChatGroupUsers,
  updateChatGroup,
} from '../../../../graphql/mutations';
import {listUsersInChat} from '../../../../graphql/queries';

import {abs} from 'react-native-reanimated';
import {DismissKeyboardView} from '_components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';

export const PurchaseOrder = props => {
  return (
    <View
      style={{
        height: hp('65%'),
        width: wp('80%'),
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 10,
        left: wp('5%'),
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={[
            Typography.large,
            {
              fontFamily: 'Poppins-SemiBold',
              top: hp('3%'),
            },
          ]}>
          {Strings.purchaseOrderFrom}
        </Text>
        <Text
          style={[
            Typography.header,
            {
              fontFamily: 'Poppins-Bold',
              color: Colors.LIME_GREEN,
              top: hp('3%'),
            },
          ]}>
          Jane's Farm
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.GRAY_WHITE,
          height: hp('50%'),
          top: hp('5%'),
          borderRadius: 10,
        }}>
        <PurchaseOrderList></PurchaseOrderList>
      </View>
      <View
        style={{
          position: 'absolute',
          right: wp('2%'),
          top: hp('0.5%'),
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
          width: wp('70%'),
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
            width: wp('80%'),
            height: hp('60%'),
            top: hp('2%'),
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.GRAY_WHITE,
        width: wp('70%'),
      }}>
      <View style={{flexDirection: 'row', right: wp('7%')}}>
        <Text
          style={[Typography.small, {position: 'absolute', right: wp('6%')}]}>
          {props.name}
        </Text>
        <Text style={[Typography.small, {position: 'absolute'}]}>
          {'\t'}|{'\t'}
        </Text>
        <Text
          style={[Typography.small, {position: 'absolute', left: wp('20%')}]}>
          {props.quantity}kg
        </Text>
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
