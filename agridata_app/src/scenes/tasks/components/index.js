import React, {useState, useContext} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  FlatList,
  Text,
  Image,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {CloseButton} from '_components';
import DatePicker from 'react-native-datepicker';
import dayjs from 'dayjs';

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
  return (
    <TouchableOpacity
      onPress={() => setSendTaskModal(true)}
      style={{
        marginBottom: 10,
        width: Mixins.scaleWidth(305),
        height: Mixins.scaleHeight(80),
      }}>
      <View
        style={{
          backgroundColor: Colors.GRAY_LIGHT,
          borderRadius: 10,
          flexDirection: 'row',
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(80),
          elevation: 5,
        }}>
        <View
          style={{
            backgroundColor: Colors.GRAY_BLACK,
            height: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(16),
            borderRadius: 10,
          }}></View>
        <View
          style={{
            backgroundColor: Colors.GRAY_LIGHT,
            height: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(80),
            right: Mixins.scaleWidth(8),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{bottom: Mixins.scaleHeight(3)}}>
            <Icon name="cube-outline" size={Mixins.scaleWidth(40)} />
          </View>
        </View>
        <Text
          style={[
            Typography.normal,
            {
              color: Colors.LIME_GREEN,
              top: Mixins.scaleHeight(20),
              left: Mixins.scaleWidth(90),
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
              top: Mixins.scaleHeight(45),
              left: Mixins.scaleWidth(90),
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
              top: Mixins.scaleHeight(40),
              right: Mixins.scaleWidth(10),
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
              top: Mixins.scaleHeight(50),
              right: Mixins.scaleWidth(10),
              position: 'absolute',
              fontStyle: 'italic',
            },
          ]}>
          30 June,2021
        </Text>
      </View>
      <Modal isVisible={sendTaskModal}>
        <SendTaskModal
          setSendTaskModal={setSendTaskModal}
          sendTaskList={props}></SendTaskModal>
      </Modal>
    </TouchableOpacity>
  );
};

