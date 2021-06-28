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
import DropDownPicker from 'react-native-dropdown-picker';

const ChatBubble = props => {
  const isMyMessage = () => {
    return true;
  };
  return (
    <View style={{margin: 5}}>
      <View
        style={{
          backgroundColor: isMyMessage() ? '#DCF8C5' : Colors.GRAY_LIGHT,
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
          borderRadius: 15,
        }}>
        {!isMyMessage() && (
          <Text
            style={{
              color: Colors.GRAY_DARK,
              fontWeight: 'bold',
              marginBottom: Mixins.scaleHeight(5),
              marginLeft: Mixins.scaleWidth(5),
            }}>
            UserName
          </Text>
        )}
        <Text style={[Typography.normal, {margin: Mixins.scaleWidth(5)}]}>
          helloasdffffadsfsdsfsddddddddddddddddddddddddddddd dfasdgsadfdsv
          sadfdsasdf
        </Text>
        <Text style={[Typography.small, {alignSelf: 'flex-end'}]}>
          {'{moment(props.createdAt).fromNow()}'}
        </Text>
      </View>
    </View>
  );
};

export const ChatBubbleList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.chatList}
        numColumns={1}
        renderItem={item => {
          return <ChatBubble user={item.name} />;
        }}
      />
    </View>
  );
};

export const MessageInput = props => {
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
          underlineColorAndroid={Colors.GRAY_LIGHT}
          multiline={true}
          style={{
            width: Mixins.scaleWidth(260),
            height: Mixins.scaleHeight(40),
            marginHorizontal: Mixins.scaleWidth(10),
            top: Mixins.scaleHeight(10),
          }}></TextInput>
      </View>
      <TouchableOpacity
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
  const [addPersonModal, setAddPersonModal] = useState(false);
  const [removePersonModal, setRemovePersonModal] = useState(false);
  return (
    <TouchableOpacity onPress={() => setChatInfoModal(true)}>
      <Icon
        color={Colors.GRAY_DARK}
        name="information-circle-outline"
        size={Mixins.scaleWidth(30)}></Icon>
      <Modal
        isVisible={chatInfoModal}
        onBackdropPress={() => setChatInfoModal(false)}>
        <ChatInfoModal
          setChatInfoModal={setChatInfoModal}
          setAddPersonModal={setAddPersonModal}
          setRemovePersonModal={setRemovePersonModal}
          addPersonModal={addPersonModal}
        />
      </Modal>
    </TouchableOpacity>
  );
};

export const ProductInquiry = props => {
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

export const PurchaseOrder = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.GRAY_DARK,
        width: Mixins.scaleWidth(165),
        height: Mixins.scaleHeight(65),
        borderRadius: 10,
      }}>
      <Text style={[Typography.large]}>Purchase Order</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Text style={[Typography.small]}>Inspect</Text>
        </TouchableOpacity>
        <Text style={[Typography.small]}>
          {'\t'}|{'\t'}
        </Text>
        <TouchableOpacity>
          <Text style={[Typography.small]}>Download</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={[
          Typography.small,
          {
            alignSelf: 'flex-end',
          },
        ]}>
        16.50 - Read
      </Text>
    </View>
  );
};

export const OrderQuotation = props => {
  const [orderQuotationModal, setOrderQuotationModal] = useState(false);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.GRAY_LIGHT,
        width: Mixins.scaleWidth(165),
        height: Mixins.scaleHeight(70),
        borderRadius: 10,
      }}>
      <Modal isVisible={orderQuotationModal}>
        <OrderQuotationModal setOrderQuotationModal={setOrderQuotationModal} />
      </Modal>
      <Text style={[Typography.large]}>Order Quotation</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => setOrderQuotationModal(true)}>
          <Text style={[Typography.small]}>Inspect</Text>
        </TouchableOpacity>
        <Text style={[Typography.small]}>
          {'\t'}|{'\t'}
        </Text>
        <TouchableOpacity>
          <Text style={[Typography.small]}>Download</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={[
          Typography.small,
          {
            left: Mixins.scaleWidth(-50),
          },
        ]}>
        09:45
      </Text>
    </View>
  );
};

