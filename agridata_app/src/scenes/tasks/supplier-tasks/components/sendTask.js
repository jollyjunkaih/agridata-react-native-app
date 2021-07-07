import React, {useState, useContext, useEffect} from 'react';
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
import {API} from 'aws-amplify';
import {createInvoice, updateGoodsTask} from '../../../../graphql/mutations';
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);
const now = () => {
  const now = dayjs().format('DD-MM-YYYY');
  return now;
};

export const SendTaskList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.data}
        numColumns={1}
        renderItem={item => {
          return (
            <SendTask
              retailer={item.item.retailer}
              supplier={item.item.supplier}
              goods={item.item.items}
              createdAt={item.item.createdAt}
              deliverydate={item.item.deliveryDate}
              taskID={item.item.id}
            />
          );
        }}
        ListEmptyComponent={() => {
          return <View></View>;
        }}
      />
    </View>
  );
};

// Supplier create invoice
const SendTask = props => {
  const [sendTaskModal, setSendTaskModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setSendTaskModal(true)}
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
          {props.retailer.name}
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
          {props.goods.length} items
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
          Order Created:
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
          {dayjs(props.createdAt).add(8, 'hours').format('DD MM YYYY')}
        </Text>
      </View>
      <Modal isVisible={sendTaskModal}>
        <SendTaskModal
          taskID={props.taskID}
          goods={props.goods}
          retailer={props.retailer}
          createdAt={props.createdAt}
          deliverydate={props.deliverydate}
          setInvoiceModal={setInvoiceModal}
          setSendTaskModal={setSendTaskModal}></SendTaskModal>
      </Modal>
      <Modal isVisible={invoiceModal}>
        <InvoiceModal
          setInvoiceModal={setInvoiceModal}
          goods={props.goods}
          retailer={props.retailer}
          deliverydate={props.deliverydate}
          taskID={props.taskID}
          invoiceList={props}></InvoiceModal>
      </Modal>
    </TouchableOpacity>
  );
};