export const SortModal = props => {
  return (
    <View
      style={{
        position: 'absolute',
        right: Mixins.scaleWidth(30),
        top: Mixins.scaleHeight(115),
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: 20,
        width: Mixins.scaleWidth(180),
        height: Mixins.scaleHeight(105),
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: Mixins.scaleWidth(170),
          height: Mixins.scaleHeight(20),
          borderRadius: 20,
          marginHorizontal: Mixins.scaleWidth(5),
          marginTop: Mixins.scaleHeight(5),
        }}>
        <View style={{left: Mixins.scaleWidth(15), flexDirection: 'row'}}>
          <Icon name="time-outline" size={Mixins.scaleWidth(20)} />
          <Icon name="arrow-up-outline" size={Mixins.scaleWidth(13)} />
        </View>
        <Text style={[Typography.normal, {left: Mixins.scaleWidth(25)}]}>
          From Oldest
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: Mixins.scaleWidth(170),
          height: Mixins.scaleHeight(20),
          borderRadius: 20,
          marginHorizontal: Mixins.scaleWidth(5),
          marginTop: Mixins.scaleHeight(5),
        }}>
        <View style={{left: Mixins.scaleWidth(15), flexDirection: 'row'}}>
          <Icon name="time-outline" size={Mixins.scaleWidth(20)} />
          <Icon name="arrow-down-outline" size={Mixins.scaleWidth(13)} />
        </View>
        <Text style={[Typography.normal, {left: Mixins.scaleWidth(25)}]}>
          From Newest
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: Mixins.scaleWidth(170),
          height: Mixins.scaleHeight(20),
          borderRadius: 20,
          marginHorizontal: Mixins.scaleWidth(5),
          marginTop: Mixins.scaleHeight(5),
        }}>
        <View style={{left: Mixins.scaleWidth(15), flexDirection: 'row'}}>
          <Icon name="pricetags-outline" size={Mixins.scaleWidth(20)} />
          <Icon name="arrow-up-outline" size={Mixins.scaleWidth(13)} />
        </View>
        <Text style={[Typography.normal, {left: Mixins.scaleWidth(25)}]}>
          From Cheapest
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: Mixins.scaleWidth(170),
          height: Mixins.scaleHeight(20),
          borderRadius: 20,
          marginHorizontal: Mixins.scaleWidth(5),
          marginTop: Mixins.scaleHeight(5),
        }}>
        <View style={{left: Mixins.scaleWidth(15), flexDirection: 'row'}}>
          <Icon name="pricetags-outline" size={Mixins.scaleWidth(20)} />
          <Icon name="arrow-down-outline" size={Mixins.scaleWidth(13)} />
        </View>
        <Text style={[Typography.normal, {left: Mixins.scaleWidth(25)}]}>
          From Priciest
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const SendTaskModal = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          borderBottomWidth: 1,
          width: Mixins.scaleWidth(340),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
    );
  };
  return (
    <View
      style={{
        width: Mixins.scaleWidth(320),
        height: Mixins.scaleHeight(520),
        backgroundColor: Colors.GRAY_WHITE,
        borderRadius: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-10),
          top: Mixins.scaleHeight(-10),
        }}>
        <CloseButton setModal={props.setSendTaskModal} />
      </View>
      <Text
        style={[
          Typography.normal,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(50),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        Sunday
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: Mixins.scaleWidth(20),
            top: Mixins.scaleHeight(50),
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
            top: Mixins.scaleHeight(70),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        30th June, 2021
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: Mixins.scaleWidth(280),
          alignSelf: 'center',
          top: Mixins.scaleHeight(115),
          borderColor: Colors.GRAY_MEDIUM,
          position: 'absolute',
        }}></View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(135),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        Items:
      </Text>
      <View
        style={{
          position: 'absolute',
          top: Mixins.scaleHeight(135),
          left: Mixins.scaleWidth(120),
        }}>
        <ProductList></ProductList>
      </View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(250),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        Delivery Date:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(252),
            left: Mixins.scaleWidth(130),
          },
        ]}>
        1:30 PM Fri, 4 July
        <DatePicker
          style={{
            backgroundColor: 'white',
            borderColor: 'black',
            borderRadius: 20,
            width: Mixins.scaleWidth(140),
            height: Mixins.scaleHeight(40),
            top: Mixins.scaleHeight(-5),
            elevation: 2,
            left: Mixins.scaleWidth(33),
            justifyContent: 'center',
          }}
          customStyles={{
            dateInput: {
              position: 'absolute',
              right: Mixins.scaleWidth(20),
              textAlignVertical: 'center',
              borderColor: 'transparent',
            },
            dateIcon: {
              position: 'absolute',
              left: Mixins.scaleWidth(10),
              height: Mixins.scaleHeight(25),
              width: Mixins.scaleHeight(25),
            },
            dateText: {fontSize: Mixins.scaleFont(14)},
          }}
          format="DD-MM-YYYY"
          showIcon={true}
          minDate={now()}
          date={deliverydate}
          onDateChange={item => setDate(item)}
          androidMode="spinner"></DatePicker>
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(330),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        Buyer:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(330),
            left: Mixins.scaleWidth(130),
          },
        ]}>
        City Grocer
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(100),
          height: Mixins.scaleHeight(30),
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 5,
          position: 'absolute',
          bottom: Mixins.scaleHeight(50),
          borderRadius: 10,
        }}>
        <Text style={[Typography.normal, {textAlign: 'center'}]}>
          Create Invoice
        </Text>
      </TouchableOpacity>
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
          width: Mixins.scaleWidth(260),
        }}></View>
    );
  };
  return (
    <View>
      <FlatList
        numColumns={1}
        data={[{name: '1'}, {name: '1'}, {name: '1'}, {name: '1'}]}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return <Product name={item.name} />;
        }}></FlatList>
    </View>
  );
};

