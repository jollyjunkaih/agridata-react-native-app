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
import {API} from 'aws-amplify';
import {
  createMessage,
  deleteChatGroupUsers,
  updateChatGroup,
} from '../../../../graphql/mutations';
import {listUsersInChat} from '../../../../graphql/queries';

import {abs, set} from 'react-native-reanimated';
import {DismissKeyboardView} from '_components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';
import {OrderQuotationModal} from './order-quotation';
import {PurchaseOrder} from './purchase-order';
import {ProductInquiry2} from './product-inquiry';

export const ChatBubble = props => {
  const [orderQuotationModal, setOrderQuotationModal] = useState(false);
  const [purchaseOrderModal, setPurchaseOrderModal] = useState(false);
  const [productInquiry, setProductInquiry] = useState(false);

  console.log(props);
  const getInitials = name => {
    if (name) {
      let initials = name.split(' ');

      if (initials.length > 1) {
        initials = initials.shift().charAt(0) + initials.pop().charAt(0);
      } else {
        initials = name.substring(0, 2);
      }

      return initials.toUpperCase();
    } else {
      return null;
    }
  };

  //const createdAt = dayjs(props.createdAt).add(8, 'hour').format('HH:mm D/M');
  const isMyMessage = () => {
    if (props.sender == 'me') return true;
    else return false;
  };
  const contentType = props.contentType;
  if (contentType == 'text') {
    return (
      <View style={{margin: wp('2%')}}>
        {!isMyMessage() && (
          <View
            style={{
              top: hp('5%'),
              borderColor: 'white',
              borderWidth: 0.2,
              width: wp('8%'),
              height: wp('8%'),
              position: 'absolute',
              borderRadius: 100,
              justifyContent: 'center',
              backgroundColor: Colors.GRAY_WHITE,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text
              style={{
                color: Colors.GRAY_DARK,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {getInitials(props.sender)}
            </Text>
          </View>
        )}
        <View
          style={{
            backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_LIGHT,
            marginLeft: isMyMessage() ? wp('13%') : wp('2%'),

            borderRadius: 15,
            left: isMyMessage() ? wp('20%') : wp('9%'),
            width: isMyMessage() ? wp('60%') : wp('50%'),
          }}>
          <View style={{marginTop: hp('2%')}}>
            <Text style={[Typography.normal, {margin: wp('1%')}]}>
              {props.content}
            </Text>
            <Text
              style={[
                Typography.small,
                {alignSelf: 'flex-end', right: wp('3%')},
              ]}>
              createdAt
            </Text>
          </View>
        </View>
      </View>
    );
  } else if (contentType == 'inquiry') {
    return (
      <View>
        <View>
          {!isMyMessage() && (
            <View
              style={{
                left: wp('1%'),
                top: hp('8%'),
                borderColor: 'white',
                borderWidth: 0.2,
                width: wp('8%'),
                height: wp('8%'),
                position: 'absolute',
                borderRadius: 100,
                justifyContent: 'center',
                backgroundColor: Colors.GRAY_WHITE,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Text
                style={{
                  color: Colors.GRAY_DARK,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {getInitials(props.sender)}
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_MEDIUM,
            width: wp('50%'),
            height: hp('13%'),
            marginLeft: isMyMessage() ? wp('40%') : 0,
            marginRight: isMyMessage() ? 0 : wp('33%'),
            left: isMyMessage() ? 0 : wp('12%'),
            borderRadius: 15,
            marginTop: hp('1%'),
          }}>
          <Text style={[Typography.large]}>{Strings.productInquiry}</Text>

          <TouchableOpacity
            onPress={() => setProductInquiry(true)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: Colors.LIGHT_BLUE,
              width: wp('33%'),
              height: hp('3%'),
              top: hp('1%'),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={[Typography.small]}>{Strings.inspect}</Text>
          </TouchableOpacity>

          <Text
            style={[
              Typography.small,
              {
                alignSelf: 'flex-end',
                right: wp('3%'),
                top: hp('1.5%'),
              },
            ]}>
            createdAt
          </Text>
        </View>
        <Modal
          isVisible={productInquiry}
          onBackdropPress={() => setProductInquiry(false)}>
          <ProductInquiry2
            setProductInquiry={setProductInquiry}></ProductInquiry2>
        </Modal>
      </View>
    );
  } else if (contentType == 'po') {
    return (
      <View>
        <View>
          {!isMyMessage() && (
            <View
              style={{
                left: wp('1%'),
                top: hp('8%'),
                borderColor: 'white',
                borderWidth: 0.2,
                width: wp('8%'),
                height: wp('8%'),
                position: 'absolute',
                borderRadius: 100,
                justifyContent: 'center',
                backgroundColor: Colors.GRAY_WHITE,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Text
                style={{
                  color: Colors.GRAY_DARK,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {getInitials(props.sender)}
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_MEDIUM,
            width: wp('50%'),
            height: hp('13%'),
            marginLeft: isMyMessage() ? wp('40%') : 0,
            marginRight: isMyMessage() ? 0 : wp('33%'),
            left: isMyMessage() ? 0 : wp('12%'),
            borderRadius: 15,
            marginTop: hp('1%'),
          }}>
          <Text style={[Typography.large]}>{Strings.purchaseOrder}</Text>

          <TouchableOpacity
            onPress={() => setPurchaseOrderModal(true)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: Colors.LIGHT_BLUE,
              width: wp('33%'),
              height: hp('3%'),
              top: hp('1%'),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={[Typography.small]}>{Strings.inspect}</Text>
          </TouchableOpacity>

          <Text
            style={[
              Typography.small,
              {
                alignSelf: 'flex-end',
                right: wp('3%'),
                top: hp('1.5%'),
              },
            ]}>
            createdAt
          </Text>
        </View>
        <Modal
          isVisible={purchaseOrderModal}
          onBackdropPress={() => setPurchaseOrderModal(false)}>
          <PurchaseOrder
            setPurchaseOrderModal={setPurchaseOrderModal}></PurchaseOrder>
        </Modal>
      </View>
    );
  } else if (contentType == 'quotation') {
    return (
      <View>
        <View>
          {!isMyMessage() && (
            <View
              style={{
                left: wp('1%'),
                top: hp('8%'),
                borderColor: 'white',
                borderWidth: 0.2,
                width: wp('8%'),
                height: wp('8%'),
                position: 'absolute',
                borderRadius: 100,
                justifyContent: 'center',
                backgroundColor: Colors.GRAY_WHITE,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <Text
                style={{
                  color: Colors.GRAY_DARK,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {getInitials(props.sender)}
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_MEDIUM,
            width: wp('50%'),
            height: hp('13%'),
            marginLeft: isMyMessage() ? wp('40%') : 0,
            marginRight: isMyMessage() ? 0 : wp('33%'),
            left: isMyMessage() ? 0 : wp('12%'),
            borderRadius: 15,
            marginTop: hp('1%'),
          }}>
          <Text style={[Typography.large]}>{Strings.orderQuotation}</Text>

          <TouchableOpacity
            onPress={() => setOrderQuotationModal(true)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: Colors.LIGHT_BLUE,
              width: wp('33%'),
              height: hp('3%'),
              top: hp('1%'),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={[Typography.small]}>{Strings.inspect}</Text>
          </TouchableOpacity>

          <Text
            style={[
              Typography.small,
              {
                alignSelf: 'flex-end',
                right: wp('3%'),
                top: hp('1.5%'),
              },
            ]}>
            createdAt
          </Text>
        </View>
        <Modal
          isVisible={orderQuotationModal}
          onBackdropPress={() => setOrderQuotationModal(false)}>
          <OrderQuotationModal
            setOrderQuotationModal={
              setOrderQuotationModal
            }></OrderQuotationModal>
        </Modal>
      </View>
    );
  }
};

export const ChatBubbleList = props => {
  return (
    <View>
      <FlatList
        inverted={true}
        keyExtractor={item => item.id}
        data={[
          {
            sender: 'Jeremy',
            content: 'When do you want me to deliver?',
            type: 'text',
          },
          {
            sender: 'me',
            content: 'Tuesday can?',
            type: 'text',
          },
          {
            sender: 'May',
            content: 'When do you want me to deliver?',
            type: 'po',
          },
          {
            sender: 'me',
            content: 'May just sent the PO. Can check Jeremy? Got stock?',
            type: 'text',
          },
          {
            sender: 'Jeremy',
            content: 'Got. Give me one sec, i send u the quotation',
            type: 'text',
          },
          {
            sender: 'Jeremy',
            content: 'Got. Give me one sec, i send u the quotation',
            type: 'quotation',
          },
          {
            sender: 'May',
            content: 'Thanks, just what we were looking for',
            type: 'text',
          },
          {
            sender: 'May',
            content: 'Thanks, just what we were looking for',
            type: 'inquiry',
          },
        ].reverse()}
        numColumns={1}
        renderItem={item => {
          return (
            <ChatBubble
              sender={item.item.sender}
              content={item.item.content}
              senderID={item.item.senderID}
              createdAt={item.item.createdAt}
              userID={props.userID}
              contentType={item.item.type}
              contentID={item.item.uniqueContentID}
            />
          );
        }}
      />
    </View>
  );
};
