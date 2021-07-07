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
import {ReceiveList, UploadReceiptList, SortModal} from '../components';
import {NavBar} from '_components';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';

export const RetailerTasks = props => {
  const [sortModal, setSortModal] = useState(false);
  const [task, setTask] = useState('receive');
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
        {task == 'receive' ? (
          <View
            style={{
              right: wp('15%'),
              top: hp('4%'),
            }}>
            <Text
              style={[
                Typography.normal,
                {
                  color: Colors.GRAY_DARK,
                  fontFamily: 'Poppins-Bold',
                  textDecorationLine: 'underline',
                },
              ]}>
              {Strings.toRecieve}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setTask('receive')}
            style={{
              right: wp('15%'),
              top: hp('4%'),
            }}>
            <Text style={[Typography.normal]}>{Strings.toRecieve}</Text>
          </TouchableOpacity>
        )}
        {task == 'pay' ? (
          <View
            style={{
              left: wp('15%'),
              top: hp('4%'),
            }}>
            <Text
              style={[
                Typography.normal,
                {
                  color: Colors.GRAY_DARK,
                  fontFamily: 'Poppins-Bold',
                  textDecorationLine: 'underline',
                },
              ]}>
              {Strings.toPay}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setTask('pay')}
            style={{
              top: hp('4%'),
              left: wp('15%'),
            }}>
            <Text style={[Typography.normal]}>{Strings.toPay}</Text>
          </TouchableOpacity>
        )}
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
          height: hp('56%'),
        }}>
        {task == 'pay' ? (
          <UploadReceiptList
            UploadReceiptList={[
              {
                supplierName: "Matthew's Farm",
                items: 10,
                createdAt: '30 June 2021',
                id: 1,
              },
              {
                supplierName: "Jane's Farm",
                items: 4,
                createdAt: '29 June 2021',
                id: 2,
              },
              {
                supplierName: "Mina's Wholesale",
                items: 5,
                createdAt: '30 June 2021',
                id: 3,
              },
              {
                supplierName: "Gina's Avacadoes",
                items: 2,
                createdAt: '29 June 2021',
                id: 4,
              },
              {
                supplierName: "Gina's Avacadoes",
                items: 2,
                createdAt: '29 June 2021',
                id: 5,
              },
            ]}
          />
        ) : (
          <ReceiveList
            ReceiveList={[
              {
                supplierName: "Matthew's Farm",
                items: 10,
                createdAt: '30 June 2021',
                id: 1,
              },
              {
                supplierName: "Jane's Farm",
                items: 4,
                createdAt: '29 June 2021',
                id: 2,
              },
              {
                supplierName: "Mina's Wholesale",
                items: 5,
                createdAt: '30 June 2021',
                id: 3,
              },
              {
                supplierName: "Gina's Avacadoes",
                items: 2,
                createdAt: '29 June 2021',
                id: 4,
              },
            ]}
          />
        )}
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
