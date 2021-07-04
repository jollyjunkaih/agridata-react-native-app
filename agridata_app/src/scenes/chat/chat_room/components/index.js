import React, {useState, useContext, useEffect} from 'react';
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
  createOrderQuotation,
  deleteChatGroupUsers,
  updateOrderQuotation,
  updateChatGroup,
} from '../../../../graphql/mutations';
import {listUsersInChat, purchaseOrderItems} from '../../../../graphql/queries';

var dayjs = require('dayjs');
import {DismissKeyboardView} from '_components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';
import DropDownPicker from 'react-native-dropdown-picker';

const ChatBubble = props => {
  const [orderQuotationModal, setOrderQuotationModal] = useState(false);
  const [purchaseOrderModal, setPurchaseOrderModal] = useState(false);
  const [inquiryModal, setInquiryModal] = useState(false);
  console.log("printing what's in the chat bubble (per render)");
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

  const createdAt = dayjs(props.createdAt).add(8, 'hour').format('HH:mm D/M');
  const isMyMessage = () => {
    if (props.senderID == props.userID) return true;
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
              {createdAt}
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
          <Text style={[Typography.large]}>Product Inquiry</Text>

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
            {createdAt}
          </Text>
        </View>
        <Modal
          isVisible={purchaseOrderModal}
          onBackdropPress={() => setPurchaseOrderModal(false)}>
          <PurchaseOrder
            chatName={props.chatName}
            chatGroupID={props.chatGroupID}></PurchaseOrder>
        </Modal>
      </View>
    );
  } else if (contentType == 'purchaseorder') {
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
            {createdAt}
          </Text>
        </View>
        <Modal isVisible={purchaseOrderModal}>
          <PurchaseOrder
            chatName={props.chatName}
            type={props.type}
            setPurchaseOrderModal={setPurchaseOrderModal}
            chatGroupID={props.chatGroupID}
            userID={props.userID}
            userName={props.userName}></PurchaseOrder>
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
          <Text style={[Typography.large]}>Order Quotation</Text>

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
            {createdAt}
          </Text>
        </View>
        <Modal
          isVisible={orderQuotationModal}
          onBackdropPress={() => setOrderQuotationModal(false)}>
          <OrderQuotationModal
            chatName={props.chatName}
            type={props.type}
            chatGroupID={props.chatGroupID}></OrderQuotationModal>
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
        data={props.data}
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
              chatName={props.chatName}
              chatGroupID={item.item.chatGroupID}
              type={props.type}
              userName={props.userName}
            />
          );
        }}
      />
    </View>
  );
};

