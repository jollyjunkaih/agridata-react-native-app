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

export const TaskList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.TaskList}
        numColumns={1}
        renderItem={item => {
          return <Task user={item.name} />;
        }}
      />
    </View>
  );
};

const Task = props => {
  const [taskModal, setTaskModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setTaskModal(true)}
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
      <Modal isVisible={taskModal}>
        <TaskModal setTaskModal={setTaskModal} taskList={props}></TaskModal>
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

const TaskModal = props => {
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
        <CloseButton setModal={props.setTaskModal} />
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
          width: Mixins.scaleWidth(100),
          height: Mixins.scaleHeight(30),
          alignSelf: 'center',
          justifyContent: 'center',
          elevation: 5,
          position: 'absolute',
          bottom: Mixins.scaleHeight(50),
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
            left: Mixins.scaleWidth(10),
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
    </View>
  );
};
