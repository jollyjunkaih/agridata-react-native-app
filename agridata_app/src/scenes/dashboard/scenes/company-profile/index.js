import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {BackButton} from '_components/buttons';
import Icon from 'react-native-vector-icons/Ionicons';

export const CompanyProfile = props => {
  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          top: Mixins.scaleHeight(20),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{right: Mixins.scaleWidth(30)}}>
          <BackButton navigation={props.navigation} />
        </View>
        <View>
          <Text style={[Typography.header]}>Company Profile</Text>
        </View>
        <TouchableOpacity
          style={{left: Mixins.scaleWidth(30), bottom: Mixins.scaleHeight}}>
          <Icon
            name="create-outline"
            size={Mixins.scaleWidth(25)}
            onPress={() => props.navigation.navigate('editprofile')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(50),
          alignItems: 'center',
          justifyContent: 'center',
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(200),
        }}>
        <Image source={require('_assets/images/company-logo.png')} />
        <Text style={[Typography.header, {top: Mixins.scaleHeight(10)}]}>
          City Grocer
        </Text>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(60),
          backgroundColor: Colors.GRAY_MEDIUM,
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(250),
          borderRadius: 10,
        }}>
        <View
          style={{
            top: Mixins.scaleHeight(20),
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(300),
          }}>
          <Text style={[Typography.placeholderSmall]}>
            Company Registration No.
          </Text>
          <Text style={[Typography.normal]}>1010100101010101R</Text>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(35),
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(300),
          }}>
          <Text style={[Typography.placeholderSmall]}>Company Address </Text>
          <Text style={[Typography.normal]}>
            T1 Bundusan, Jalan Bundusan, Penampang, Sabah
          </Text>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(50),
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(300),
          }}>
          <Text style={[Typography.placeholderSmall]}>Contact Number </Text>
          <Text style={[Typography.normal]}>+60 11 6569 1999 </Text>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(65),
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(300),
          }}>
          <Text style={[Typography.placeholderSmall]}>Email Address </Text>
          <Text style={[Typography.normal]}>citygrocerkk@gmail.com</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
