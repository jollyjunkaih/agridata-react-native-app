import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {CloseButton, AddButton} from '_components';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Modal from 'react-native-modal';
import {Rating} from 'react-native-ratings';
import {ChatButton} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';

export const ProductPopUp = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? -200 : -180
      } /* Keyboard Offset needs to be tested against multiple phones */
      style={{
        height: Mixins.scaleHeight(470),
        width: Mixins.scaleWidth(290),
        right: Mixins.scaleWidth(-15),
        backgroundColor: 'white',
        top: Mixins.scaleHeight(8),
        borderRadius: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-12),
          top: Mixins.scaleHeight(-10),
        }}>
        <CloseButton setModal={props.setAddItemsButton} />
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(180),
          backgroundColor: Colors.GRAY,
          height: Mixins.scaleHeight(220),
          width: Mixins.scaleWidth(250),
          left: Mixins.scaleWidth(20),
          borderRadius: 15,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 5,
          shadowRadius: 3,
          shadowColor: 'grey',
        }}>
        <Text
          style={
            ([Typography.normal],
            {left: Mixins.scaleWidth(20), top: Mixins.scaleHeight(10)})
          }>
          Enter product details
        </Text>
        <View
          style={{
            left: Mixins.scaleWidth(20),
            top: Mixins.scaleHeight(10),
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(18),
              borderRadius: 3,
              justifyContent: 'center',
              marginBottom: 8,
              marginTop: 5,
            }}>
            <TextInput
              keyboardType="default"
              placeholder="Product Name"
              style={{left: Mixins.scaleWidth(8)}}></TextInput>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(18),
              borderRadius: 3,
              justifyContent: 'center',
              marginBottom: 8,
            }}>
            <TextInput
              keyboardType="default"
              placeholder="Price"
              style={{left: Mixins.scaleWidth(8)}}></TextInput>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(18),
              borderRadius: 3,
              justifyContent: 'center',
              marginBottom: 8,
            }}>
            <TextInput
              keyboardType="default"
              placeholder="Variety"
              style={{left: Mixins.scaleWidth(8)}}></TextInput>
          </View>
          <View>
            <View
              style={{
                backgroundColor: 'white',
                width: Mixins.scaleWidth(200),
                height: Mixins.scaleHeight(18),
                borderRadius: 3,
                justifyContent: 'center',
                marginBottom: 8,
              }}>
              <TextInput
                keyboardType="default"
                placeholder="Quantity Available"
                style={{left: Mixins.scaleWidth(8)}}></TextInput>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(18),
              borderRadius: 3,
              justifyContent: 'center',
              marginBottom: 8,
            }}>
            <TextInput
              keyboardType="default"
              placeholder="Minimum Order Quantity"
              style={{left: Mixins.scaleWidth(8)}}></TextInput>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(60),
              borderRadius: 3,
            }}>
            <TextInput
              keyboardType="default"
              placeholder="Other Details"
              style={{
                top: Mixins.scaleHeight(5),
                left: Mixins.scaleWidth(8),
              }}></TextInput>
          </View>
        </View>
      </View>
      <View
        style={{
          height: Mixins.scaleHeight(30),
          width: Mixins.scaleWidth(150),
          backgroundColor: Colors.LIGHT_BLUE,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          position: 'absolute',
          bottom: Mixins.scaleHeight(-230),
          right: Mixins.scaleWidth(70),
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 5,
          shadowRadius: 3,
          shadowColor: 'grey',
        }}>
        <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={[Typography.normal]}> Add Product</Text>
            <Icon name="add-circle-outline" />
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export const AddItemsButton = props => {
  const [addItemsButton, setAddItemsButton] = useState(false);
  return (
    <TouchableOpacity
      style={{
        height: Mixins.scaleHeight(50),
        width: Mixins.scaleWidth(130),
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
      onPress={() => setAddItemsButton(true)}>
      <Text style={[Typography.normal]}>Add Items</Text>
      <Modal isVisible={addItemsButton}>
        <ProductPopUp setAddItemsButton={setAddItemsButton}></ProductPopUp>
      </Modal>
    </TouchableOpacity>
  );
};
