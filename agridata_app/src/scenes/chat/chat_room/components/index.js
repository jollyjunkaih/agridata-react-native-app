import React, {useState} from 'react';
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
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          height: Mixins.scaleHeight(40),
          borderRadius: 40,

          backgroundColor: Colors.GRAY_LIGHT,
        }}>
        <TextInput
          placeholder={'Type a message'}
          underlineColorAndroid={Colors.GRAY_LIGHT}
          multiline={true}
          style={{
            width: Mixins.scaleWidth(260),
            height: Mixins.scaleHeight(40),
            marginHorizontal: Mixins.scaleWidth(10),
          }}></TextInput>
      </View>
      <TouchableOpacity
        style={{
          height: Mixins.scaleWidth(40),
          width: Mixins.scaleWidth(40),
          borderRadius: 100,
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
  return (
    <TouchableOpacity onPress={() => setChatInfoModal(true)}>
      <Icon
        color={Colors.GRAY_DARK}
        name="information-circle-outline"
        size={Mixins.scaleWidth(30)}></Icon>
      <Modal isVisible={chatInfoModal}>
        <ChatInfoModal setChatInfoModal={setChatInfoModal} />
      </Modal>
    </TouchableOpacity>
  );
};

const ChatInfoModal = props => {
  const [addPersonModal, setAddPersonModal] = useState(false);
  const [removePersonModal, setRemovePersonModal] = useState(false);
  return (
    <View
      style={{
        left: Mixins.scaleWidth(1),
        width: Mixins.scaleWidth(320),
        height: Mixins.scaleHeight(440),
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: 30,
        top: Mixins.scaleHeight(0),
      }}>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-8),
          top: Mixins.scaleHeight(-8),
        }}>
        <CloseButton setModal={props.setChatInfoModal} />
      </View>
      <Text
        style={[
          Typography.header,
          {alignSelf: 'center', top: Mixins.scaleHeight(20)},
        ]}>
        Chat Participants
      </Text>
      <View
        style={{
          height: Mixins.scaleHeight(290),
          width: Mixins.scaleWidth(300),
          alignSelf: 'center',
          top: Mixins.scaleHeight(35),
        }}>
        <ChatParticipantList
          removePersonModal={removePersonModal}
          setRemovePersonModal={setRemovePersonModal}
        />
      </View>
      <TouchableOpacity
        onPress={() => setAddPersonModal(true)}
        style={{
          backgroundColor: Colors.PALE_GREEN,
          height: Mixins.scaleHeight(30),
          width: Mixins.scaleWidth(140),
          alignSelf: 'center',
          top: Mixins.scaleHeight(50),
          flexDirection: 'row',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 2,
        }}>
        <View style={{marginRight: Mixins.scaleWidth(5)}}>
          <Icon name="add" size={Mixins.scaleWidth(25)} />
        </View>
        <Text
          style={[
            Typography.normal,
            {marginRight: Mixins.scaleWidth(5), top: Mixins.scaleHeight(1)},
          ]}>
          Add Person
        </Text>
      </TouchableOpacity>
      <Modal
        isVisible={addPersonModal}
        backdropColor="white"
        backdropOpacity={0.7}>
        <AddPersonModal setAddPersonModal={setAddPersonModal} />
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
        data={[
          {name: '1'},
          {name: '1'},
          {name: '1'},
          {name: '1'},
          {name: '1'},
          {name: '1'},
          {name: '1'},
          {name: '1'},
          {name: '1'},
        ]}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return (
            <ChatParticipantCard
              name={item.name}
              removePersonModal={props.removePersonModal}
              setRemovePersonModal={props.setRemovePersonModal}
            />
          );
        }}
      />
    </View>
  );
};

const ChatParticipantCard = props => {
  return (
    <View
      style={{
        alignSelf: 'center',
        height: Mixins.scaleHeight(40),
        width: Mixins.scaleWidth(240),
        backgroundColor: Colors.GRAY_DARK,
        borderRadius: 30,
      }}>
      <View
        style={{
          left: Mixins.scaleWidth(20),
          height: Mixins.scaleHeight(40),
          justifyContent: 'center',
        }}>
        <Text style={Typography.normal}>Name</Text>
        <Text style={[Typography.small]}>Company</Text>
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
          color={Colors.FAIL}
        />
      </TouchableOpacity>
      <Modal
        isVisible={props.removePersonModal}
        backdropColor="white"
        backdropOpacity={0.2}>
        <RemovePersonModal setRemovePersonModal={props.setRemovePersonModal} />
      </Modal>
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
    </View>
  );
};
