import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {BackButton} from '_components/buttons';
import Icon from 'react-native-vector-icons/Ionicons';

export const HumanResource = props => {
  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          top: Mixins.scaleHeight(20),
          alignItems: 'center',
          justifyContent: 'center',
          right: Mixins.scaleWidth(10),
        }}>
        <View style={{right: Mixins.scaleWidth(40)}}>
          <BackButton navigation={props.navigation} />
        </View>
        <View>
          <Text style={[Typography.header]}>Human Resource</Text>
        </View>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(20),
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
          top: Mixins.scaleHeight(20),
          backgroundColor: Colors.GRAY_MEDIUM,
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(250),
          borderRadius: 10,
        }}>
        <View
          style={{top: Mixins.scaleHeight(20), left: Mixins.scaleWidth(20)}}>
          <Text style={[Typography.placeholderSmall]}>Team</Text>
        </View>
        <ParticipantList />
        <TouchableOpacity
          style={{
            alignItems: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            width: Mixins.scaleWidth(250),
            left: Mixins.scaleWidth(20),
            bottom: Mixins.scaleHeight(20),
          }}>
          <Icon name="add-circle-outline" size={Mixins.scaleWidth(20)} />
          <Text
            style={[
              Typography.normal,
              {left: Mixins.scaleWidth(10), color: Colors.LIME_GREEN},
            ]}>
            Add New Team Member
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          top: Mixins.scaleHeight(40),
          width: Mixins.scaleWidth(140),
          height: Mixins.scaleHeight(30),
          backgroundColor: Colors.LIGHT_BLUE,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}>
        <Text>Save Changes</Text>
        <Icon
          name="checkmark-circle-outline"
          size={Mixins.scaleWidth(20)}
          style={{left: Mixins.scaleWidth(10)}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Participant = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(40),
        top: Mixins.scaleHeight(20),
      }}>
      <View
        style={{
          left: Mixins.scaleWidth(20),
          alignSelf: 'flex-start',
        }}>
        <Text style={[Typography.normal]}>Carey Beck</Text>
        <Text style={[Typography.placeholderSmall, {fontStyle: 'italic'}]}>
          Owner
        </Text>
      </View>
      <TouchableOpacity
        style={{
          left: Mixins.scaleWidth(270),
          bottom: Mixins.scaleHeight(25),
          width: Mixins.scaleWidth(30),
        }}>
        <Icon name="trash-outline" size={Mixins.scaleWidth(20)} />
      </TouchableOpacity>
    </View>
  );
};

const ParticipantList = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: Mixins.scaleWidth(260),
        }}></View>
    );
  };
  return (
    <View style={{height: Mixins.scaleHeight(200)}}>
      <FlatList
        numColumns={1}
        data={[{name: '1'}, {name: '1'}, {name: '1'}, {name: '1'}]}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return <Participant name={item.name} />;
        }}></FlatList>
    </View>
  );
};
