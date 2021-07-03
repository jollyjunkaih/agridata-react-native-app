import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {ChatList} from './components';
import {Searchbar} from './components';
import {NavBar, BackButton} from '_components';
import {getChatGroupsContainingRetailersByUpdatedAt} from '../../../graphql/queries';
import {API} from 'aws-amplify';
import {DismissKeyboardView} from '_components';

export const Inbox = props => {
  console.log('inbox' + props.user);
  const userID = props.user.id;

  if (props.user.retailerCompanyID == null) {
    var companyID = props.user.supplierCompany.id;
    var companyType = 'supplier';
  } else {
    var companyID = props.user.retailerCompany.id;
    var companyType = 'retailer';
  }

  const [chatRooms, setChatRooms] = useState(null);
  const fetchChats = async () => {
    try {
      console.log(userID);
      if (companyType == 'retailer') {
        const chats = await API.graphql({
          query: getChatGroupsContainingRetailersByUpdatedAt,
          variables: {
            retailerID: companyID,
            sortDirection: 'ASC',
          },
        });
        console.log(
          chats.data.getChatGroupsContainingRetailersByUpdatedAt.items,
        );
        setChatRooms(
          chats.data.getChatGroupsContainingRetailersByUpdatedAt.items,
        );
      } else {
        const chats = await API.graphql({
          query: getChatGroupsContainingSuppliersByUpdatedAt,
          variables: {
            supplierID: companyID,
            sortDirection: 'ASC',
          },
        });
        console.log(
          chats.data.getChatGroupsContainingRetailersByUpdatedAt.items,
        );
        setChatRooms(
          chats.data.getChatGroupsContainingRetailersByUpdatedAt.items,
        );
      }
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
      <DismissKeyboardView>
        <View style={{top: Mixins.scaleHeight(40)}}>
          <Searchbar />
        </View>
      </DismissKeyboardView>

      <View
        style={{
          height: Mixins.scaleHeight(420),
          width: Mixins.scaleWidth(340),
          top: Mixins.scaleHeight(60),
        }}>
        <ChatList
          data={chatRooms}
          navigation={props.navigation}
          companyType={companyType}
        />
      </View>
      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-10)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