export const MessageInput = props => {
  const [message, setMessage] = useState('');
  const createNewMessage = async () => {
    console.log('creating new message');
    try {
      const newMessage = await API.graphql({
        query: createMessage,
        variables: {
          input: {
            senderID: props.userID,
            chatGroupID: props.chatGroupID,
            sender: props.userName,
            type: 'text',
            content: message,
          },
        },
      });
      const updateChat = await API.graphql({
        query: updateChatGroup,
        variables: {
          input: {
            id: props.chatGroupID,
            mostRecentMessage: message,
            mostRecentMessageSender: props.user,
          },
        },
      });
      var messages = props.messages;
      messages = messages.reverse();
      messages.push(newMessage.data.createMessage);
      messages = messages.reverse();
      props.setMessages(messages);
      setMessage('');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View
        style={{
          height: hp('7%'),
          borderRadius: 40,
          backgroundColor: Colors.GRAY_LIGHT,

          justifyContent: 'center',
        }}>
        <TextInput
          placeholder={Strings.typeMessage}
          underlineColorAndroid={'transparent'}
          multiline={true}
          onChangeText={text => setMessage(text)}
          value={message}
          style={{
            width: wp('74%'),
            height: hp('5%'),
            borderBottomColor: 'transparent',
            marginHorizontal: wp('3%'),
            color: 'black',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (message.length > 0) {
            createNewMessage();
          }
        }}
        style={{
          height: hp('5.5%'),
          width: hp('5.5%'),
          borderRadius: 100,
          top: hp('1%'),
          left: wp('3%'),
          backgroundColor: Colors.PALE_BLUE,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Icon
          name="paper-plane-outline"
          size={wp('6%')}
          color={Colors.LIGHT_BLUE}
        />
      </TouchableOpacity>
    </View>
  );
};

export const ChatInfo = props => {
  const [chatInfoModal, setChatInfoModal] = useState(false);
  const [chatParticipants, setChatParticipants] = useState(null);
  const fetchChatParticipants = async () => {
    try {
      const products = await API.graphql({
        query: listUsersInChat,
        variables: {
          filter: {chatGroupID: {eq: props.chatGroupID}},
        },
      });
      console.log(products.data.listChatGroupUserss.items);
      if (products.data) {
        setChatParticipants(products.data.listChatGroupUserss.items);
      }
    } catch (e) {
      console.log(e);
      console.log("there's a problem");
    }
  };
  return (
    <TouchableOpacity
      onPress={async () => {
        await fetchChatParticipants();
        setChatInfoModal(true);
      }}>
      <Icon
        color={Colors.GRAY_DARK}
        name="information-circle-outline"
        size={wp('9%')}></Icon>
      <Modal
        isVisible={chatInfoModal}
        onBackdropPress={() => setChatInfoModal(false)}>
        <ChatInfoModal
          setChatInfoModal={setChatInfoModal}
          chatParticipants={chatParticipants}
          setChatParticipants={setChatParticipants}
          chatGroupID={props.chatGroupID}
        />
      </Modal>
    </TouchableOpacity>
  );
};

const ChatInfoModal = props => {
  const [addPersonModal, setAddPersonModal] = useState(false);

  return (
    <View
      style={{
        left: wp('32%'),
        width: wp('70%'),
        height: hp('100%'),
        backgroundColor: Colors.PALE_GREEN,
        borderRadius: 20,
        alignItems: 'center',
      }}>
      <View style={{top: hp('4%')}}>
        <Image
          source={require('_assets/images/agridata.png')}
          style={{width: wp('30%'), resizeMode: 'contain'}}
        />
      </View>

      <Text style={[Typography.normal, {alignSelf: 'center'}]}>
        GINGER TEAM
      </Text>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.GRAY_DARK,
          width: wp('70%'),
          alignItems: 'flex-start',
        }}>
        <Text style={[Typography.placeholder, {top: hp('5%'), left: wp('5%')}]}>
          {Strings.member}
        </Text>
      </View>
      <View
        style={{
          top: hp('5%'),
          height: hp('8%'),
        }}>
        <View
          style={{
            maxHeight: hp('25%'),
            width: wp('70%'),
          }}>
          <ChatParticipantList
            data={props.chatParticipants}
            chatGroupID={props.chatGroupID}
            setChatParticipants={props.setChatParticipants}
            chatParticipants={props.chatParticipants}
          />
        </View>

        <TouchableOpacity
          onPress={() => [
            setAddPersonModal(true),
            console.log('addperson: ', addPersonModal),
          ]}
          style={{
            backgroundColor: Colors.GRAY_MEDIUM,
            height: hp('6%'),
            width: wp('45%'),
            top: hp('9%'),
            flexDirection: 'row',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
            left: wp('5%'),
          }}>
          <Icon name="add" size={wp('6%')} />
          <Text
            style={[
              Typography.normal,
              {
                color: Colors.LIME_GREEN,
              },
            ]}>
            {Strings.addMembers}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          top: hp('78%'),
          width: wp('70%'),
          position: 'absolute',

          alignItems: 'flex-start',
          height: hp('20%'),
          left: wp('5%'),
        }}>
        <Text style={[Typography.placeholder]}>{Strings.attachment}</Text>
        <View
          style={{
            maxHeight: hp('18%'),
            width: wp('70%'),
            top: hp('2%'),
          }}>
          <InvoiceList></InvoiceList>
        </View>
      </View>

      <Modal
        isVisible={addPersonModal}
        onBackdropPress={() => setAddPersonModal(false)}>
        <AddPersonModal
          setAddPersonModal={setAddPersonModal}
          addPersonModal={addPersonModal}
        />
      </Modal>
    </View>
  );
};