const ChatInfoModal = props => {
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
      <View style={{top: Mixins.scaleHeight(60), alignItems: 'center'}}>
        <Image source={require('_assets/images/agridata.png')} />
      </View>
      <View>
        <Text
          style={[
            Typography.normal,
            {alignSelf: 'center', top: Mixins.scaleHeight(50)},
          ]}>
          GINGER TEAM
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.GRAY_MEDIUM,
          top: Mixins.scaleHeight(70),
        }}></View>
      <View>
        <Text
          style={[
            Typography.placeholder,
            {top: Mixins.scaleHeight(80), left: Mixins.scaleWidth(20)},
          ]}>
          Participants (No)
        </Text>
      </View>
      <View
        style={{
          height: Mixins.scaleHeight(290),
          width: Mixins.scaleWidth(300),
          alignSelf: 'center',
          top: Mixins.scaleHeight(110),
        }}>
        <ChatParticipantList
          setRemovePersonModal={props.setRemovePersonModal}
        />
      </View>

      <View
        style={{
          height: Mixins.scaleHeight(30),
          width: Mixins.scaleWidth(140),
          alignSelf: 'center',
          top: Mixins.scaleHeight(-205),
          flexDirection: 'row',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
          left: Mixins.scaleWidth(-30),
        }}>
        <TouchableOpacity
          onPress={() => [
            props.setAddPersonModal(true),
            console.log('addperson: ', props.addPersonModal),
          ]}
          style={{
            marginRight: Mixins.scaleWidth(5),
            backgroundColor: Colors.GRAY_MEDIUM,
            borderRadius: 30,
          }}>
          <Icon name="add" size={Mixins.scaleWidth(25)} />
        </TouchableOpacity>
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
      </View>
      <View>
        <View>
          <Text
            style={[
              Typography.placeholder,
              {top: Mixins.scaleHeight(-60), left: Mixins.scaleWidth(20)},
            ]}>
            Attachments
          </Text>
          <View
            style={{
              top: Mixins.scaleHeight(-40),
              left: Mixins.scaleWidth(-15),
            }}>
            <InvoiceList></InvoiceList>
          </View>
        </View>
      </View>
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
          position: 'absolute',
          top: Mixins.scaleHeight(35),
          alignItems: 'center',
        }}>
        <Text style={[Typography.large]}>Order Quotation From</Text>
        <Text style={[Typography.header, {marginTop: Mixins.scaleHeight(-10)}]}>
          <Text style={{color: '#8EAB3D'}}>Hinsou WholeSale</Text>
        </Text>
        <Text style={[Typography.small, {marginTop: Mixins.scaleHeight(-5)}]}>
          #PQ12345678T
        </Text>
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
          top: Mixins.scaleHeight(305),
          alignItems: 'center',
          height: Mixins.scaleHeight(95),
          width: Mixins.scaleWidth(250),
          backgroundColor: 'white',
          position: 'absolute',
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
          top: Mixins.scaleHeight(435),
        }}>
        <TouchableOpacity
          style={{
            marginRight: Mixins.scaleWidth(30),
            backgroundColor: Colors.LIGHT_BLUE,
            elevation: 3,
            paddingVertical: Mixins.scaleHeight(5),
            paddingHorizontal: Mixins.scaleWidth(10),
          }}>
          <Text style={[Typography.small]}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.LIGHT_BLUE,
            elevation: 3,
            paddingVertical: Mixins.scaleHeight(5),
            paddingHorizontal: Mixins.scaleWidth(10),
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
      }}>
      <Text
        style={[
          Typography.small,
          {
            textAlign: 'left',
            left: Mixins.scaleWidth(10),
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
            left: Mixins.scaleWidth(80),
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

      <Text
        style={[
          Typography.small,
          {
            textAlign: 'right',
            position: 'absolute',
            left: Mixins.scaleWidth(220),
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
        data={[{name: '1'}, {name: '1'}, {name: '1'}, {name: '1'}]}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return (
            <ChatParticipantCard
              name={item.name}
              setRemovePersonModal={props.setRemovePersonModal}
            />
          );
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

const ChatParticipantCard = props => {
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
        <Text style={Typography.normal}>Name</Text>
      </View>

      <TouchableOpacity
        onPress={() => props.setRemovePersonModal(true)}
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
    </View>
  );
};

const RemovePersonModal = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: 20,
        height: Mixins.scaleHeight(160),
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
        Are you sure you want to remove XXX?
      </Text>
      <TouchableOpacity
        onPress={() => props.setRemovePersonModal(false)}
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
