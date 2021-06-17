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

const ChatBubble = props => {
  const isMyMessage = () => {
    return true;
  };
  return (
    <View style={{margin: 5}}>
      <View
        style={{
          backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_LIGHT,
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
          borderRadius: 15,
        }}>
        {!isMyMessage() && (
          <Text
            style={{
              color: Colors.GRAY_DARK,
              fontWeight: 'bold',
              marginBottom: Mixins.scaleHeight(5),
              marginLeft: Mixins.scaleWidth(5),
            }}>
            UserName
          </Text>
        )}
        <Text style={[Typography.normal, {margin: Mixins.scaleWidth(5)}]}>
          helloasdffffadsfsdsfsddddddddddddddddddddddddddddd dfasdgsadfdsv
          sadfdsasdf
        </Text>
        <Text style={[Typography.small, {alignSelf: 'flex-end'}]}>
          {'{moment(props.createdAt).fromNow()}'}
        </Text>
      </View>
    </View>
  );
};

export const ChatBubbleList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.chatList}
        numColumns={1}
        renderItem={item => {
          return <ChatBubble user={item.name} />;
        }}
      />
    </View>
  );
};

export const MessageInput = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(40),
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
      }}>
      <TextInput
        placeholder={'Type a message'}
        underlineColorAndroid="white"
        multiline={true}
        style={{
          textAlignVertical: 'top',
          width: Mixins.scaleWidth(200),
          marginHorizontal: Mixins.scaleWidth(10),
          marginTop: Mixins.scaleHeight(5),
        }}></TextInput>
      <TouchableOpacity
        style={{
          height: Mixins.scaleWidth(40),
          width: Mixins.scaleWidth(40),
          backgroundColor: Colors.PALE_BLUE,
        }}>
        <Icon name="send-outline" />
      </TouchableOpacity>
    </View>
  );
};
