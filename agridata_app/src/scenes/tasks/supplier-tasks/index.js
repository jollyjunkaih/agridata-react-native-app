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
import {SendTaskList, ReceivePaymentTaskList, SortModal} from '../components';
import {NavBar} from '_components';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';

export const SupplierTasks = props => {
  const [sortModal, setSortModal] = useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
      }}>
      <Text style={[Typography.header, {top: hp('3%')}]}>{Strings.tasks}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            right: wp('15%'),
            top: hp('4%'),
          }}>
          <Text style={[Typography.normal, {color: Colors.GRAY_DARK}]}>
            {Strings.send}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            top: hp('4%'),
            left: wp('15%'),
          }}>
          <Text style={[Typography.normal, {color: Colors.GRAY_DARK}]}>
            {Strings.claim}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: hp('5%'),
          width: wp('100%'),
          borderBottomWidth: wp('0.5%'),
          height: hp('0%'),
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
          {Strings.allResults}
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
          height: hp('28%'),
        }}>
        <SendTaskList SendTaskList={[{}, {}]} />
      </View>
      <View
        style={{
          top: hp('10%'),
          height: hp('28%'),
        }}>
        <ReceivePaymentTaskList ReceiveTaskList={[{}, {}]} />
      </View>
      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-10)}}>
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
