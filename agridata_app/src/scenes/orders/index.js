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

export const Orders = props => {
  const [sortModal, setSortModal] = useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
        Orders
      </Text>
      <Text
        style={[
          Typography.normal,
          {color: Colors.GRAY_DARK, top: Mixins.scaleHeight(25)},
        ]}>
        Digital Invoices
      </Text>
      <View
        style={{
          top: Mixins.scaleHeight(30),
          width: Mixins.scaleWidth(360),
          borderBottomWidth: 1,
          height: 0,
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <View
        style={{
          width: Mixins.scaleWidth(290),
          height: Mixins.scaleHeight(30),
          top: Mixins.scaleHeight(40),
          flexDirection: 'row',
        }}>
        <Text style={[Typography.normal, {textTransform: 'uppercase'}]}>
          All Results
        </Text>
        <TouchableOpacity
          onPress={() => setSortModal(true)}
          style={{position: 'absolute', right: Mixins.scaleWidth(0)}}>
          <Icon name="funnel-outline" size={Mixins.scaleWidth(20)}></Icon>
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(40),
          height: Mixins.scaleHeight(440),
        }}>
        <OrderList OrderList={[{}, {}, {}, {}, {}, {}]} />
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
