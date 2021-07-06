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

import {abs} from 'react-native-reanimated';
import {DismissKeyboardView} from '_components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';

const ChatBubble = props => {
  const [orderQuotationModal, setOrderQuotationModal] = useState(false);
  const [purchaseOrderModal, setPurchaseOrderModal] = useState(false);
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
          <PurchaseOrder></PurchaseOrder>
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
          <PurchaseOrder></PurchaseOrder>
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
          <OrderQuotationModal></OrderQuotationModal>
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

export const MessageInput = props => {
  const [message, setMessage] = useState('');
  const createNewMessage = async () => {
    try {
      const newMessage = await API.graphql({
        query: createMessage,
        variables: {
          input: {
            senderID: props.userID,
            chatGroupID: props.chatGroupID,
            sender: props.user,
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
    } catch {
      e => console.log(e);
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
            height: hp('4%'),
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
      console.log(props.chatGroupID);
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
    } catch {
      e => console.log(e);
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
        {Strings.whoWouldYouLikeToAdd}
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
          {Strings.price}: <Text style={{color: 'red'}}> RM5-8/kg</Text> {'\n'}
          MOQ: 50 {'\n'}
          {Strings.available}: 1000
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
        <Text style={[Typography.large]}>{Strings.purchaseOrder}</Text>
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
            <Text style={[Typography.small]}>{Strings.inspect}</Text>
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
            <Text style={[Typography.small]}>{Strings.download}</Text>
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
        data={[{name: '1'}, {name: '1'}, {name: '1'}, {name: '1'}]}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return <OrderCard name={item.name} />;
        }}></FlatList>
    </View>
  );
};

const OrderCard = props => {
  return (
    <View
      style={{
        height: hp('6%'),
        width: wp('75%'),
        marginBottom: hp('0.5%'),
        borderBottomColor: Colors.GRAY_DARK,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            left: wp('1%'),
            position: 'absolute',
          },
        ]}>
        Bananas
      </Text>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            left: wp('19%'),
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
            right: wp('36%'),
            position: 'absolute',
          },
        ]}>
        @
      </Text>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            right: wp('19%'),
            position: 'absolute',
          },
        ]}>
        RM 8/kg
      </Text>

      <Text
        style={[
          Typography.small,
          {
            textAlign: 'right',
            right: wp('1%'),
            position: 'absolute',
          },
        ]}>
        RM1600
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
  return (
    <View
      style={{
        height: hp('65%'),
        width: wp('80%'),
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 10,
        left: wp('5%'),
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
          Jane's Farm
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.GRAY_WHITE,
          height: hp('50%'),
          top: hp('5%'),
          borderRadius: 10,
        }}>
        <PurchaseOrderList></PurchaseOrderList>
      </View>
      <View
        style={{
          position: 'absolute',
          right: wp('2%'),
          top: hp('0.5%'),
        }}>
        <CloseButton setModal={props.setPurchaseOrderModal} />
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
      data={DATA}
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
          <PurchaseOrderComponent name={item.name} quantity={item.quantity} />
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.GRAY_WHITE,
        width: wp('70%'),
      }}>
      <View style={{flexDirection: 'row', right: wp('7%')}}>
        <Text
          style={[Typography.small, {position: 'absolute', right: wp('6%')}]}>
          {props.name}
        </Text>
        <Text style={[Typography.small, {position: 'absolute'}]}>
          {'\t'}|{'\t'}
        </Text>
        <Text
          style={[Typography.small, {position: 'absolute', left: wp('20%')}]}>
          {props.quantity}kg
        </Text>
      </View>
    </View>
  );
};

const DATA = [
  {name: 'Ginger', quantity: '30'},
  {name: 'Bananas', quantity: '40'},
  {name: 'Avacadoes', quantity: '50'},
  {name: 'Durian', quantity: '60'},
];