const Product = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(20),
        width: Mixins.scaleWidth(260),
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
        Product
      </Text>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            left: Mixins.scaleWidth(65),
            position: 'absolute',
          },
        ]}>
        | 300kg
      </Text>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            left: Mixins.scaleWidth(120),
            position: 'absolute',
          },
        ]}>
        @ RM 8/kg
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
        marginBottom: 10,
        width: Mixins.scaleWidth(305),
        height: Mixins.scaleHeight(80),
      }}>
      <View
        style={{
          backgroundColor: Colors.GRAY_LIGHT,
          borderRadius: 10,
          flexDirection: 'row',
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(80),
          elevation: 5,
        }}>
        <View
          style={{
            backgroundColor: Colors.GRAY_BLACK,
            height: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(16),
            borderRadius: 10,
          }}></View>
        <View
          style={{
            backgroundColor: Colors.GRAY_LIGHT,
            height: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(80),
            right: Mixins.scaleWidth(8),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{bottom: Mixins.scaleHeight(3)}}>
            <Icon name="cash-outline" size={Mixins.scaleWidth(40)} />
          </View>
        </View>
        <Text
          style={[
            Typography.normal,
            {
              color: Colors.LIME_GREEN,
              top: Mixins.scaleHeight(20),
              left: Mixins.scaleWidth(90),
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
              top: Mixins.scaleHeight(45),
              left: Mixins.scaleWidth(90),
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
              top: Mixins.scaleHeight(40),
              right: Mixins.scaleWidth(10),
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
              top: Mixins.scaleHeight(50),
              right: Mixins.scaleWidth(10),
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
        width: Mixins.scaleWidth(320),
        height: Mixins.scaleHeight(520),
        backgroundColor: Colors.GRAY_WHITE,
        borderRadius: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-10),
          top: Mixins.scaleHeight(-10),
        }}>
        <CloseButton setModal={props.setReceiveTaskModal} />
      </View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(45),
            right: Mixins.scaleWidth(20),
          },
        ]}>
        11:00 AM
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: Mixins.scaleWidth(20),
            top: Mixins.scaleHeight(65),
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
            top: Mixins.scaleHeight(35),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Payment Alert
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: Mixins.scaleWidth(280),
          alignSelf: 'center',
          top: Mixins.scaleHeight(115),
          borderColor: Colors.GRAY_MEDIUM,
          position: 'absolute',
        }}></View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(150),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Payment From:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(150),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        CITY GROCER
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(180),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Order #:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(180),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        #12345
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(210),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Date of Payment:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(210),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        22 July, 2021
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(240),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Bank:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(240),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        MayBank
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(270),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Reference #:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(270),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        9065 7756 8989
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(120),
          height: Mixins.scaleHeight(40),
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 5,
          position: 'absolute',
          bottom: Mixins.scaleHeight(50),
          borderRadius: 10,
        }}>
        <Text style={[Typography.normal, {textAlign: 'center'}]}>
          Received{'\t\t'}
          <Icon
            name="checkmark-circle-outline"
            size={Mixins.scaleWidth(20)}></Icon>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

