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

export const SendTaskList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.SendTaskList}
        numColumns={1}
        renderItem={item => {
          return <SendTask user={item.name} />;
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
              top: hp('6.5%'),
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
      <Modal isVisible={sendTaskModal}>
        <SendTaskModal
          setInvoiceModal={setInvoiceModal}
          setSendTaskModal={setSendTaskModal}
          sendTaskList={props}></SendTaskModal>
      </Modal>
      <Modal isVisible={invoiceModal}>
        <InvoiceModal
          setInvoiceModal={setInvoiceModal}
          invoiceList={props}></InvoiceModal>
      </Modal>
    </TouchableOpacity>
  );
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

const SendTaskModal = props => {
  const [deliverydate, setDate] = useState(false);
  const [confirmedDate, setConfirmedDate] = useState(false);

  const Switch = () => {
    props.setInvoiceModal(true);
    console.log('before 3 sec');
    setTimeout(function () {
      props.setSendTaskModal(false);
      console.log('after 3 sec');
    }, 300);
  };
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
        {confirmedDate ? (
          <View>
            <Text
              style={[
                Typography.small,
                {
                  position: 'absolute',
                  top: hp('40%'),
                  left: wp('35%'),
                },
              ]}>
              {deliverydate}
            </Text>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: hp('40%'),
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
                top: hp('38%'),
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
                top: hp('39%'),
                left: wp('78%'),
                elevation: 5,
              }}
              onPress={item => setConfirmedDate(item)}>
              <Icon name="checkmark-outline" size={wp('5%')} />
            </TouchableOpacity>
          </View>
        )}
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
    </SafeAreaView>
  );
};

const InvoiceModal = props => {
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
        Invoice 12435
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
        30 June 2021
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
        Matthew's Farm
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
            data={[
              {productName: 'Ginger', quantity: 30, price: 20, amount: 600},
              {productName: 'Ginger', quantity: 30, price: 20, amount: 600},
              {productName: 'Ginger', quantity: 30, price: 20, amount: 600},
            ]}
            numColumns={1}
            ItemSeparatorComponent={Seperator}
            renderItem={({item}) => {
              return (
                <InvoiceItem
                  productName={item.productName}
                  quantity={item.quantity}
                  price={item.price}
                  amount={item.amount}
                />
              );
            }}
          />
        </View>
        <Text
          style={[
            Typography.normal,
            {
              fontFamily: 'Poppins-SemiBold',
              left: wp('60%'),
              marginTop: hp('1%'),
            },
          ]}>
          TOTAL: RM 3000
        </Text>
      </View>
      <TouchableOpacity
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
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View
      style={{
        width: wp('85%'),
        height: hp('5%'),
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <Text style={[Typography.small, {position: 'absolute', left: wp('4%')}]}>
        {props.productName}
      </Text>
      <TextInput
        style={[
          Typography.small,
          {position: 'absolute', left: wp('30%'), height: hp('10%')},
        ]}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="100"
        keyboardType="numeric"
      />
      <Text style={[Typography.small, {position: 'absolute', left: wp('40%')}]}>
        kg
      </Text>
      <Text style={[Typography.small, {position: 'absolute', left: wp('45%')}]}>
        @ RM8/kg
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            right: wp('4%'),
          },
        ]}>
        RM XXX
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
        data={[
          {productName: 'Guava', quantity: 20, price: 10},
          {productName: 'Pineapple', quantity: 40, price: 7},
          {productName: 'Avacado', quantity: 40, price: 10},
          {productName: 'Ginger', quantity: 20, price: 12},
        ]}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return (
            <Product
              productName={item.productName}
              quantity={item.quantity}
              price={item.price}
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
        {props.productName}
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
        | {props.quantity}kg
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
        @ RM {props.price}/kg
      </Text>
    </View>
  );
};

//Supplier receive payment

export const ReceivePaymentTaskList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.ReceiveTaskList}
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
              top: hp('6.5%'),
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
              top: hp('6.5%'),
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
              top: hp('6.5%'),
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
