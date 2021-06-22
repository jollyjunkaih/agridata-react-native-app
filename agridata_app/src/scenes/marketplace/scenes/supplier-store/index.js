import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from '../../components';
import {ProductPopUp, AddItemsButton} from './components';
import {NavBar, BackButton} from '_components';

export const SupplierStore = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          left: Mixins.scaleWidth(Spacing.BackButtonLeft),
          top: Mixins.scaleHeight(Spacing.BackButtonTop),
        }}>
        <BackButton />
      </View>
      <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
        {props.name}'s Store
      </Text>
      <View style={{top: Mixins.scaleHeight(40)}}>
        <Searchbar />
      </View>

      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(20),
          bottom: Mixins.scaleHeight(80),
        }}>
        <AddItemsButton />
      </View>

      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-10)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};

const items = [
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
  {produce: 'Ginger', quantity: '10'},
];
