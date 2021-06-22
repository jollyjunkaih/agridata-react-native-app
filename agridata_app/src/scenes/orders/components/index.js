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
import {InvoiceButton} from '_components';

export const OrderList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.OrderList}
        numColumns={1}
        renderItem={item => {
          return <Order user={item.name} />;
        }}
      />
    </View>
  );
};

const Order = props => {
  const [invoiceModal, setInvoiceModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setInvoiceModal(true)}
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
            <Icon name="clipboard-outline" size={Mixins.scaleWidth(40)} />
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: 0,
            height: Mixins.scaleHeight(50),
            borderRightWidth: 1,
            borderColor: Colors.GRAY_DARK,
          }}></View>
        <View
          style={{
            justifyContent: 'center',
            width: Mixins.scaleWidth(180),
          }}>
          <Text
            style={[
              Typography.small,
              {fontFamily: 'Poppins-SemiBold', left: Mixins.scaleWidth(40)},
            ]}>
            {'\u26AC'} XXXXXXXXXXXX
          </Text>
          <Text style={[Typography.small, {left: Mixins.scaleWidth(40)}]}>
            {'\u26AC'} Company Name
            {'\n'}
            {'\u26AC'} Date
            {'\n'}
            {'\u26AC'} Invoice Amount
            {'\n'}
          </Text>
        </View>
      </View>
      <Modal isVisible={invoiceModal}>
        <InvoiceModal setInvoiceModal={setInvoiceModal} invoiceList={props} />
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

const InvoiceModal = props => {
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
        <CloseButton setModal={props.setInvoiceModal} />
      </View>
      <Text
        style={[
          Typography.header,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(30),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Invoice NUMXXXX
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: Mixins.scaleWidth(20),
            top: Mixins.scaleHeight(35),
          },
        ]}>
        DD-MM-YY
      </Text>
      <Text
        style={
          ([Typography.normal],
          {
            position: 'absolute',
            top: Mixins.scaleHeight(55),
            left: Mixins.scaleWidth(20),
          })
        }>
        Company Name
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: Mixins.scaleWidth(250),
          alignSelf: 'center',
          top: Mixins.scaleHeight(80),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <View style={{top: Mixins.scaleHeight(90)}}>
        <View
          style={{
            width: Mixins.scaleWidth(320),
            maxHeight: Mixins.scaleHeight(320),
          }}>
          <FlatList
            keyExtractor={item => item.id}
            data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
            numColumns={1}
            ItemSeparatorComponent={Seperator}
            renderItem={item => {
              return <InvoiceItem user={item.name} />;
            }}
          />
        </View>
        <Text
          style={[
            Typography.normal,
            {
              fontFamily: 'Poppins-SemiBold',
              left: Mixins.scaleWidth(200),
              marginTop: Mixins.scaleHeight(10),
            },
          ]}>
          TOTAL: RM XXX
        </Text>
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(85),
          height: Mixins.scaleHeight(30),
          bottom: Mixins.scaleHeight(30),
          right: Mixins.scaleHeight(20),
          elevation: 3,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={[Typography.normal, {left: Mixins.scaleWidth(15)}]}>
          PDF
        </Text>
        <View style={{position: 'absolute', right: Mixins.scaleWidth(15)}}>
          <Icon name="cloud-download-outline" size={Mixins.scaleWidth(20)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: Colors.PALE_GREEN,
          width: Mixins.scaleWidth(85),
          height: Mixins.scaleHeight(30),
          bottom: Mixins.scaleHeight(30),
          right: Mixins.scaleHeight(120),
          elevation: 3,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={[Typography.normal, {left: Mixins.scaleWidth(15)}]}>
          CSV
        </Text>
        <View style={{position: 'absolute', right: Mixins.scaleWidth(15)}}>
          <Icon name="cloud-download-outline" size={Mixins.scaleWidth(20)} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const InvoiceItem = props => {
  return (
    <View
      style={{
        width: Mixins.scaleWidth(300),
        height: Mixins.scaleHeight(35),
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={[
          Typography.small,
          {position: 'absolute', left: Mixins.scaleWidth(10)},
        ]}>
        Product Name
      </Text>
      <Text
        style={[
          Typography.small,
          {position: 'absolute', left: Mixins.scaleWidth(100)},
        ]}>
        |XXXkg
      </Text>
      <Text
        style={[
          Typography.small,
          {position: 'absolute', left: Mixins.scaleWidth(145)},
        ]}>
        @ RM8/kg
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            right: Mixins.scaleWidth(10),
            fontFamily: 'Poppins-SemiBold',
          },
        ]}>
        RM XXX
      </Text>
    </View>
  );
};
