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

export const SortModal = props => {
  return (
    <View
      style={{
        position: 'absolute',
        right: wp('7%'),
        top: hp('15%'),
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: 5,
        width: wp('50%'),
        height: hp('16%'),
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: wp('47%'),
          height: hp('3.3%'),
          borderRadius: 20,
          marginHorizontal: wp('1.8%'),
          marginTop: hp('0.5%'),
        }}>
        <View style={{left: wp('3.5%'), flexDirection: 'row'}}>
          <Icon name="time-outline" size={wp('6%')} />
          <Icon name="arrow-up-outline" size={wp('4%')} />
        </View>
        <Text style={[Typography.normal, {left: wp('6%')}]}>From Oldest</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: wp('47%'),
          height: hp('3.3%'),
          borderRadius: 20,
          marginHorizontal: wp('1.8%'),
          marginTop: hp('0.5%'),
        }}>
        <View style={{left: wp('3.5%'), flexDirection: 'row'}}>
          <Icon name="time-outline" size={wp('6%')} />
          <Icon name="arrow-down-outline" size={wp('4%')} />
        </View>
        <Text style={[Typography.normal, {left: wp('6%')}]}>From Newest</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: wp('47%'),
          height: hp('3.3%'),
          borderRadius: 20,
          marginHorizontal: wp('1.8%'),
          marginTop: hp('0.5%'),
        }}>
        <View style={{left: wp('3.5%'), flexDirection: 'row'}}>
          <Icon name="pricetags-outline" size={wp('6%')} />
          <Icon name="arrow-up-outline" size={wp('4%')} />
        </View>
        <Text style={[Typography.normal, {left: wp('6%')}]}>From Cheapest</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: wp('47%'),
          height: hp('3.3%'),
          borderRadius: 20,
          marginHorizontal: wp('1.8%'),
          marginTop: hp('0.5%'),
        }}>
        <View style={{left: wp('3.5%'), flexDirection: 'row'}}>
          <Icon name="pricetags-outline" size={wp('6%')} />
          <Icon name="arrow-down-outline" size={wp('4%')} />
        </View>
        <Text style={[Typography.normal, {left: wp('6%')}]}>From Priciest</Text>
      </TouchableOpacity>
    </View>
  );
};
//Supplier receive payment

//Retailer receive
const ReceiveModal = props => {
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
        <CloseButton setModal={props.setReceiveModal} />
      </View>
      <Text
        style={[
          Typography.normal,
          {
            position: 'absolute',
            top: hp('7%'),
            left: wp('8%'),
          },
        ]}>
        Sunday
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: wp('7%'),
            top: hp('7%'),
            fontStyle: 'italic',
          },
        ]}>
        Order #12345
      </Text>
      <Text
        style={[
          Typography.header,
          {
            position: 'absolute',
            top: hp('11%'),
            left: wp('8%'),
          },
        ]}>
        30th June, 2021
      </Text>
      <View
        style={{
          borderBottomWidth: wp('1%'),
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
            top: hp('21%'),
            left: wp('8%'),
          },
        ]}>
        Items:
      </Text>
      <View
        style={{
          position: 'absolute',
          top: hp('21%'),
          left: wp('35%'),
        }}>
        <ProductList></ProductList>
      </View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: hp('40%'),
            left: wp('8%'),
          },
        ]}>
        Delivery Date:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: hp('40.3%'),
            left: wp('35%'),
          },
        ]}>
        1:30 PM Fri, 4 July
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: hp('52%'),
            left: wp('8%'),
          },
        ]}>
        Buyer:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: hp('52%'),
            left: wp('35%'),
          },
        ]}>
        City Grocer
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          width: wp('30%'),
          height: hp('5%'),
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 5,
          position: 'absolute',
          bottom: hp('8%'),
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}>
        <Text style={[Typography.normal, {textAlign: 'center'}]}>
          Receive{'\t\t'}
          <Icon name="checkmark-circle-outline" size={wp('5%')}></Icon>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Receive = props => {
  const [receiveModal, setReceiveModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setReceiveModal(true)}
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
            <Icon name="cube-outline" size={wp('11%')} />
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
          {props.supplierName}
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
          {props.items} items
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
          {props.createdAt}
        </Text>
      </View>
      <Modal isVisible={receiveModal}>
        <ReceiveModal
          setReceiveModal={setReceiveModal}
          receiveList={props}></ReceiveModal>
      </Modal>
    </TouchableOpacity>
  );
};

export const ReceiveList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.ReceiveList}
        numColumns={1}
        renderItem={({item}) => {
          return (
            <Receive
              createdAt={item.createdAt}
              items={item.items}
              supplierName={item.supplierName}
            />
          );
        }}
      />
    </View>
  );
};

//Retailer upload receipt
const UploadReceiptModal = props => {
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
        <CloseButton setModal={props.setUploadReceiptModal} />
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
          borderBottomWidth: wp('1%'),
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
        Payment To:
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
        Matthew's Farm
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
          width: wp('40%'),
          height: hp('5%'),
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 5,
          position: 'absolute',
          bottom: hp('10%'),
          borderRadius: 10,
          flexDirection: 'row',
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
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text style={[Typography.normal, {textAlign: 'center'}]}>
            Upload Receipt
          </Text>
          <Icon
            name="receipt-outline"
            size={wp('5%')}
            style={{left: wp('3%')}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const UploadReceipt = props => {
  const [uploadReceiptModal, setUploadReceiptModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setUploadReceiptModal(true)}
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
          {props.supplierName}
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
          {props.items} items
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
          {props.createdAt}
        </Text>
      </View>
      <Modal isVisible={uploadReceiptModal}>
        <UploadReceiptModal
          setUploadReceiptModal={setUploadReceiptModal}
          uploadReceiptList={props}></UploadReceiptModal>
      </Modal>
    </TouchableOpacity>
  );
};

export const UploadReceiptList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.UploadReceiptList}
        numColumns={1}
        renderItem={({item}) => {
          return (
            <UploadReceipt
              createdAt={item.createdAt}
              items={item.items}
              supplierName={item.supplierName}
            />
          );
        }}
      />
    </View>
  );
};
