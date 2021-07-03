import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from '../../components';
import {MarketplaceList, PurchaseOrderButton} from './components';
import {NavBar, BackButton} from '_components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';

export const Store = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%'),
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          left: wp('5%'),
          top: hp('4%'),
        }}>
        <BackButton navigation={props.navigation} />
      </View>
      <Text style={[Typography.header, {top: hp('4%')}]}>
        {props.name}Jane's Farm
      </Text>
      <View style={{top: hp('6%')}}>
        <Searchbar />
      </View>
      <ScrollView
        style={{
          width: wp('93%'),
          height: hp('90%'),
          top: hp('10%'),
        }}>
        <MarketplaceList productList={items} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          right: wp('5%'),
          bottom: hp('13%'),
        }}>
        <PurchaseOrderButton />
      </View>

      <View style={{position: 'absolute', bottom: hp('0%')}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};

const items = [
  {produce: 'Avacadoes', quantity: '10'},
  {produce: 'Bananas', quantity: '10'},
  {produce: 'Pineapple', quantity: '10'},
  {produce: 'Mango', quantity: '10'},
  {produce: 'Sayur Sawi', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
];
