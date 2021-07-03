import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  AppState,
  Platform,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {ChatBubbleList, MessageInput, ChatInfo} from './components';
import {NavBar, BackButton} from '_components';
import BackgroundTimer from 'react-native-background-timer';
import {listMessagesInChat} from '../../../graphql/queries';
import {DismissKeyboardView} from '_components';
import {messagesInChatByDate} from '../../../graphql/queries';
import {onCreateMessage} from '../../../graphql/subscriptions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';

import {API, graphqlOperation} from 'aws-amplify';

export const ChatRoom = props => {
  const userID = '461b570f-2557-4859-a450-76dd0e16ed35';

  const {itemID} = 77777; //props.route.params; //chatgroupid
  const [messages, setMessages] = useState(null);
  const [appState, setAppState] = useState(AppState.currentState);
  const handleAppStateChange = state => {
    setAppState(state);
  };
  /*const fetchMessages = async () => {
    try {
      const message = await API.graphql({
        query: messagesInChatByDate,
        variables: {
          chatGroupID: itemID,
          sortDirection: 'ASC',
        },
      });
      var tempMessage = message.data.messagesInChatByDate.items;
      setMessages(tempMessage.reverse());
    } catch (e) {
      console.log(e);
      console.log("there's a problem");
    }
  };
  useEffect(() => {
    fetchMessages();
    console.log('useEffect Triggered');
  }, [itemID]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage),
    ).subscribe({
      next: data => {
        console.log(data.value.data.onCreateMessage);
        const newMessage = data.value.data.onCreateMessage;

        if (newMessage.chatGroupID != itemID) {
          console.log('Message is in another room!');
          return;
        }

        messages = messages.reverse();
        messages.push(newMessage.data.newMessage);
        messages = messages.reverse();
        setMessages(messages);
        // setMessages([newMessage, ...messages]);
      },
    });

    return () => subscription.unsubscribe();
  }, []);
*/
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);
  let a = 0;
  useEffect(() => {
    console.log(appState);
    if (Platform.OS === 'ios') {
      if (appState == 'inactive') {
        BackgroundTimer.runBackgroundTimer(() => {
          console.log('3 seconds');
        }, 3000);
        setTimeout(() => {
          BackgroundTimer.stopBackgroundTimer();
          console.log('stop');
        }, 4000);
      }
    }
    if (Platform.OS === 'android') {
      if (a == 0) {
        if (appState == 'background') {
          BackgroundTimer.runBackgroundTimer(() => {
            if (a == 0) {
              console.log('3seconds');
            }
            a = 1;
          }, 3000);
          if (a == 1) {
            BackgroundTimer.stopBackgroundTimer();
            console.log('stop');
          }
        }
      }
    }
  }, [appState]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      {/* This is the Immovable chat name */}
      <View // This is for status bar on ios chat
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          top: hp('-1%'),
          height: hp('7%'),
          width: wp('100%'),
          zIndex: 5,
        }}></View>

      <View
        style={{
          zIndex: 2,
          height: hp('10%'),
          width: wp('100%'),
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            left: wp('6%'),
            top: hp('3.5%'),
          }}>
          <BackButton navigation={props.navigation} />
        </View>
        <Text style={[Typography.header, {top: hp('3%')}]}>Matthew's Farm</Text>
        <View
          style={{
            position: 'absolute',
            top: hp('3%'),
            right: wp('5%'),
          }}>
          <ChatInfo chatGroupID={itemID} />
        </View>

        <View
          style={{
            top: hp('6%'),
            width: wp('100%'),
            borderBottomWidth: 1,
            height: 0,
            borderColor: Colors.GRAY_MEDIUM,
          }}></View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'position'}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? hp('3%') : Mixins.scaleHeight(40)
        } /* Keyboard Offset needs to be tested against multiple phones */
        style={{
          top: hp('4%'),
          width: wp('95%'),
        }}>
        <View
          style={{
            height: hp('72%'),
          }}>
          <ChatBubbleList data={[{}, {}]} userID={userID} />
        </View>

        <View style={{top: hp('0%')}}>
          <MessageInput
            userID={userID}
            chatGroupID={itemID}
            user={'user'}
            setMessages={setMessages}
            messages={messages}></MessageInput>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