const SendTaskModal = props => {
  const [deliverydate, setDate] = useState(props.deliverydate);
  const [confirmedDate, setConfirmedDate] = useState(false);
  const [successfulModal, setSuccessfulModal] = useState(false);

  const Switch = () => {
    props.setInvoiceModal(true);
    console.log('before 3 sec');
    setTimeout(function () {
      props.setSendTaskModal(false);
      console.log('after 3 sec');
    }, 300);
  };

  const updateDeliveryDate = async () => {
    try {
      const response = await API.graphql({
        query: updateGoodsTask,
        variables: {
          input: {
            id: props.taskID,
            deliveryDate: dayjs(deliverydate, 'DD-MM-YYYY'),
          },
        },
      });
      setConfirmedDate(true);
      setSuccessfulModal(true);
    } catch (e) {
      console.log(e);
    }
  };

  var sum = 0;
  var tempList = props.goods.forEach((item, index, array) => {
    var product = item.price * item.quantity;
    sum = sum + product;
  });
  console.log(sum);

  return (
    <SafeAreaView style={{height: hp('100%'), width: wp('100%')}}>
      <View
        style={{
          width: wp('90%'),
          height: hp('80%'),
          top: hp('10%'),
          backgroundColor: Colors.GRAY_WHITE,
          borderRadius: 10,
        }}>
        <View
          style={{
            position: 'absolute',
            right: wp('1%'),
            top: hp('1%'),
          }}>
          <CloseButton setModal={props.setSendTaskModal} />
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
          Order Created
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
          Order #{props.taskID.slice(0, 6)}
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
          {dayjs(props.createdAt).add(8, 'hour').format('DD MMMM, YYYY')}
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
              top: hp('19%'),
              left: wp('8%'),
            },
          ]}>
          Items:
        </Text>
        <View
          style={{
            position: 'absolute',
            top: hp('23%'),
            left: wp('8%'),
            width: wp('75%'),
            height: hp('24%'),
            backgroundColor: 'red',
          }}>
          <ProductList data={props.goods}></ProductList>
        </View>
        <Text
          style={[
            Typography.placeholder,
            {
              position: 'absolute',
              top: hp('50%'),
              left: wp('55%'),
            },
          ]}>
          Total: RM {sum}
        </Text>
        <Text
          style={[
            Typography.placeholder,
            {
              position: 'absolute',
              top: hp('55%'),
              left: wp('8%'),
            },
          ]}>
          Delivery Date:
        </Text>
        {confirmedDate || props.deliverydate != null ? (
          <View>
            <Text
              style={[
                Typography.small,
                {
                  position: 'absolute',
                  top: hp('55%'),
                  left: wp('35%'),
                },
              ]}>
              {dayjs(deliverydate).format('DD-MM-YYYY')}
            </Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: hp('55%'),
                left: wp('57%'),
                elevation: 5,
              }}
              onPress={item => setConfirmedDate(false)}>
              <Icon name="pencil-outline" size={wp('5%')} />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <DatePicker
              style={{
                backgroundColor: Colors.GRAY_WHITE,
                borderColor: 'black',
                borderRadius: 20,
                width: wp('40%'),
                height: hp('6%'),
                elevation: 2,
                position: 'absolute',
                top: hp('53%'),
                left: wp('35%'),
                justifyContent: 'center',
              }}
              customStyles={{
                dateInput: {
                  position: 'absolute',
                  right: wp('6%'),
                  textAlignVertical: 'center',
                  borderColor: 'transparent',
                },
                dateIcon: {
                  position: 'absolute',
                  left: wp('3%'),
                  height: hp('5%'),
                  width: wp('7%'),
                },
                dateText: {fontSize: hp('2%')},
              }}
              format="DD-MM-YYYY"
              placeholder="Pick a date"
              showIcon={true}
              minDate={now()}
              date={deliverydate}
              onDateChange={item => setDate(item)}
              androidMode="spinner"></DatePicker>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: hp('55%'),
                left: wp('78%'),
                elevation: 5,
              }}
              onPress={item => updateDeliveryDate()}>
              <Icon name="checkmark-outline" size={wp('5%')} />
            </TouchableOpacity>
          </View>
        )}
        <Text
          style={[
            Typography.placeholder,
            {
              position: 'absolute',
              top: hp('60%'),
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
              top: hp('60%'),
              left: wp('35%'),
            },
          ]}>
          {props.retailer.name}
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
            bottom: hp('8%'),
            borderRadius: 10,
          }}
          onPress={() => {
            Switch();
          }}>
          <Text style={[Typography.normal, {textAlign: 'center'}]}>
            Create Invoice
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={successfulModal}
        onBackdropPress={() => setSuccessfulModal(false)}>
        <SuccessfulModal />
      </Modal>
    </SafeAreaView>
  );
};