const ChatParticipantList = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          alignSelf: 'center',
          width: wp('70%'),
          top: hp('1%'),
        }}></View>
    );
  };
  return (
    <View>
      <FlatList
        numColumns={1}
        keyExtractor={item => item.user.id}
        data={props.data}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return (
            <ChatParticipantCard
              setChatParticipants={props.setChatParticipants}
              chatParticipants={props.chatParticipants}
              user={item.user.name}
              userID={item.user.id}
              chatGroupID={props.chatGroupID}
            />
          );
        }}
      />
    </View>
  );
};

const ChatParticipantCard = props => {
  const [removePersonModal, setRemovePersonModal] = useState(false);
  return (
    <View
      style={{
        alignSelf: 'center',
        height: Mixins.scaleHeight(30),
        width: Mixins.scaleWidth(240),
        borderRadius: 30,
      }}>
      <View
        style={{
          left: Mixins.scaleWidth(20),
          height: Mixins.scaleHeight(40),
          justifyContent: 'center',
        }}>
        <Text style={Typography.normal}>{props.user}</Text>
      </View>

      <TouchableOpacity
        onPress={() => setRemovePersonModal(true)}
        style={{
          height: Mixins.scaleHeight(40),
          position: 'absolute',
          right: Mixins.scaleWidth(20),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="person-remove-outline"
          size={Mixins.scaleWidth(20)}
          color="black"
        />
      </TouchableOpacity>
      <Modal
        isVisible={removePersonModal}
        onBackdropPress={() => setRemovePersonModal(false)}>
        <RemovePersonModal
          setRemovePersonModal={setRemovePersonModal}
          setChatParticipants={props.setChatParticipants}
          chatParticipants={props.chatParticipants}
          name={props.user}
          id={props.id}
          chatGroupID={props.chatGroupID}
        />
      </Modal>
    </View>
  );
};

const RemovePersonModal = props => {
  const removePerson = async () => {
    try {
      const uniqueID = 'chat' + props.chatGroupID + props.id;
      const removedPerson = await API.graphql({
        query: deleteChatGroupUsers,
        variables: {input: {id: uniqueID}},
      });
      chatParticipants = props.chatParticipants;
      for (let [i, chatParticipants] of chatParticipants.entries()) {
        if (chatParticipants.id == props.id) {
          chatParticipants.splice(i, 1);
        }
      }
      props.setChatParticipants(chatParticipants);
      props.setRemovePersonModal(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View
      style={{
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: 20,
        height: Mixins.scaleHeight(190),
        width: Mixins.scaleWidth(300),
        left: Mixins.scaleWidth(10),
      }}>
      <View style={{alignSelf: 'center', top: Mixins.scaleHeight(10)}}>
        <Icon
          name="alert-circle-outline"
          size={Mixins.scaleWidth(70)}
          color={Colors.ALERT}
        />
      </View>
      <Text
        style={[
          Typography.normal,
          {alignSelf: 'center', top: Mixins.scaleHeight(20)},
        ]}>
        Are you sure you want to remove {props.name}?
      </Text>
      <TouchableOpacity
        onPress={() => removePerson}
        style={{
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(80),
          alignSelf: 'center',
          borderRadius: 20,
          height: Mixins.scaleHeight(25),
          justifyContent: 'center',
          top: Mixins.scaleHeight(40),
        }}>
        <Text style={[Typography.normal, {alignSelf: 'center'}]}>Confirm</Text>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-8),
          top: Mixins.scaleHeight(-8),
        }}>
        <CloseButton setModal={props.setRemovePersonModal} />
      </View>
    </View>
  );
};

const AddPersonModal = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(300),
        width: Mixins.scaleWidth(300),
        backgroundColor: Colors.GRAY_DARK,
        left: Mixins.scaleWidth(10),
        borderRadius: 20,
      }}>
      <Text
        style={[
          Typography.large,
          {alignSelf: 'center', top: Mixins.scaleHeight(20)},
        ]}>
        Who would you like to add?
      </Text>
      <EmployeeList></EmployeeList>
      <View style={{top: Mixins.scaleHeight(50)}}></View>
    </View>
  );
};

