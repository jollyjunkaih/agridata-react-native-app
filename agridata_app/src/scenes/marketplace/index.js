import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from './components';

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
        Marketplace
      </Text>
      <View style={{top: Mixins.scaleHeight(40)}}>
        <Searchbar></Searchbar>
      </View>
    </SafeAreaView>
  );
};
