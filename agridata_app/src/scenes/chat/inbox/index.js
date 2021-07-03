import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {ChatList} from './components';
import {Searchbar} from './components';
import {NavBar, BackButton} from '_components';
import {getChatGroupsContainingRetailersByUpdatedAt} from '../../../graphql/queries';
import {API} from 'aws-amplify';
import {DismissKeyboardView} from '_components';
import Strings from '_utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Inbox = props => {
  const userID = '461b570f-2557-4859-a450-76dd0e16ed35';
  const companyID = '8ccd83c6-c59c-4248-ab14-2b13adad55a9';
  const [chatRooms, setChatRooms] = useState(null);
  const fetchChats = async () => {
    try {
      console.log(userID);
      const chats = await API.graphql({
        query: getChatGroupsContainingRetailersByUpdatedAt,
        variables: {
          retailerID: companyID,
          sortDirection: 'ASC',
        },
      });
      console.log(chats.data.getChatGroupsContainingRetailersByUpdatedAt.items);
      setChatRooms(
        chats.data.getChatGroupsContainingRetailersByUpdatedAt.items,
      );
    } catch (e) {
      console.log(e);
      console.log("there's a problem");
    }
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: hp('100%'),
        width: wp('100%'),
        alignItems: 'center',
      }}>
      <Text style={[Typography.header, {top: hp('4%')}]}>{Strings.inbox}</Text>
      <Text
        style={[Typography.normal, {color: Colors.GRAY_DARK, top: hp('4%')}]}>
        5 {Strings.newMessages}
      </Text>
      <View
        style={{
          top: hp('5%'),
          width: wp('85%'),
          borderBottomWidth: 1,
          height: 0,
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <DismissKeyboardView>
        <View style={{top: hp('7%')}}>
          <Searchbar />
        </View>
      </DismissKeyboardView>

      <View
        style={{
          height: hp('62%'),
          width: wp('95%'),
          top: hp('9%'),
        }}>
        <ChatList
          data={[
            {
              name: "Matthew's Farm",
              mostRecentMessage: 'Has the invoice been processed?',
              updatedAt: '30-6-21',
            },
            {
              name: "Jane's Farm",
              mostRecentMessage: 'How are the pineapples?',
              updatedAt: '30-6-21',
            },
            {
              name: "Gina's Orchard",
              mostRecentMessage: 'RM 5 okay?',
              updatedAt: '30-6-21',
            },
          ]}
          navigation={props.navigation}
        />
      </View>
      <View style={{position: 'absolute', top: hp('90%')}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
