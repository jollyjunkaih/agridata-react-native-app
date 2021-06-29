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
          width: Mixins.scaleWidth(360),
        }}>
        <View style={{left: Mixins.scaleWidth(10), position: 'absolute'}}>
          <BackButton navigation={props.navigation} />
        </View>
        <View>
          <Text style={[Typography.header]}>Company Profile</Text>
        </View>
        <TouchableOpacity
          style={{
            right: Mixins.scaleWidth(10),
            position: 'absolute',
          }}>
          <Icon
            name="create-outline"
            size={Mixins.scaleWidth(25)}
            onPress={() => props.navigation.navigate('editcompany')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(40),
          alignItems: 'center',
          justifyContent: 'center',
          width: Mixins.scaleWidth(360),
          height: Mixins.scaleHeight(200),
        }}>
        <Image
          source={require('_assets/images/company-logo.png')}
          style={{
            resizeMode: 'contain',
            width: Mixins.scaleWidth(300),
            height: Mixins.scaleHeight(130),
          }}
        />
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
            top: Mixins.scaleHeight(25),
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(300),
          }}>
          <Text style={[Typography.placeholderSmall]}>
            Company Registration No.
          </Text>
          <View style={{top: Mixins.scaleHeight(5)}}>
            <Text style={[Typography.normal]}>1010100101010101R</Text>
          </View>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(40),
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(300),
          }}>
          <Text style={[Typography.placeholderSmall]}>Company Address </Text>
          <View style={{top: Mixins.scaleHeight(5)}}>
            <Text style={[Typography.normal]}>
              T1 Bundusan, Jalan Bundusan, Penampang, Sabah
            </Text>
          </View>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(55),
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(300),
          }}>
          <Text style={[Typography.placeholderSmall]}>Contact Number </Text>
          <View style={{top: Mixins.scaleHeight(5)}}>
            <Text style={[Typography.normal]}>+60 11 6569 1999 </Text>
          </View>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(70),
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(300),
          }}>
          <Text style={[Typography.placeholderSmall]}>Email Address </Text>
          <View style={{top: Mixins.scaleHeight(5)}}>
            <Text style={[Typography.normal]}>citygrocerkk@gmail.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
