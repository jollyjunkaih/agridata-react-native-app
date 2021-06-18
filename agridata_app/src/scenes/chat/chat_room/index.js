import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {ChatBubbleList, MessageInput, ChatInfo} from './components';
import {NavBar, BackButton} from '_components';

export const ChatRoom = props => {
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
          zIndex: 2,
          height: Mixins.scaleHeight(63),
          width: Mixins.scaleWidth(360),
          backgroundColor: 'white',
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
          Company Name Chat
        </Text>
        <View
          style={{
            position: 'absolute',
            top: Mixins.scaleHeight(30),
            right: Mixins.scaleWidth(15),
          }}>
          <ChatInfo />
        </View>

        <View
          style={{
            top: Mixins.scaleHeight(30),
            width: Mixins.scaleWidth(360),
            borderBottomWidth: 1,
            height: 0,
            borderColor: Colors.GRAY_MEDIUM,
          }}></View>
      </View>

      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Mixins.scaleHeight(30)}
        style={{
          top: Mixins.scaleHeight(10),
          width: Mixins.scaleWidth(340),
        }}>
        <View style={{height: Mixins.scaleHeight(440)}}>
          <ChatBubbleList chatList={data}></ChatBubbleList>
        </View>
        <View style={{top: Mixins.scaleHeight(10)}}>
          <MessageInput></MessageInput>
        </View>
      </KeyboardAvoidingView>

      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-10)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};

const data = [
  {name: '1'},
  {name: '1'},
  {name: '1'},
  {name: '1'},
  {name: '1'},
  {name: '1'},
  {name: '1'},
  {name: '1'},
  {name: '1'},
];
