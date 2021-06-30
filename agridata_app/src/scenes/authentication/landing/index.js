import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Mixins, Typography} from '_styles';

export const Landing = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: Mixins.scaleHeight(640),
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{position: 'absolute', top: Mixins.scaleHeight(100)}}>
          <Image
            source={require('_assets/images/agridata.png')}
            style={{
              resizeMode: 'contain',
              height: Mixins.scaleHeight(140),
              width: Mixins.scaleWidth(200),
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('signup')}
          style={{
            position: 'absolute',
            top: Mixins.scaleHeight(280),
            width: Mixins.scaleWidth(180),
            height: Mixins.scaleHeight(30),
            backgroundColor: '#E2EDFE',
            borderRadius: 20,
            elevation: 3,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={[
              Typography.normal,
              {
                marginLeft: Mixins.scaleWidth(15),
                top: Mixins.scaleHeight(1.5),
              },
            ]}>
            SIGN UP
          </Text>
          <View style={{position: 'absolute', right: Mixins.scaleWidth(10)}}>
            <Icon size={Mixins.scaleWidth(20)} name="arrow-forward-outline" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('signin')}
          style={{
            position: 'absolute',
            top: Mixins.scaleHeight(340),
            width: Mixins.scaleWidth(180),
            height: Mixins.scaleHeight(30),
            backgroundColor: '#E2EDFE',
            borderRadius: 20,
            elevation: 3,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={[
              Typography.normal,
              {
                marginLeft: Mixins.scaleWidth(15),
                top: Mixins.scaleHeight(1.5),
              },
            ]}>
            LOG IN
          </Text>
          <View style={{position: 'absolute', right: Mixins.scaleWidth(10)}}>
            <Icon size={Mixins.scaleWidth(20)} name="arrow-forward-outline" />
          </View>
        </TouchableOpacity>

        <View style={{position: 'absolute', top: Mixins.scaleHeight(350)}}>
          <Image
            source={require('_assets/images/greenproduce.png')}
            style={{
              resizeMode: 'contain',
              width: Mixins.scaleWidth(300),
              height: Mixins.scaleHeight(300),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