export const ProductInquiry2 = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.GRAY_LIGHT,
        borderWidth: Mixins.scaleWidth(3),
        borderColor: Colors.GRAY_MEDIUM,
        width: Mixins.scaleWidth(230),
        height: Mixins.scaleHeight(100),
      }}>
      <Image
        style={{
          width: Mixins.scaleWidth(80),
          marginRight: Mixins.scaleWidth(10),
          resizeMode: 'contain',
        }}
        source={require('_assets/images/agridata.png')}></Image>
      <View>
        <Text
          style={[
            Typography.large,
            {
              margin: Mixins.scaleWidth(5),
              marginBottom: Mixins.scaleHeight(1),
              marginTop: Mixins.scaleHeight(-20),
            },
          ]}>
          Product
        </Text>
        <Text
          style={[
            Typography.small,
            {
              margin: Mixins.scaleWidth(5),
              marginTop: Mixins.scaleHeight(-3),
            },
          ]}>
          Price: <Text style={{color: 'red'}}> RM5-8/kg</Text> {'\n'}
          MOQ: 50 {'\n'}
          Available: 1000
        </Text>
        <Text
          style={[
            Typography.small,
            {
              alignSelf: 'flex-end',
              marginRight: Mixins.scaleWidth(5),
              marginBottom: Mixins.scaleHeight(-30),
            },
          ]}>
          16.50 - Read
        </Text>
      </View>
    </View>
  );
};

export const PurchaseOrder2 = props => {
  const isMyMessage = () => {
    if (props.userID == props.senderID) return true;
    else return false;
  };
  return (
    <View>
      <View>
        {!isMyMessage() && (
          <View
            style={{
              left: Mixins.scaleWidth(5),
              top: Mixins.scaleHeight(50),
              borderColor: 'white',
              borderWidth: Mixins.scaleWidth(0.2),
              width: Mixins.scaleWidth(28),
              height: Mixins.scaleWidth(28),
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
              {props.sender}JK
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          marginLeft: isMyMessage() ? Mixins.scaleWidth(120) : 0,
          marginRight: isMyMessage() ? 0 : Mixins.scaleWidth(120),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_MEDIUM,
          width: Mixins.scaleWidth(165),
          height: Mixins.scaleHeight(65),
          borderRadius: 10,
          left: isMyMessage() ? 0 : Mixins.scaleWidth(50),
          marginTop: Mixins.scaleHeight(15),
        }}>
        <Text style={[Typography.large]}>Purchase Order</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(60),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              right: Mixins.scaleWidth(3),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={[Typography.small]}>Inspect</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(70),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              left: Mixins.scaleWidth(3),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={[Typography.small]}>Download</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            Typography.small,
            {
              alignSelf: 'flex-end',
              top: Mixins.scaleHeight(5),
              right: Mixins.scaleWidth(10),
            },
          ]}>
          props.createdAt
        </Text>
      </View>
    </View>
  );
};

export const OrderQuotation = props => {
  const [orderQuotationModal, setOrderQuotationModal] = useState(false);
  const isMyMessage = () => {
    if (props.userID == props.senderID) return true;
    else return false;
  };
  return (
    <View>
      <View>
        {!isMyMessage() && (
          <View
            style={{
              left: Mixins.scaleWidth(5),
              top: Mixins.scaleHeight(50),
              borderColor: 'white',
              borderWidth: Mixins.scaleWidth(0.2),
              width: Mixins.scaleWidth(28),
              height: Mixins.scaleWidth(28),
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
              {props.sender}JK
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          marginLeft: isMyMessage() ? Mixins.scaleWidth(120) : 0,
          marginRight: isMyMessage() ? 0 : Mixins.scaleWidth(120),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_MEDIUM,
          width: Mixins.scaleWidth(170),
          height: Mixins.scaleHeight(65),
          borderRadius: 10,
          left: isMyMessage() ? 0 : Mixins.scaleWidth(50),
          marginTop: Mixins.scaleHeight(15),
          height: Mixins.scaleHeight(70),
        }}>
        <Text style={[Typography.large, {top: Mixins.scaleHeight(-8)}]}>
          Order Quotation
        </Text>
        <View
          style={{
            flexDirection: 'row',
            top: Mixins.scaleHeight(-5),
          }}>
          <TouchableOpacity
            onPress={() => setOrderQuotationModal(true)}
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(60),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              right: Mixins.scaleWidth(3),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={[Typography.small]}>Inspect</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(70),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              left: Mixins.scaleWidth(3),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <Text style={[Typography.small]}>Download</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            Typography.small,
            {
              alignSelf: 'flex-end',
              top: Mixins.scaleHeight(5),
              right: Mixins.scaleWidth(10),
            },
          ]}>
          {props.createdAt}
        </Text>
      </View>

      <Modal isVisible={orderQuotationModal}>
        <OrderQuotationModal setOrderQuotationModal={setOrderQuotationModal} />
      </Modal>
    </View>
  );
};

