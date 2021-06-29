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
} from '../../../../graphql/mutations';
import {listUsersInChat} from '../../../../graphql/queries';
import dayjs from 'dayjs';
import {abs} from 'react-native-reanimated';

const ChatBubble = props => {
  const createdAt = dayjs(props.createdAt).format('HH:mm D/M');
  const isMyMessage = () => {
    if (props.userID == props.senderID) return false;
    else return true;
  };
  const contentType = 'order';
  if (contentType == 'text') {
    return (
      <View style={{margin: Mixins.scaleWidth(5)}}>
        {!isMyMessage() && (
          <View
            style={{
              left: Mixins.scaleWidth(-5),
              top: Mixins.scaleHeight(22),
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
        <View
          style={{
            backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_LIGHT,
            marginLeft: isMyMessage() ? Mixins.scaleWidth(50) : 0,
            marginRight: isMyMessage() ? 0 : Mixins.scaleWidth(50),
            borderRadius: 15,
            left: isMyMessage() ? 0 : Mixins.scaleHeight(25),
            width: isMyMessage() ? 0 : Mixins.scaleHeight(180),
          }}>
          <View style={{marginTop: Mixins.scaleHeight(10)}}>
            <Text style={[Typography.normal, {margin: Mixins.scaleWidth(5)}]}>
              {props.content}sgzvsztgvzsdgzgzdvgxd
            </Text>
            <Text
              style={[
                Typography.small,
                {alignSelf: 'flex-end', right: Mixins.scaleWidth(10)},
              ]}>
              {createdAt}
            </Text>
          </View>
        </View>
      </View>
    );
  } else if (contentType == 'inquiry') {
    return (
      <ProductInquiry
        sender={props.sender}
        senderID={props.senderID}
        contentID={props.contentID}
        createdAt={createdAt}
        userID={props.userID}
      />
    );
  } else if (contentType == 'purchase') {
    return (
      <PurchaseOrder
        sender={props.sender}
        senderID={props.senderID}
        contentID={props.contentID}
        createdAt={createdAt}
        userID={props.userID}
      />
    );
  } else if (contentType == 'order') {
    return (
      <OrderQuotation
        sender={props.sender}
        senderID={props.senderID}
        contentID={props.contentID}
        createdAt={createdAt}
        userID={props.userID}
      />
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
          console.log(item);
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
      return newMessage;
    } catch {
      e => console.log(e);
    }
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View
        style={{
          height: Mixins.scaleHeight(40),
          borderRadius: 40,
          backgroundColor: Colors.GRAY_LIGHT,
          top: Mixins.scaleHeight(5),
        }}>
        <TextInput
          placeholder={'Type a message'}
          underlineColorAndroid={'transparent'}
          multiline={true}
          onChangeText={text => setMessage(text)}
          value={message}
          style={{
            width: Mixins.scaleWidth(260),
            height: Mixins.scaleHeight(40),
            marginHorizontal: Mixins.scaleWidth(10),
            top: Mixins.scaleHeight(10),
          }}
        />
      </View>
      <TouchableOpacity
        onPress={async () => {
          if (message.length > 0) {
            const newMessage = await createNewMessage();
            const messages = props.messages;
            messages.push(newMessage.data.createMessage);
            console.log(messages);
            props.setMessages(messages);
            setMessage('');
          } else {
          }
        }}
        style={{
          height: Mixins.scaleWidth(40),
          width: Mixins.scaleWidth(40),
          borderRadius: 100,
          top: Mixins.scaleHeight(8),
          left: Mixins.scaleWidth(10),
          backgroundColor: Colors.PALE_BLUE,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="paper-plane-outline"
          size={Mixins.scaleWidth(25)}
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
        size={Mixins.scaleWidth(30)}></Icon>
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
        left: Mixins.scaleWidth(100),
        width: Mixins.scaleWidth(250),
        height: Mixins.scaleHeight(650),
        backgroundColor: Colors.PALE_GREEN,
        borderRadius: 20,
        top: Mixins.scaleHeight(0),
      }}>
      <View style={{top: Mixins.scaleHeight(20), alignItems: 'center'}}>
        <Image
          source={require('_assets/images/agridata.png')}
          style={{width: Mixins.scaleWidth(130), resizeMode: 'contain'}}
        />
      </View>

      <Text
        style={[
          Typography.normal,
          {alignSelf: 'center', top: Mixins.scaleHeight(0)},
        ]}>
        GINGER TEAM
      </Text>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.GRAY_MEDIUM,
          top: Mixins.scaleHeight(10),
        }}></View>
      <Text
        style={[
          Typography.placeholder,
          {top: Mixins.scaleHeight(30), left: Mixins.scaleWidth(20)},
        ]}>
        Participants (No)
      </Text>
      <View
        style={{
          alignSelf: 'center',
          top: Mixins.scaleHeight(30),
        }}>
        <View
          style={{
            maxHeight: Mixins.scaleHeight(180),
            width: Mixins.scaleWidth(240),
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
            height: Mixins.scaleHeight(30),
            width: Mixins.scaleWidth(160),
            top: Mixins.scaleHeight(10),
            flexDirection: 'row',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
            left: Mixins.scaleWidth(50),
          }}>
          <Icon name="add" size={Mixins.scaleWidth(25)} />
          <Text
            style={[
              Typography.normal,
              {
                marginRight: Mixins.scaleWidth(10),
                top: Mixins.scaleHeight(1),
                color: Colors.LIME_GREEN,
                left: Mixins.scaleWidth(10),
              },
            ]}>
            Add Participants
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          bottom: Mixins.scaleHeight(140),
          width: Mixins.scaleWidth(200),
          position: 'absolute',
        }}>
        <Text
          style={[
            Typography.placeholder,
            {top: Mixins.scaleHeight(80), left: Mixins.scaleWidth(20)},
          ]}>
          Attachments
        </Text>
        <View
          style={{
            top: Mixins.scaleHeight(90),
            left: Mixins.scaleWidth(-15),
            maxHeight: Mixins.scaleHeight(120),
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
          width: Mixins.scaleWidth(250),
          marginVertical: Mixins.scaleHeight(1),
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
        Who would you like to add?
      </Text>
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

const ProductInquiry = props => {
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
              top: Mixins.scaleHeight(60),
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
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_MEDIUM,
          width: Mixins.scaleWidth(180),
          height: Mixins.scaleHeight(80),
          marginLeft: isMyMessage() ? Mixins.scaleWidth(120) : 0,
          marginRight: isMyMessage() ? 0 : Mixins.scaleWidth(120),
          left: isMyMessage() ? 0 : Mixins.scaleWidth(40),
          borderRadius: 15,
          marginTop: Mixins.scaleHeight(15),
        }}>
        <Text style={[Typography.large]}>Product Inquiry</Text>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: Colors.LIGHT_BLUE,
            width: Mixins.scaleWidth(120),
            height: Mixins.scaleHeight(20),
            top: Mixins.scaleHeight(5),
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

        <Text
          style={[
            Typography.small,
            {
              alignSelf: 'flex-end',
              right: Mixins.scaleWidth(10),
              top: Mixins.scaleHeight(10),
            },
          ]}>
          {props.createdAt}
        </Text>
      </View>
    </View>
  );
};

export const PurchaseOrder = props => {
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
          {props.createdAt}
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
        left: Mixins.scaleWidth(5),
        width: Mixins.scaleWidth(310),
        height: Mixins.scaleHeight(510),
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 15,
        alignItems: 'center',
      }}>
      <View
        style={{
          top: Mixins.scaleHeight(25),
          alignItems: 'center',
        }}>
        <Text style={[Typography.large, {top: Mixins.scaleHeight(5)}]}>
          Order Quotation From
        </Text>
        <Text style={[Typography.header]}>
          <Text style={{color: '#8EAB3D'}}>Hinsou WholeSale</Text>
        </Text>
        <Text style={[Typography.small]}>#PQ12345678T</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-8),
          top: Mixins.scaleHeight(-8),
        }}>
        <CloseButton setModal={props.setOrderQuotationModal} />
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(125),
          alignItems: 'center',
          position: 'absolute',
        }}>
        <OrderList></OrderList>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(230),
          alignItems: 'center',
          height: Mixins.scaleHeight(95),
          width: Mixins.scaleWidth(270),
          backgroundColor: 'white',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={[Typography.small, {right: Mixins.scaleWidth(20)}]}>
          Total Cost:{'\n'}Delivery Date:{'\n'}Delivery Method:{'\n'}Payment
          Method:
        </Text>
        <Text
          style={[
            Typography.small,
            {
              textAlign: 'right',
              left: Mixins.scaleWidth(20),
            },
          ]}>
          RM 6,400{'\n'}June 30,2021{'\n'}Supplier's Fleet{'\n'}Cash On Pick-Up
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          top: Mixins.scaleHeight(280),
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
            right: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(90),
            height: Mixins.scaleHeight(20),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={[Typography.small]}>Accept</Text>
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
            left: Mixins.scaleWidth(20),
            width: Mixins.scaleWidth(90),
            height: Mixins.scaleHeight(20),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={[Typography.small]}>Decline</Text>
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
          return <OrderCard name={item.name} />;
        }}></FlatList>
    </View>
  );
};

const OrderCard = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(35),
        width: Mixins.scaleWidth(260),
        marginBottom: Mixins.scaleHeight(1),
        marginTop: Mixins.scaleHeight(1),
        borderBottomColor: Colors.GRAY_DARK,
        borderBottomWidth: Mixins.scaleWidth(1),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            left: Mixins.scaleWidth(5),
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
            left: Mixins.scaleWidth(70),
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
            right: Mixins.scaleWidth(125),
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
            right: Mixins.scaleWidth(70),
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
            right: Mixins.scaleWidth(5),
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
    <TouchableOpacity
      style={{
        left: Mixins.scaleWidth(20),
        height: Mixins.scaleHeight(30),
        justifyContent: 'center',
      }}>
      <Text
        style={[
          Typography.normal,
          {
            left: Mixins.scaleWidth(20),
            height: Mixins.scaleHeight(30),
            justifyContent: 'center',
          },
        ]}>
        Invoice
      </Text>
    </TouchableOpacity>
  );
};
