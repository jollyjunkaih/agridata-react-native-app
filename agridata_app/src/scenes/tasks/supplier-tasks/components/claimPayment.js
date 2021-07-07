import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  FlatList,
  SafeAreaView,
  Text,
  Image,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {CloseButton} from '_components';
import DatePicker from 'react-native-datepicker';
import dayjs from 'dayjs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DismissKeyboard} from '_components';

const now = () => {
  const now = dayjs().format('DD-MM-YYYY');
  return now;
};

export const ReceivePaymentTaskList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.data}
        numColumns={1}
        renderItem={item => {
          return <ReceivePaymentTask user={item.name} />;
        }}
      />
    </View>
  );
};

const ReceivePaymentTask = props => {
  const [receiveTaskModal, setReceiveTaskModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setReceiveTaskModal(true)}
      style={{
        marginBottom: hp('2%'),
        width: wp('85%'),
        height: hp('12%'),
      }}>
      <View
        style={{
          backgroundColor: Colors.GRAY_LIGHT,
          borderRadius: 10,
          flexDirection: 'row',
          width: wp('85%'),
          height: hp('12.5%'),
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}>
        <View
          style={{
            backgroundColor: Colors.GRAY_BLACK,
            height: hp('12.5%'),
            width: wp('4.5%'),
            borderRadius: 10,
          }}></View>
        <View
          style={{
            backgroundColor: Colors.GRAY_LIGHT,
            height: hp('12.5%'),
            width: wp('23%'),
            right: wp('2%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{bottom: hp('0.5%')}}>
            <Icon name="cash-outline" size={wp('11%')} />
          </View>
        </View>
        <Text
          style={[
            Typography.normal,
            {
              color: Colors.LIME_GREEN,
              top: hp('3%'),
              left: wp('25%'),
              position: 'absolute',
            },
          ]}>
          City Grocer
        </Text>
        <Text
          style={[
            Typography.small,
            {
              color: 'grey',
              top: hp('7%'),
              left: wp('25%'),
              position: 'absolute',
            },
          ]}>
          4 items
        </Text>
        <Text
          style={[
            Typography.small,
            {
              color: 'grey',
              top: hp('6%'),
              right: hp('2%'),
              position: 'absolute',
            },
          ]}>
          Date Created:
        </Text>
        <Text
          style={[
            Typography.small,
            {
              color: 'grey',
              top: hp('8%'),
              right: hp('2%'),
              position: 'absolute',
              fontStyle: 'italic',
            },
          ]}>
          30 June,2021
        </Text>
      </View>
      <Modal isVisible={receiveTaskModal}>
        <ReceivePaymentModal
          setReceiveTaskModal={setReceiveTaskModal}
          receiveTaskList={props}></ReceivePaymentModal>
      </Modal>
    </TouchableOpacity>
  );
};

const ReceivePaymentModal = props => {
  return (
    <View
      style={{
        width: wp('90%'),
        height: hp('80%'),
        backgroundColor: Colors.GRAY_WHITE,
        borderRadius: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          right: wp('1%'),
          top: hp('1%'),
        }}>
        <CloseButton setModal={props.setReceiveTaskModal} />
      </View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: hp('7%'),
            right: wp('4%'),
          },
        ]}>
        11:00 AM
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: wp('4%'),
            top: hp('10%'),
            fontStyle: 'italic',
          },
        ]}>
        22 July, 2021
      </Text>
      <Text
        style={[
          Typography.welcome,
          {
            position: 'absolute',
            fontFamily: 'Poppins-SemiBold',
            top: hp('6%'),
            left: wp('5%'),
          },
        ]}>
        Payment Alert
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: wp('80%'),
          alignSelf: 'center',
          top: hp('18%'),
          borderColor: Colors.GRAY_MEDIUM,
          position: 'absolute',
        }}></View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: hp('23%'),
            left: wp('5%'),
          },
        ]}>
        Payment From:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: hp('23%'),
            left: wp('41%'),
          },
        ]}>
        CITY GROCER
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: hp('28%'),
            left: wp('5%'),
          },
        ]}>
        Order #:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: hp('28%'),
            left: wp('41%'),
          },
        ]}>
        #12345
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: hp('33%'),
            left: wp('5%'),
          },
        ]}>
        Date of Payment:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: hp('33%'),
            left: wp('41%'),
          },
        ]}>
        22 July, 2021
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: hp('38%'),
            left: wp('5%'),
          },
        ]}>
        Bank:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: hp('38%'),
            left: wp('41%'),
          },
        ]}>
        MayBank
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: hp('43%'),
            left: wp('5%'),
          },
        ]}>
        Reference #:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: hp('43%'),
            left: wp('41%'),
          },
        ]}>
        9065 7756 8989
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          width: wp('30%'),
          height: hp('5%'),
          alignSelf: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          position: 'absolute',
          bottom: hp('10%'),
          borderRadius: 10,
        }}>
        <Text style={[Typography.normal, {textAlign: 'center'}]}>
          Received{'\t\t'}
          <Icon name="checkmark-circle-outline" size={wp('5%')}></Icon>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