const OrderQuotationModal = props => {
  return (
    <View
      style={{
        flexDirection: 'column',
        width: wp('90%'),
        height: hp('85%'),
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 15,
        alignItems: 'center',
      }}>
      <View
        style={{
          top: hp('4%'),
          alignItems: 'center',
        }}>
        <Text style={[Typography.large, {}]}>{Strings.orderQuotationFrom}</Text>
        <Text style={[Typography.header]}>
          <Text style={{color: '#8EAB3D'}}>Hinsou WholeSale</Text>
        </Text>
        <Text style={[Typography.small]}>#PQ12345678T</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: wp('2%'),
          top: hp('1%'),
        }}>
        <CloseButton setModal={props.setOrderQuotationModal} />
      </View>
      <View
        style={{
          top: hp('20%'),
          alignItems: 'center',
          position: 'absolute',
        }}>
        <OrderList></OrderList>
      </View>
      <View
        style={{
          top: hp('40%'),
          alignItems: 'center',
          height: hp('15%'),
          width: wp('75%'),
          backgroundColor: 'white',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={[Typography.small, {right: wp('6%')}]}>
          {Strings.orderQuotationList}
        </Text>
        <Text
          style={[
            Typography.small,
            {
              textAlign: 'right',
              left: wp('6%'),
            },
          ]}>
          RM 6,400{'\n'}June 30,2021{'\n'}Supplier's Fleet{'\n'}Cash On Pick-Up
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          top: hp('48%'),
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.LIGHT_BLUE,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            right: wp('5%'),
            width: wp('25%'),
            height: hp('4%'),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={[Typography.small]}>{Strings.accept}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.LIGHT_BLUE,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            left: wp('5%'),
            width: wp('25%'),
            height: hp('4%'),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={[Typography.small]}>{Strings.decline}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OrderList = props => {
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
        data={props.products}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return (
            <OrderCard
              name={item.name}
              variety={item.variety}
              grade={item.grade}
              quantity={item.quantity}
              siUnit={item.siUnit}
              index={item.index}
              products={props.products}
              setProducts={props.setProducts}
            />
          );
        }}></FlatList>
    </View>
  );
};

