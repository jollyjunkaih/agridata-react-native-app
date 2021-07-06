import React, {useState, useContext} from 'react';
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
import Modal from 'react-native-modal';
import {CloseButton} from '_components';
import {API} from 'aws-amplify';
import {
  createMessage,
  deleteChatGroupUsers,
  updateChatGroup,
} from '../../../../graphql/mutations';
import {listUsersInChat} from '../../../../graphql/queries';

import {abs} from 'react-native-reanimated';
import {DismissKeyboardView} from '_components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';
import {ChatBubbleList} from './chat-bubbles';
import {ChatInfo} from './chat-info';

export {ChatBubbleList, ChatInfo};

export const MessageInput = props => {
  const [message, setMessage] = useState('');
  const createNewMessage = async () => {
    try {
      const newMessage = await API.graphql({
        query: createMessage,
        variables: {
          input: {
            senderID: props.userID,
            chatGroupID: props.chatGroupID,
            sender: props.user,
            type: 'text',
            content: message,
          },
        },
      });
      const updateChat = await API.graphql({
        query: updateChatGroup,
        variables: {
          input: {
            id: props.chatGroupID,
            mostRecentMessage: message,
            mostRecentMessageSender: props.user,
          },
        },
      });
      var messages = props.messages;
      messages = messages.reverse();
      messages.push(newMessage.data.createMessage);
      messages = messages.reverse();
      props.setMessages(messages);
      setMessage('');
    } catch {
      e => console.log(e);
    }
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View
        style={{
          height: hp('7%'),
          borderRadius: 40,
          backgroundColor: Colors.GRAY_LIGHT,

          justifyContent: 'center',
        }}>
        <TextInput
          placeholder={Strings.typeMessage}
          underlineColorAndroid={'transparent'}
          multiline={true}
          onChangeText={text => setMessage(text)}
          value={message}
          style={{
            width: wp('74%'),
            height: hp('4%'),
            marginHorizontal: wp('3%'),
            color: 'black',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (message.length > 0) {
            createNewMessage();
          }
        }}
        style={{
          height: hp('5.5%'),
          width: hp('5.5%'),
          borderRadius: 100,
          top: hp('1%'),
          left: wp('3%'),
          backgroundColor: Colors.PALE_BLUE,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Icon
          name="paper-plane-outline"
          size={wp('6%')}
          color={Colors.LIGHT_BLUE}
        />
      </TouchableOpacity>
    </View>
  );
};