const InvoiceModal = props => {
  const [itemList, setItemList] = useState(props.goods);
  const [toggle, setToggle] = useState(false);
  const [sum, setSum] = useState(0);
  var tempSum = 0;
  useEffect(() => {
    console.log(itemList);
    var tempList = itemList.forEach((item, index, array) => {
      var product = parseInt(item.price * item.quantity * 100) / 100;
      tempSum = tempSum + product;
    });
    console.log(tempSum);
    setSum(tempSum);
  }, [itemList, toggle]);

  const createInvoice = () => {};

  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          borderBottomWidth: 1,
          width: wp('95%'),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
    );
  };
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
        <CloseButton setModal={props.setInvoiceModal} />
      </View>
      <Text
        style={[
          Typography.header,
          {
            position: 'absolute',
            top: hp('5%'),
            left: wp('5%'),
          },
        ]}>
        Invoice {props.taskID.slice(0, 6)}
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: wp('5%'),
            top: hp('6%'),
          },
        ]}>
        {dayjs().format('DD-MMM-YYYY')}
      </Text>
      <Text
        style={
          ([Typography.normal],
          {
            position: 'absolute',
            top: hp('9%'),
            left: wp('5%'),
          })
        }>
        {props.retailer.name}
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: wp('80%'),
          alignSelf: 'center',
          top: hp('14%'),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <View style={{top: hp('15%')}}>
        <View
          style={{
            width: wp('90%'),
            maxHeight: hp('50%'),
          }}>
          <FlatList
            keyExtractor={item => item.id}
            data={props.goods}
            numColumns={1}
            ItemSeparatorComponent={Seperator}
            renderItem={({item}) => {
              return (
                <InvoiceItem
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  amount={item.quantity}
                  grade={item.grade}
                  variety={item.variety}
                  siUnit={item.siUnit}
                  setItemList={setItemList}
                  itemList={itemList}
                />
              );
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (toggle) {
              setToggle(false);
            } else {
              setToggle(true);
            }
          }}>
          <Text
            style={[
              Typography.normal,
              {
                fontFamily: 'Poppins-SemiBold',
                right: wp('5%'),
                marginTop: hp('1%'),
                textAlign: 'right',
              },
            ]}>
            TOTAL: RM {sum}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => createInvoice()}
        style={{
          position: 'absolute',
          backgroundColor: Colors.LIGHT_BLUE,
          width: wp('35%'),
          height: hp('5%'),
          bottom: hp('5%'),
          right: wp('5%'),
          elevation: 3,
          borderRadius: 10,
          justifyContent: 'center',
        }}>
        <Text style={[Typography.normal, {left: wp('5%')}]}>
          Create Invoice
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const InvoiceItem = props => {
  const [quantity, setQuantity] = useState(props.quantity.toString());
  const updateQuantity = item2 => {
    var tempList = props.itemList;
    tempList.forEach((item, index, array) => {
      if (
        item.name == props.name &&
        item.grade == props.grade &&
        item.price == props.price &&
        item.variety == props.variety
      ) {
        item['quantity'] = parseFloat(item2);
        array[index] = item;
      }
    });
    console.log('updating quantity to the list');
    props.setItemList(tempList);
    setQuantity(item2);
  };
  return (
    <View
      style={{
        width: wp('85%'),
        height: hp('5%'),
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <Text style={[Typography.small, {position: 'absolute', left: wp('4%')}]}>
        {props.name}
      </Text>
      <TextInput
        style={[
          Typography.small,
          {position: 'absolute', left: wp('30%'), height: hp('10%')},
        ]}
        onChangeText={item => updateQuantity(item)}
        value={quantity}
        keyboardType="numeric"
      />
      <Text style={[Typography.small, {position: 'absolute', left: wp('40%')}]}>
        kg
      </Text>
      <Text style={[Typography.small, {position: 'absolute', left: wp('45%')}]}>
        @ RM {props.price}/{props.siUnit}
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            right: wp('4%'),
          },
        ]}>
        RM {parseInt(props.price * parseFloat(quantity) * 100) / 100}
      </Text>
    </View>
  );
};

const ProductList = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          alignSelf: 'center',
          width: wp('70%'),
        }}></View>
    );
  };
  return (
    <View>
      <FlatList
        numColumns={1}
        data={props.data}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return (
            <Product
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              grade={item.grade}
              variety={item.variety}
              siUnit={item.siUnit}
            />
          );
        }}></FlatList>
    </View>
  );
};

const Product = props => {
  return (
    <View
      style={{
        height: hp('3%'),
        width: wp('70%'),
        justifyContent: 'center',
      }}>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            position: 'absolute',
          },
        ]}>
        {props.name}
      </Text>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            left: wp('20%'),
            position: 'absolute',
          },
        ]}>
        | {props.quantity}
        {props.siUnit}
      </Text>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            left: wp('33%'),
            position: 'absolute',
          },
        ]}>
        @ RM {props.price}/{props.siUnit}
      </Text>
    </View>
  );
};

const SuccessfulModal = props => {
  return (
    <View
      style={{
        height: hp('50%'),
        width: wp('85%'),
        backgroundColor: Colors.PALE_GREEN,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <View style={{top: hp('2%')}}>
        <Image
          source={require('_assets/images/Good-Vege.png')}
          style={{
            resizeMode: 'contain',
            width: wp('55%'),
            height: hp('25%'),
          }}
        />
      </View>
      <View style={{top: hp('2%')}}>
        <Text style={[Typography.header]}>SUCCESS!</Text>
      </View>
      <View style={{width: wp('70%'), top: hp('4%')}}>
        <Text
          style={[
            {textAlign: 'center', lineHeight: wp('3%')},
            Typography.small,
          ]}>
          You have successfully added your crops! We'll send you a notification
          as soon as retailers buy your produce!
        </Text>
      </View>
      <View style={{width: wp('50%'), top: hp('8%')}}>
        <Text
          style={[
            {textAlign: 'center', lineHeight: hp('3%')},
            Typography.small,
          ]}>
          Keep adding for more!
        </Text>
      </View>
    </View>
  );
};
