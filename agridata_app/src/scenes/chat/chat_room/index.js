import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  AppState,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ChatBubbleList,
  MessageInput,
  ChatInfo,
  ProductInquiry,
  PurchaseOrder,
  OrderQuotation,
} from './components';
import {NavBar, BackButton} from '_components';
import BackgroundTimer from 'react-native-background-timer';
import BackgroundTask from 'react-native-background-task';
import {back} from 'react-native/Libraries/Animated/Easing';
import {cos} from 'react-native-reanimated';

export const ChatRoom = props => {
  const [appState, setAppState] = useState(AppState.currentState);
  const handleAppStateChange = state => {
    setAppState(state);
  };
  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);
  let a = 0;
  useEffect(() => {
    console.log(appState);

    if (appState == 'inactive') {
      BackgroundTimer.runBackgroundTimer(() => {
        console.log('3 seconds');
        a += 1;
      }, 3000);
      setTimeout(() => {
        BackgroundTimer.stopBackgroundTimer();
      }, 4000);
    } else if (a == 0) {
      if (appState == 'background') {
        BackgroundTimer.runBackgroundTimer(() => {
          if (a == 0) {
            console.log('3 seconds');
          }
          a = 1;
        }, 3000);
        if (a == 1) {
          BackgroundTimer.stopBackgroundTimer();
          console.log('stop');
        }
      }
    }
  });
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
          top: Mixins.scaleHeight(-5),
          height: Mixins.scaleHeight(40),
          width: Mixins.scaleWidth(360),
          zIndex: 5,
        }}></View>

      <View
        style={{
          zIndex: 2,
          height: Mixins.scaleHeight(65),
          width: Mixins.scaleWidth(360),
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            left: Mixins.scaleWidth(Spacing.BackButtonLeft),
            top: Mixins.scaleHeight(Spacing.BackButtonTop),
            backgroundColor: 'white',
          }}>
          <BackButton navigation={props.navigation} />
        </View>
        <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
          Name of chat
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
            top: Mixins.scaleHeight(35),
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
        <View style={{height: Mixins.scaleHeight(460)}}>
          <ChatBubbleList chatList={data} />
        </View>

        <View style={{top: Mixins.scaleHeight(10)}}>
          <MessageInput></MessageInput>
        </View>
      </KeyboardAvoidingView>
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
