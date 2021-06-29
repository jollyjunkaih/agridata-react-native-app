import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {BackButton} from '_components/buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import {AddEmployeeButton} from './add-member';
import Modal from 'react-native-modal';
import {ceil} from 'react-native-reanimated';
import {SuccesfulChangesModal} from '_components/modals';

export const HumanResource = props => {
  const [succesfulChangesModal, setSuccesfulChangesModal] = useState(false);
  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          top: Mixins.scaleHeight(20),
          alignItems: 'center',
          justifyContent: 'center',
          right: Mixins.scaleWidth(10),
        }}>
        <View style={{right: Mixins.scaleWidth(40)}}>
          <BackButton navigation={props.navigation} />
        </View>
        <View>
          <Text style={[Typography.header]}>Human Resource</Text>
        </View>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(20),
          alignItems: 'center',
          justifyContent: 'center',
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(200),
        }}>
        <Image source={require('_assets/images/company-logo.png')} />
        <Text style={[Typography.header, {top: Mixins.scaleHeight(10)}]}>
          City Grocer
        </Text>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(20),
          backgroundColor: Colors.GRAY_MEDIUM,
          width: Mixins.scaleWidth(300),
          height: Mixins.scaleHeight(250),
          borderRadius: 10,
        }}>
        <View
          style={{top: Mixins.scaleHeight(20), left: Mixins.scaleWidth(20)}}>
          <Text style={[Typography.placeholderSmall]}>Team</Text>
        </View>
        <ParticipantList />
        <AddEmployeeButton />
        <TouchableOpacity
          onPress={() => setSuccesfulChangesModal(true)}
          style={{
            top: Mixins.scaleHeight(40),
            width: Mixins.scaleWidth(140),
            height: Mixins.scaleHeight(30),
            backgroundColor: Colors.LIGHT_BLUE,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            alignSelf: 'center',
            elevation: 4,
          }}>
          <Text>Save Changes</Text>
          <Icon
            name="checkmark-circle-outline"
            size={Mixins.scaleWidth(20)}
            style={{left: Mixins.scaleWidth(10)}}
          />
        </TouchableOpacity>
        <Modal
          isVisible={succesfulChangesModal}
          onBackdropPress={() => setSuccesfulChangesModal(false)}>
          <SuccesfulChangesModal
            setSuccesfulChangesModal={setSuccesfulChangesModal}
            navigation={props.navigation}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const Participant = props => {
  const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
  return (
    <View
      style={{
        height: Mixins.scaleHeight(40),
        top: Mixins.scaleHeight(20),
      }}>
      <View
        style={{
          left: Mixins.scaleWidth(20),
          alignSelf: 'flex-start',
        }}>
        <Text style={[Typography.normal]}>Carey Beck</Text>
        <Text style={[Typography.placeholderSmall, {fontStyle: 'italic'}]}>
          Owner
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setConfirmRemoveModal(true)}
        style={{
          left: Mixins.scaleWidth(270),
          bottom: Mixins.scaleHeight(25),
          width: Mixins.scaleWidth(30),
        }}>
        <Icon name="trash-outline" size={Mixins.scaleWidth(20)} />
      </TouchableOpacity>
      <Modal
        isVisible={confirmRemoveModal}
        onBackdropPress={() => setConfirmRemoveModal(false)}>
        <ConfirmRemoveModal setConfirmRemoveModal={setConfirmRemoveModal} />
      </Modal>
    </View>
  );
};

const ConfirmRemoveModal = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(300),
        width: Mixins.scaleWidth(290),
        backgroundColor: Colors.LIGHT_RED,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <View style={{top: Mixins.scaleWidth(30)}}>
        <Image
          source={require('_assets/images/Good-Vege.png')}
          style={{
            resizeMode: 'contain',
            width: Mixins.scaleWidth(200),
            height: Mixins.scaleHeight(150),
          }}
        />
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(15),
        }}>
        <Text style={[Typography.large, {textAlign: 'center'}]}>
          Are you sure you want to
        </Text>
        <Text
          style={[
            Typography.large,
            {fontFamily: 'Poppins-Bold', textAlign: 'center'},
          ]}>
          REMOVE A MEMBER?
        </Text>
      </View>

      <TouchableOpacity
        style={{
          top: Mixins.scaleHeight(50),
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(80),
          height: Mixins.scaleHeight(25),
          justifyContent: 'center',
          borderRadius: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Text style={[Typography.small, {textAlign: 'center'}]}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const ParticipantList = props => {
  const [confirmRemoveModal, setConfirmRemoveModal] = useState(false);
  const Seperator = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          width: Mixins.scaleWidth(260),
        }}></View>
    );
  };
  return (
    <View style={{height: Mixins.scaleHeight(200)}}>
      <FlatList
        numColumns={1}
        data={[{name: '1'}, {name: '1'}, {name: '1'}, {name: '1'}]}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => {
          return <Participant name={item.name} />;
        }}></FlatList>
    </View>
  );
};
