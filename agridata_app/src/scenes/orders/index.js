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
import {OrderList, SortModal} from './components';
import {NavBar} from '_components';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Orders = props => {
  const [sortModal, setSortModal] = useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={[Typography.header, {top: hp('4%')}]}>Orders</Text>
      <Text
        style={[Typography.normal, {color: Colors.GRAY_DARK, top: hp('4%')}]}>
        Digital Invoices
      </Text>
      <View
        style={{
          top: hp('5%'),
          width: wp('100%'),
          borderBottomWidth: 1,
          height: 0,
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <View
        style={{
          width: wp('80%'),
          height: hp('5%'),
          top: hp('7%'),
          flexDirection: 'row',
        }}>
        <Text style={[Typography.normal, {textTransform: 'uppercase'}]}>
          All Results
        </Text>
        <TouchableOpacity
          onPress={() => setSortModal(true)}
          style={{position: 'absolute', right: wp('0%')}}>
          <Icon name="funnel-outline" size={wp('5%')}></Icon>
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: hp('7%'),
          height: hp('64%'),
        }}>
        <OrderList
          OrderList={[
            {
              id: 1234,
              companyName: "Matthew's Farm",
              date: '30 June 2021',
              amount: 500,
            },
            {
              id: 1235,
              companyName: "Jane's Farm",
              date: '30 June 2021',
              amount: 435,
            },

            {
              id: 1233,
              companyName: "Jun's Wholesale",
              date: '29 June 2021',
              amount: 345,
            },
            {
              id: 1236,
              companyName: "Matthew's Farm",
              date: '28 June 2021',
              amount: 708,
            },
          ]}
        />
      </View>
      <View style={{position: 'absolute', top: hp('90%')}}>
        <NavBar navigation={props.navigation} />
      </View>
      <Modal
        animationIn="fadeIn"
        animationInTiming={100}
        animationOut="fadeOut"
        animationOutTiming={100}
        backdropOpacity={0.4}
        isVisible={sortModal}
        onBackdropPress={() => setSortModal(false)}>
        <SortModal />
      </Modal>
    </SafeAreaView>
  );
};
