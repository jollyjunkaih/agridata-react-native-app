import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {ChatList} from './components';
import {Searchbar} from './components';
import {NavBar, BackButton} from '_components';
import {getChatGroupsContainingRetailersByUpdatedAt} from '../../../graphql/queries';
import {API} from 'aws-amplify';

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
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
        alignItems: 'center',
      }}>
      <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
        Inbox
      </Text>
      <Text
        style={[
          Typography.normal,
          {color: Colors.GRAY_DARK, top: Mixins.scaleHeight(25)},
        ]}>
        5 New Messages
      </Text>
      <View
        style={{
          top: Mixins.scaleHeight(30),
          width: Mixins.scaleWidth(360),
          borderBottomWidth: 1,
          height: 0,
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <View style={{top: Mixins.scaleHeight(40)}}>
        <Searchbar />
      </View>
      <View
        style={{
          height: Mixins.scaleHeight(420),
          width: Mixins.scaleWidth(340),
          top: Mixins.scaleHeight(60),
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
      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-10)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