const OrderCard = props => {
  const [quantity, setQuantity] = useState(props.quantity.toString());
  const [price, setPrice] = useState('');
  const updatePrice = item2 => {
    var tempList = props.products;
    try {
      tempList.forEach((item, index, array) => {
        if (index == props.index) {
          item['price'] = parseFloat(item2);
          array[index] = item;
        }
      });
    } catch (e) {
      console.log(e);
    }
    console.log('updating Price to the list');
    props.setProducts(tempList);
    setPrice(item2);
  };
  const updateQuantity = item2 => {
    var tempList = props.products;
    tempList.forEach((item, index, array) => {
      if (index == props.index) {
        item['quantity'] = parseInt(item2);
        array[index] = item;
      }
    });
    console.log('updating quantity to the list');
    props.setProducts(tempList);
    setQuantity(item2);
  };
  return (
    <View
      style={{
        height: hp('8%'),
        width: wp('80%'),
        marginBottom: hp('0.5%'),
        borderBottomColor: Colors.GRAY_DARK,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{left: wp('1%'), width: wp('22%')}}>
        <Text style={[Typography.normal, {}]}>{props.name} </Text>
        <Text style={[Typography.small]}>Grade: {props.grade}</Text>

        <Text style={[Typography.small]}>{props.variety}</Text>
      </View>
      <View style={{flexDirection: 'row', left: wp('3%')}}>
        <TextInput
          value={quantity}
          underlineColorAndroid="transparent"
          onChangeText={item => updateQuantity(item)}
          keyboardType="numeric"
          style={{
            width: wp('10%'),
            top: hp('0.5%'),
            borderBottomColor: 'transparent',
          }}></TextInput>
        <Text
          style={[
            Typography.small,
            {
              top: hp('1%'),
              left: wp('1%'),
            },
          ]}>
          {props.siUnit}
        </Text>
      </View>
      <View style={{flexDirection: 'row', left: wp('5%')}}>
        <Text
          style={[
            Typography.small,
            {
              top: hp('1%'),
              left: wp('1%'),
            },
          ]}>
          RM
        </Text>
        <TextInput
          value={price}
          underlineColorAndroid="transparent"
          onChangeText={item => updatePrice(item)}
          keyboardType="numeric"
          style={{
            top: hp('0.5%'),
            left: wp('1%'),
            width: wp('9%'),
            borderBottomColor: 'transparent',
          }}></TextInput>
        <Text
          style={[
            Typography.small,
            {
              top: hp('1%'),
              left: wp('1%'),
            },
          ]}>
          /{props.siUnit}
        </Text>
      </View>

      <Text
        style={[
          Typography.small,
          {
            textAlign: 'right',
            right: wp('1%'),
            position: 'absolute',
          },
        ]}>
        RM {parseInt(quantity) * parseFloat(price)}
      </Text>
    </View>
  );
};

const InvoiceList = props => {
  return (
    <View>
      <FlatList
        numColumns={1}
        data={[{name: '1'}, {name: '1'}, {name: '1'}, {name: '1'}]}
        renderItem={({item}) => {
          return <InvoiceCard name={item.name} />;
        }}
      />
    </View>
  );
};

const InvoiceCard = props => {
  return (
    <TouchableOpacity>
      <Text
        style={[
          Typography.normal,
          {
            height: hp('5%'),
            justifyContent: 'center',
          },
        ]}>
        {Strings.invoices}
      </Text>
    </TouchableOpacity>
  );
};

const PurchaseOrder = props => {
  const [products, setProducts] = useState([]);
  const [orderQuotation, setOrderQuotation] = useState(false);
  const [successfulModal, setSuccessfulModal] = useState(false);
  const fetchPO = async () => {
    const prodList = await API.graphql({
      query: purchaseOrderItems,
      variables: {purchaseOrderID: props.chatGroupID},
    });

    console.log('successful fetch for PO items');
    setProducts(prodList.data.purchaseOrderItems.items);
  };
  useEffect(() => {
    fetchPO();
  }, []);
  return (
    <View
      style={{
        height: hp('80%'),
        width: wp('90%'),
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={[
            Typography.large,
            {
              fontFamily: 'Poppins-SemiBold',
              top: hp('3%'),
            },
          ]}>
          {Strings.purchaseOrderFrom}
        </Text>
        <Text
          style={[
            Typography.header,
            {
              fontFamily: 'Poppins-Bold',
              color: Colors.LIME_GREEN,
              top: hp('3%'),
            },
          ]}>
          {props.chatName}
        </Text>
      </View>
      <View
        style={{
          height: hp('50%'),
          top: hp('5%'),
          borderRadius: 10,
        }}>
        <PurchaseOrderList products={products}></PurchaseOrderList>
      </View>
      <View
        style={{
          position: 'absolute',
          right: wp('2%'),
          top: hp('0.5%'),
        }}>
        <CloseButton setModal={props.setPurchaseOrderModal} />
      </View>
      {props.type == 'supplier' ? (
        <TouchableOpacity
          onPress={() => setOrderQuotation(true)}
          style={{
            position: 'absolute',
            borderRadius: 15,
            bottom: hp('7%'),
            height: hp('5%'),
            width: wp('50%'),
            backgroundColor: Colors.LIGHT_BLUE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={Typography.normal}>Create Order Quotation</Text>
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
      <Modal isVisible={orderQuotation}>
        <NewOrderQuotation
          chatName={props.chatName}
          chatGroupID={props.chatGroupID}
          setOrderQuotation={setOrderQuotation}
          products={products}
          setSuccessfulModal={setSuccessfulModal}
          type={props.type}
          userName={props.userName}
          userID={props.userID}
        />
      </Modal>
      <Modal
        isVisible={successfulModal}
        onBackdropPress={() => setSuccessfulModal(false)}>
        <SuccessfulModal setSuccessfulModal={setSuccessfulModal} />
      </Modal>
    </View>
  );
};

const NewOrderQuotation = props => {
  const [openDelivery, setOpenDelivery] = useState(false);
  const [sum, setSum] = useState('');
  const [deliveryValue, setDeliveryValue] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState([
    {label: 'No', value: false},
    {label: 'Yes', value: true},
  ]);
  const [openPayment, setOpenPayment] = useState(false);
  const [paymentValue, setPaymentValue] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState([
    {label: 'Cash', value: 'cashOnDelivery'},
    {label: 'Credit Term', value: 'creditTerm'},
  ]);

  var productsWIndex = props.products;
  productsWIndex.forEach((item, index, arr) => {
    console.log('adding index to check back later');
    item['index'] = index;
    arr[index] = item;
  });
  console.log('printing productsWIndex');

  const [products, setProducts] = useState(productsWIndex);
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    console.log('useEffect to calculate sum Triggered');
    var tempSum = 0;
    products.forEach((item, index, arr) => {
      tempSum = tempSum + item.price * item.quantity;
    });
    setSum(tempSum);
  }, [trigger, products]);

  const sendQuotation = async () => {
    var tempList = products;
    tempList.forEach((item, index, array) => {
      delete item.createdAt;
      delete item.id;
      delete item.index;
      delete item.purchaseOrderID, delete item.updatedAt;
      array[index] = item;
    });
    console.log('removing key and value pairs like index for order quotation');
    try {
      const updatedValue = await API.graphql({
        query: updateOrderQuotation,
        variables: {
          input: {
            id: props.chatGroupID,
            items: tempList,
            sum: sum,
            logisticsProvided: deliveryValue,
            paymentTerms: paymentValue,
          },
        },
      });
    } catch (e) {
      if (e.errors[0].errorType == 'DynamoDB:ConditionalCheckFailedException') {
        console.log('order quotation has not been created, creating now');
        const createdValue = await API.graphql({
          query: createOrderQuotation,
          variables: {
            input: {
              id: props.chatGroupID,
              items: tempList,
              sum: sum,
              logisticsProvided: deliveryValue,
              paymentTerms: paymentValue,
            },
          },
        });
      }
    }
    try {
      console.log('sending order quotation');
      const createdMessage = await API.graphql({
        query: createMessage,
        variables: {
          input: {
            chatGroupID: props.chatGroupID,
            type: 'quotation',
            content: props.chatGroupID,
            sender: props.userName,
            senderID: props.userID,
          },
        },
      });
      console.log('message created');
      const updatedChat = await API.graphql({
        query: updateChatGroup,
        variables: {
          input: {
            id: props.chatGroupID,
            mostRecentMessage: 'Order Quotation',
            mostRecentMessageSender: props.userName,
          },
        },
      });
      console.log('Updated chat');
      props.setSuccessfulModal(true);
      props.setOrderQuotation(false);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        width: wp('90%'),
        height: hp('95%'),
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 15,
        alignItems: 'center',
      }}>
      <View
        style={{
          top: hp('4%'),
          alignItems: 'center',
        }}>
        <Text style={[Typography.large]}>{Strings.orderQuotationFrom}</Text>

        <Text
          style={[
            Typography.header,
            {color: Colors.LIME_GREEN, bottom: hp('1%')},
          ]}>
          {props.chatName}
        </Text>

        <Text style={[Typography.small, {bottom: hp('1%')}]}>
          #{props.chatGroupID.slice(0, 8)}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: wp('2%'),
          top: hp('1%'),
        }}>
        <CloseButton setModal={props.setOrderQuotation} />
      </View>
      <View
        style={{
          height: hp('40%'),
          top: hp('17%'),
          alignItems: 'center',
          position: 'absolute',
        }}>
        <OrderList products={products} setProducts={setProducts}></OrderList>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', left: wp('50%'), top: hp('57%')}}
        onPress={() => {
          if (trigger) {
            setTrigger(false);
          } else {
            setTrigger(true);
          }
        }}>
        <Text
          style={[
            Typography.normal,
            {
              fontFamily: 'Poppins-SemiBold',
            },
          ]}>
          {Strings.totalCost}: RM {sum}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          top: hp('50%'),
          alignItems: 'center',
          height: hp('24%'),
          width: wp('80%'),
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',

            height: wp('20%'),

            width: wp('70%'),
            top: hp('2%'),
          }}>
          <Text style={[Typography.small]}>Logistics Provided:</Text>
          <DropDownPicker
            open={openDelivery}
            value={deliveryValue}
            items={deliveryMethod}
            placeholder={'Yes'}
            setOpen={setOpenDelivery}
            setValue={setDeliveryValue}
            setItems={setDeliveryMethod}
            style={{
              width: wp('25%'),
              left: wp('17%'),

              height: hp('4%'),
              borderColor: 'white',
              borderRadius: 3,
              backgroundColor: Colors.GRAY_LIGHT,
            }}
            text
            dropDownDirection="BOTTOM"
            listItemContainerStyle={{height: hp('3%')}}
            dropDownContainerStyle={{
              borderWidth: 1,
              left: wp('20%'),
              width: wp('20%'),
              backgroundColor: Colors.GRAY_LIGHT,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: wp('20%'),

            width: wp('70%'),
            top: hp('3%'),
          }}>
          <Text style={[Typography.small]}>Payment Terms:</Text>
          <DropDownPicker
            open={openPayment}
            value={paymentValue}
            items={paymentMethod}
            placeholder={'Credit Term'}
            setOpen={setOpenPayment}
            setValue={setPaymentValue}
            setItems={setPaymentMethod}
            style={{
              width: wp('35%'),
              left: wp('10%'),
              height: hp('4%'),
              borderColor: 'white',
              borderRadius: 3,
              backgroundColor: Colors.GRAY_LIGHT,
            }}
            dropDownDirection="BOTTOM"
            listItemContainerStyle={{height: hp('3%')}}
            dropDownContainerStyle={{
              borderWidth: 1,
              left: wp('10%'),
              width: wp('35%'),
              backgroundColor: Colors.GRAY_LIGHT,
            }}
          />
        </View>
      </View>
      <View
        style={{
          top: hp('52%'),
        }}>
        <TouchableOpacity
          onPress={() => sendQuotation()}
          style={{
            backgroundColor: Colors.LIGHT_BLUE,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

            width: wp('55%'),
            height: hp('4%'),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={[Typography.small]}>Send Quotation to Retailer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PurchaseOrderList = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          borderBottomWidth: 1,
          borderRadius: 10,
          width: wp('70%'),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
    );
  };
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
      keyExtractor={item => item.id}
      data={props.products}
      numColumns={1}
      ItemSeparatorComponent={Seperator}
      ListEmptyComponent={
        <View
          style={{
            width: wp('80%'),
            height: hp('60%'),
            top: hp('2%'),
          }}></View>
      }
      renderItem={({item}) => {
        return (
          <PurchaseOrderComponent
            name={item.name}
            quantity={item.quantity}
            siUnit={item.siUnit}
            variety={item.variety}
            grade={item.grade}
          />
        );
      }}
    />
  );
};

const PurchaseOrderComponent = props => {
  return (
    <View
      style={{
        height: hp('5%'),
        borderRadius: 10,
        backgroundColor: Colors.GRAY_WHITE,
        width: wp('85%'),
      }}>
      <View style={{flexDirection: 'row', top: hp('1.5%')}}>
        <Text
          style={[Typography.small, {position: 'absolute', left: wp('2%')}]}>
          {props.name}
        </Text>
        <Text
          style={[Typography.small, {position: 'absolute', left: wp('45%')}]}>
          {props.variety}
        </Text>
        <Text
          style={[Typography.small, {position: 'absolute', left: wp('27%')}]}>
          Grade: {props.grade}
        </Text>

        <Text
          style={[Typography.small, {position: 'absolute', right: wp('5%')}]}>
          {props.quantity}
          {props.siUnit}
        </Text>
      </View>
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
