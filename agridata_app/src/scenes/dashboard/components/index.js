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
import {LIGHT_BLUE} from '_styles';
import {Auth} from 'aws-amplify';

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
        isVisible={menuButtonModal}
        onBackdropPress={() => setMenuButtonModal(false)}>
        <MenuButtonModal
          userType={props.userType}
          setMenuButtonModal={setMenuButtonModal}
          navigation={props.navigation}
          updateAuthState={props.updateAuthState}
        />
      </Modal>
    </TouchableOpacity>
  );
};

export const MenuButtonModal = props => {
  const signOut = async () => {
    try {
      await Auth.signOut();
      props.updateAuthState('loggedOut');
      console.log('Logged Out');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };
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
            left: Mixins.scaleWidth(155),
            top: Mixins.scaleHeight(75),
            resizeMode: 'contain',
            width: Mixins.scaleWidth(110),
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
      {props.userType == 'supplier' ||
      props.userType == 'general-manager' ||
      props.userType == 'owner' ? (
        <View>
          <TouchableOpacity
            onPress={() => [
              props.setMenuButtonModal(false),
              props.navigation.navigate('companyprofile'),
            ]}
            style={{
              top: Mixins.scaleHeight(100),
              left: Mixins.scaleWidth(150),
              zIndex: 3,
              width: Mixins.scaleWidth(150),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="briefcase-outline" size={Mixins.scaleWidth(25)} />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  left: Mixins.scaleWidth(10),
                }}>
                <Text style={[Typography.placeholder]}>Company Profile</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => [
              props.setMenuButtonModal(false),
              props.navigation.navigate('personalprofile'),
            ]}
            style={{
              top: Mixins.scaleHeight(120),
              left: Mixins.scaleWidth(150),
              zIndex: 3,
              width: Mixins.scaleWidth(160),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="person-outline" size={Mixins.scaleWidth(25)} />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  left: Mixins.scaleWidth(10),
                }}>
                <Text style={[Typography.placeholder]}>Personal Profile</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => [
              props.setMenuButtonModal(false),
              props.navigation.navigate('humanresource'),
            ]}
            style={{
              top: Mixins.scaleHeight(140),
              left: Mixins.scaleWidth(150),
              zIndex: 3,
              width: Mixins.scaleWidth(160),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="people-outline" size={Mixins.scaleWidth(25)} />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  left: Mixins.scaleWidth(10),
                }}>
                <Text style={[Typography.placeholder]}>Human Resource</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => signOut()}
            style={{
              top: Mixins.scaleHeight(160),
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
                <Text style={[Typography.placeholder]}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => [
              props.setMenuButtonModal(false),
              props.navigation.navigate('personalprofile'),
            ]}
            style={{
              top: Mixins.scaleHeight(120),
              left: Mixins.scaleWidth(150),
              zIndex: 3,
              width: Mixins.scaleWidth(160),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="person-outline" size={Mixins.scaleWidth(25)} />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  left: Mixins.scaleWidth(10),
                }}>
                <Text style={[Typography.placeholder]}>Personal Profile</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => signOut()}
            style={{
              top: Mixins.scaleHeight(130),
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
                <Text style={[Typography.placeholder]}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
