import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {SortModal} from '../components';
import {SendTaskList, ReceivePaymentTaskList} from './components';
import {NavBar} from '_components';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {API} from 'aws-amplify';
import {
  goodsTaskForSupplierByDate,
  paymentsTaskForSupplierByDate,
} from '../../../graphql/queries';
import Strings from '_utils';

export const SupplierTasks = props => {
  const [sendTask, setSendTask] = useState([]);
  const [claimTask, setClaimTask] = useState([]);
  const [sortModal, setSortModal] = useState(false);
  const [task, setTask] = useState('send');

  useEffect(() => {
    if (task == 'send') {
      getSendTask();
    } else if (task == 'claim') {
      getClaimTask();
    }
  }, [task]);
  const getSendTask = async () => {
    try {
      const task = await API.graphql({
        query: goodsTaskForSupplierByDate,
        variables: {
          supplierID: props.user.supplierCompanyID,
          sortDirection: 'ASC',
        },
      });
      setSendTask(task.data.goodsTaskForSupplierByDate.items);
      console.log(task.data.goodsTaskForSupplierByDate.items);
      console.log('goods task');
    } catch (e) {
      console.log(e);
    }
  };

  const getClaimTask = async () => {
    try {
      const task = await API.graphql({
        query: paymentsTaskForSupplierByDate,
        variables: {
          supplierID: props.user.supplierCompanyID,
          sortDirection: 'ASC',
        },
      });
      setClaimTask(task.data.paymentsTaskForSupplierByDate.items);
      console.log(task.data.paymentsTaskForSupplierByDate.items);
      console.log('payment task');
    } catch (e) {
      console.log(e);
    }
  };

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
        {task == 'send' ? (
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
              {Strings.send}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setTask('send')}
            style={{
              right: wp('15%'),
              top: hp('4%'),
            }}>
            <Text style={[Typography.normal]}>{Strings.send}</Text>
          </TouchableOpacity>
        )}
        {task == 'claim' ? (
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
              {Strings.claim}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => setTask('claim')}
            style={{
              top: hp('4%'),
              left: wp('15%'),
            }}>
            <Text style={[Typography.normal]}>{Strings.claim}</Text>
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
        {task == 'claim' ? (
          <ReceivePaymentTaskList data={claimTask} />
        ) : (
          <SendTaskList data={sendTask} />
        )}
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
