import React, {useState} from 'react';
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

export const Searchbar = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.GRAY_MEDIUM,
        width: Mixins.scaleWidth(310),
        height: Mixins.scaleHeight(35),
        borderRadius: 30,
        elevation: 2,
        justifyContent: 'center',
      }}>
      {/* Add searchable dropdown */}
      <TextInput></TextInput>
      <View style={{position: 'absolute', left: Mixins.scaleWidth(10)}}>
        <Icon
          name="search"
          size={Mixins.scaleWidth(25)}
          color={Colors.GRAY_DARK}
        />
      </View>
    </View>
  );
};

export const ChatList = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          borderBottomWidth: 1,
          width: Mixins.scaleWidth(340),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
    );
  };
  const Footer = () => {
    return (
      <View style={{width: Mixins.scaleWidth(340), alignItems: 'center'}}>
        <Image source={require('_assets/images/agridata.png')}></Image>
      </View>
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
      data={props.chatList}
      numColumns={1}
      ItemSeparatorComponent={Seperator}
      ListFooterComponent={Footer}
      ListEmptyComponent={
        <View
          style={{
            height: Mixins.scaleHeight(420),
            width: Mixins.scaleWidth(340),
          }}>
          <View
            style={{
              left: Mixins.scaleWidth(30),
              width: Mixins.scaleWidth(280),
              height: Mixins.scaleHeight(100),
              top: Mixins.scaleHeight(30),
              alignItems: 'center',
              backgroundColor: Colors.PALE_BLUE,
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <Text style={Typography.normal}>
              You currently don't have any chats
              {'\n'}Look for a retailer to start chatting
            </Text>
          </View>
        </View>
      }
      renderItem={({item}) => {
        return (
          <ChatRoom
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
            navigation={props.navigation}
          />
        );
      }}
    />
  );
};

const ChatRoom = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('chatroom')}
      style={{
        height: Mixins.scaleHeight(60),
        width: Mixins.scaleWidth(340),
        flexDirection: 'row',
      }}>
      <View
        style={{
          width: Mixins.scaleWidth(50),
          height: Mixins.scaleWidth(50),
          top: Mixins.scaleWidth(10),
          left: Mixins.scaleWidth(10),
          backgroundColor: Colors.LIGHT_BLUE,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            resizeMode: 'center',
            width: Mixins.scaleWidth(50),
            height: Mixins.scaleWidth(50),
          }}
          source={require('_assets/images/agridata.png')}
        />
      </View>
      <View style={{left: Mixins.scaleWidth(25), top: Mixins.scaleHeight(10)}}>
        <Text style={Typography.normal}>Company Name</Text>
        <Text style={Typography.small}>Last Message</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: Mixins.scaleHeight(10),
          right: Mixins.scaleWidth(20),
        }}>
        <Text style={[Typography.small, {color: Colors.GRAY_DARK}]}>
          Message sent time
        </Text>
      </View>
    </TouchableOpacity>
  );
};
