import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  BackHandler,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {CloseButton} from '_components';
import DropDownPicker from 'react-native-dropdown-picker';

export const MarketplaceButton = props => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('marketplace')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleWidth(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/groceries-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      marketplace
    </Text>
  </TouchableOpacity>
);

export const ChatButton = props => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('inbox')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleWidth(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/chat-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      chats
    </Text>
  </TouchableOpacity>
);

export const InvoiceButton = props => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('orders')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleWidth(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/planner-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      invoices
    </Text>
  </TouchableOpacity>
);

export const ToDoButton = props => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('tasks')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleWidth(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/calendar-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      to do
    </Text>
  </TouchableOpacity>
);

export const DataAnalyticsButton = props => (
  <TouchableOpacity
    onPress={() => props.navigation.navigate('dataanalytics')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleHeight(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/data-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      Data Analytics
    </Text>
  </TouchableOpacity>
);

export const MenuButton = props => {
  const [menuButtonModal, setMenuButtonModal] = useState(false);
  return (
    <TouchableOpacity onPress={() => setMenuButtonModal(true)}>
      <Icon
        color={Colors.GRAY_DARK}
        name="menu-outline"
        size={Mixins.scaleWidth(30)}
      />
      <Modal
        animationIn="fadeInLeft"
        animationOut="fadeOutLeft"
        isVisible={menuButtonModal}>
        <MenuButtonModal setMenuButtonModal={setMenuButtonModal} />
      </Modal>
    </TouchableOpacity>
  );
};

export const MenuButtonModal = props => {
  return (
    <View
      style={{
        width: Mixins.scaleWidth(350),
        height: Mixins.scaleHeight(640),
        backgroundColor: Colors.PALE_GREEN,
        right: Mixins.scaleWidth(150),
        borderRadius: 20,
      }}>
      <TouchableOpacity
        onPress={() => props.setMenuButtonModal(false)}
        style={{
          top: Mixins.scaleHeight(60),
          left: Mixins.scaleWidth(150),
          zIndex: 3,
          width: Mixins.scaleWidth(30),
        }}>
        <Icon name="close-outline" size={Mixins.scaleWidth(30)} />
      </TouchableOpacity>
      <View>
        <Image
          style={{
            left: Mixins.scaleWidth(150),
            top: Mixins.scaleHeight(75),
            resizeMode: 'contain',
            width: Mixins.scaleWidth(95),
            height: Mixins.scaleHeight(85),
          }}
          source={require('_assets/images/agridata.png')}
        />
      </View>
      <View
        style={{
          borderBottomColor: Colors.GRAY_MEDIUM,
          borderBottomWidth: Mixins.scaleWidth(1),
          top: Mixins.scaleHeight(70),
        }}
      />
      <TouchableOpacity
        style={{
          top: Mixins.scaleHeight(90),
          left: Mixins.scaleWidth(150),
          zIndex: 3,
          width: Mixins.scaleWidth(150),
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="log-out-outline" size={Mixins.scaleWidth(30)} />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              left: Mixins.scaleWidth(10),
            }}>
            <Text style={[Typography.normal]}>Logout</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          top: Mixins.scaleHeight(100),
          left: Mixins.scaleWidth(150),
          zIndex: 3,
          width: Mixins.scaleWidth(160),
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="briefcase-outline" size={Mixins.scaleWidth(25)} />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              left: Mixins.scaleWidth(10),
            }}>
            <Text style={[Typography.normal]}>Company Profile</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          top: Mixins.scaleHeight(110),
          left: Mixins.scaleWidth(150),
          zIndex: 3,
          width: Mixins.scaleWidth(150),
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="person-outline" size={Mixins.scaleWidth(25)} />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              left: Mixins.scaleWidth(10),
            }}>
            <Text style={[Typography.normal]}>Personal Profile</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const ProductEditButton = props => {
  const [productEditButtonModal, setProductEditButtonModal] = useState(false);
  return (
    <TouchableOpacity onPress={() => setProductEditButtonModal(true)}>
      <Icon
        color={Colors.GRAY_DARK}
        name="car-sport-outline"
        size={Mixins.scaleWidth(30)}
      />
      <Modal
        animationIn="fadeInLeft"
        animationOut="fadeOutLeft"
        isVisible={productEditButtonModal}>
        <ProductEditButtonModal
          setProductEditButtonModal={setProductEditButtonModal}
        />
      </Modal>
    </TouchableOpacity>
  );
};

export const ProductEditButtonModal = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'kg', value: 'kg'},
    {label: 'units', value: 'units'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    {label: 'kg', value: 'kg'},
    {label: 'units', value: 'units'},
  ]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? Mixins.scaleHeight(-230) : -180
      } /* Keyboard Offset needs to be tested against multiple phones */
      style={{
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
      }}>
      <View
        style={{
          height: Mixins.scaleHeight(460),
          width: Mixins.scaleWidth(310),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          left: Mixins.scaleWidth(
            7.5,
          ) /* taking into account the margin from Product Card */,
          top: Mixins.scaleHeight(80),
        }}>
        <View
          style={{
            position: 'absolute',
            right: Mixins.scaleWidth(-10),
            top: Mixins.scaleHeight(-10),
          }}>
          <CloseButton setModal={props.setProductEditButtonModal}></CloseButton>
        </View>
        <View
          style={{top: Mixins.scaleHeight(25), right: Mixins.scaleWidth(75)}}>
          <Text style={[Typography.normal]}>Product Name</Text>
        </View>
        <View style={{top: Mixins.scaleHeight(-20)}}>
          <Image
            source={require('_assets/images/produce.png')}
            style={{resizeMode: 'contain', width: Mixins.scaleWidth(150)}}
          />
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(-80),
            backgroundColor: Colors.GRAY_LIGHT,
            borderRadius: 15,
            width: Mixins.scaleWidth(270),
            height: Mixins.scaleHeight(130),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'center',
              margin: Mixins.scaleWidth(5),
              left: Mixins.scaleWidth(7),
            }}>
            <View style={{margin: Mixins.scaleWidth(5)}}>
              <Text>Enter Product Details</Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: Mixins.scaleWidth(195),
                height: Mixins.scaleHeight(20),
                margin: Mixins.scaleWidth(5),
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <TextInput
                style={{left: Mixins.scaleWidth(10)}}
                placeholder="RM 5"></TextInput>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Mixins.scaleWidth(220),
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: Mixins.scaleWidth(100),
                  height: Mixins.scaleHeight(20),
                  margin: Mixins.scaleWidth(5),
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <TextInput
                  style={{left: Mixins.scaleWidth(10)}}
                  placeholder="1000kg"></TextInput>
              </View>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                defaultValue="kg"
                style={{
                  width: Mixins.scaleWidth(90),
                  height: Mixins.scaleHeight(25),
                }}
                containerStyle={{width: Mixins.scaleWidth(90), zIndex: 1000}}
                placeholder="Select"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Mixins.scaleWidth(220),
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: Mixins.scaleWidth(100),
                  height: Mixins.scaleHeight(20),
                  margin: Mixins.scaleWidth(5),
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <TextInput
                  style={{left: Mixins.scaleWidth(10)}}
                  placeholder="1000kg"></TextInput>
              </View>
              <DropDownPicker
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                defaultValue="kg"
                style={{
                  width: Mixins.scaleWidth(90),
                  height: Mixins.scaleHeight(25),
                }}
                containerStyle={{width: Mixins.scaleWidth(90)}}
                placeholder="Select"
              />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
