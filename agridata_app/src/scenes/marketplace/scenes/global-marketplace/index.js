import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from '../../components';
import {NavBar} from '_components';
import {MarketplaceList} from './components';

export const Marketplace = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
        alignItems: 'center',
      }}>
      <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
        Global Marketplace
      </Text>
      <View style={{top: Mixins.scaleHeight(40)}}>
        <Searchbar />
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
        <TouchableOpacity
          style={{
            width: Mixins.scaleWidth(179),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={Typography.normal}>Product</Text>
        </TouchableOpacity>
        <View
          style={{
            height: Mixins.scaleHeight(15),
            marginVertical: Mixins.scaleHeight(5),
            borderColor: Colors.GRAY_LIGHT,
            borderWidth: Mixins.scaleWidth(1),
          }}></View>
        <TouchableOpacity
          style={{
            width: Mixins.scaleWidth(179),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={Typography.normal}>Favourites</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: Mixins.scaleWidth(330),
          height: Mixins.scaleHeight(425),
          top: Mixins.scaleHeight(70),
        }}>
        <MarketplaceList productList={items} />
      </View>
      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-20)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};

const items = [
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
];