//Retailer receive
const ReceiveModal = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          borderBottomWidth: 1,
          width: Mixins.scaleWidth(340),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
    );
  };
  return (
    <View
      style={{
        width: Mixins.scaleWidth(320),
        height: Mixins.scaleHeight(520),
        backgroundColor: Colors.GRAY_WHITE,
        borderRadius: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-10),
          top: Mixins.scaleHeight(-10),
        }}>
        <CloseButton setModal={props.setReceiveModal} />
      </View>
      <Text
        style={[
          Typography.normal,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(50),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        Sunday
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: Mixins.scaleWidth(20),
            top: Mixins.scaleHeight(50),
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
            top: Mixins.scaleHeight(70),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        30th June, 2021
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: Mixins.scaleWidth(280),
          alignSelf: 'center',
          top: Mixins.scaleHeight(115),
          borderColor: Colors.GRAY_MEDIUM,
          position: 'absolute',
        }}></View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(135),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        Items:
      </Text>
      <View
        style={{
          position: 'absolute',
          top: Mixins.scaleHeight(135),
          left: Mixins.scaleWidth(120),
        }}>
        <ProductList></ProductList>
      </View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(250),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        Delivery Date:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(252),
            left: Mixins.scaleWidth(130),
          },
        ]}>
        1:30 PM Fri, 4 July
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(330),
            left: Mixins.scaleWidth(30),
          },
        ]}>
        Buyer:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(330),
            left: Mixins.scaleWidth(130),
          },
        ]}>
        City Grocer
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(150),
          height: Mixins.scaleHeight(30),
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 5,
          position: 'absolute',
          bottom: Mixins.scaleHeight(50),
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
          <Icon
            name="checkmark-circle-outline"
            size={Mixins.scaleWidth(20)}></Icon>
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
        marginBottom: 10,
        width: Mixins.scaleWidth(305),
        height: Mixins.scaleHeight(80),
      }}>
      <View
        style={{
          backgroundColor: Colors.GRAY_LIGHT,
          borderRadius: 10,
          flexDirection: 'row',
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(80),
          elevation: 5,
        }}>
        <View
          style={{
            backgroundColor: Colors.GRAY_BLACK,
            height: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(16),
            borderRadius: 10,
          }}></View>
        <View
          style={{
            backgroundColor: Colors.GRAY_LIGHT,
            height: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(80),
            right: Mixins.scaleWidth(8),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{bottom: Mixins.scaleHeight(3)}}>
            <Icon name="cube-outline" size={Mixins.scaleWidth(40)} />
          </View>
        </View>
        <Text
          style={[
            Typography.normal,
            {
              color: Colors.LIME_GREEN,
              top: Mixins.scaleHeight(20),
              left: Mixins.scaleWidth(90),
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
              top: Mixins.scaleHeight(45),
              left: Mixins.scaleWidth(90),
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
              top: Mixins.scaleHeight(40),
              right: Mixins.scaleWidth(10),
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
              top: Mixins.scaleHeight(50),
              right: Mixins.scaleWidth(10),
              position: 'absolute',
              fontStyle: 'italic',
            },
          ]}>
          30 June,2021
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
        renderItem={item => {
          return <Receive user={item.name} />;
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
        width: Mixins.scaleWidth(320),
        height: Mixins.scaleHeight(520),
        backgroundColor: Colors.GRAY_WHITE,
        borderRadius: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-10),
          top: Mixins.scaleHeight(-10),
        }}>
        <CloseButton setModal={props.setUploadReceiptModal} />
      </View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(70),
            right: Mixins.scaleWidth(20),
          },
        ]}>
        11:00 AM
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: Mixins.scaleWidth(20),
            top: Mixins.scaleHeight(85),
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
            top: Mixins.scaleHeight(35),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Payment Alert
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: Mixins.scaleWidth(280),
          alignSelf: 'center',
          top: Mixins.scaleHeight(115),
          borderColor: Colors.GRAY_MEDIUM,
          position: 'absolute',
        }}></View>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(150),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Payment From:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(150),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        CITY GROCER
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(180),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Order #:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(180),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        #12345
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(210),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Date of Payment:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(210),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        22 July, 2021
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(240),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Bank:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(240),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        MayBank
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(270),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Reference #:
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(270),
            left: Mixins.scaleWidth(150),
          },
        ]}>
        9065 7756 8989
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(180),
          height: Mixins.scaleHeight(30),
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 5,
          position: 'absolute',
          bottom: Mixins.scaleHeight(50),
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
            size={Mixins.scaleWidth(20)}
            style={{left: Mixins.scaleWidth(20)}}
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
        marginBottom: 10,
        width: Mixins.scaleWidth(305),
        height: Mixins.scaleHeight(80),
      }}>
      <View
        style={{
          backgroundColor: Colors.GRAY_LIGHT,
          borderRadius: 10,
          flexDirection: 'row',
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(80),
          elevation: 5,
        }}>
        <View
          style={{
            backgroundColor: Colors.GRAY_BLACK,
            height: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(16),
            borderRadius: 10,
          }}></View>
        <View
          style={{
            backgroundColor: Colors.GRAY_LIGHT,
            height: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(80),
            right: Mixins.scaleWidth(8),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{bottom: Mixins.scaleHeight(3)}}>
            <Icon name="cash-outline" size={Mixins.scaleWidth(40)} />
          </View>
        </View>
        <Text
          style={[
            Typography.normal,
            {
              color: Colors.LIME_GREEN,
              top: Mixins.scaleHeight(20),
              left: Mixins.scaleWidth(90),
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
              top: Mixins.scaleHeight(45),
              left: Mixins.scaleWidth(90),
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
              top: Mixins.scaleHeight(40),
              right: Mixins.scaleWidth(10),
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
              top: Mixins.scaleHeight(50),
              right: Mixins.scaleWidth(10),
              position: 'absolute',
              fontStyle: 'italic',
            },
          ]}>
          30 June,2021
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
        renderItem={item => {
          return <UploadReceipt user={item.name} />;
        }}
      />
    </View>
  );
};
