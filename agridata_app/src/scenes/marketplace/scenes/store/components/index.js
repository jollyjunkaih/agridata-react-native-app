import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
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
import {API, Storage} from 'aws-amplify';

import {
  createProducts,
  deleteProducts,
  updateProducts,
  createMessage,
  createChatGroup,
  updateChatGroup,
} from '../../../../../graphql/mutations';

const ProductCard = props => {
  const [productModal, setProductModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setProductModal(true)}
      style={{
        backgroundColor: Colors.GRAY_LIGHT,
        width: Mixins.scaleWidth(130),
        height: Mixins.scaleHeight(155),
        margin: Mixins.scaleWidth(17.5),
        borderRadius: 20,
        elevation: 3,
        alignItems: 'center',
      }}>
      {/*<Image
        style={{
          height: Mixins.scaleHeight(70),
          width: Mixins.scaleHeight(70),
          borderRadius: 100,
          top: Mixins.scaleHeight(10),
        }}></Image>*/}
      <Text style={[Typography.normal, {top: Mixins.scaleHeight(20)}]}>
        {props.productName}
      </Text>
      <Text
        style={[
          Typography.small,
          {top: Mixins.scaleHeight(20), width: Mixins.scaleWidth(80)},
        ]}>
        Price: {props.priceMin} - {props.priceMax}
        {'\n'}MOQ: {props.moq}
        {'\n'}Grade: {props.grade}
      </Text>
      <Modal isVisible={productModal}>
        <ProductPopUp
          setProductModal={setProductModal}
          purchaseOrder={props.purchaseOrder}
          POList={props.POList}
          setPOList={props.setPOList}
          id={props.id}
          user={props.user}></ProductPopUp>
      </Modal>
    </TouchableOpacity>
  );
};

export const MarketplaceList = props => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={props.productList}
      numColumns={2}
      ListEmptyComponent={
        <View
          style={{
            width: Mixins.scaleWidth(330),
            height: Mixins.scaleHeight(420),
            top: Mixins.scaleHeight(30),
            alignItems: 'center',
          }}>
          <Image
            style={{resizeMode: 'cover', width: Mixins.scaleWidth(340)}}
            source={require('_assets/images/produce.png')}></Image>
        </View>
      }
      renderItem={({item}) => {
        return (
          <ProductCard
            productName={item.produce}
            type={item.variety}
            availableQuantity={item.quantity}
            date={item.updatedAt}
            image={item.image}
            priceMin={item.listedPrice}
            priceMax={item.listedPrice}
            farmName={item.farmName} //need to add
            farmLocation={item.farmLocation} //need to add
            availdate={item.delivery} //need to add
            moq={item.moq}
            farmerID={item.farmerID}
            id={item.id}
            purchaseOrder={props.purchaseOrder}
            POList={props.POList}
            setPOList={props.setPOList}
            user={props.user}
          />
        );
      }}
    />
  );
};

const ProductPopUp = props => {
  const [desiredQuantity, setDesiredQuantity] = useState('');
  const [inquirySuccessfulModal, setInquirySuccessfulModal] = useState(false);
  const sendProductInquiry = async () => {
    console.log('creating product inquiry');
    console.log(props.user);
    console.log(props.id);
    console.log(props.purchaseOrder);
    const inquiry = {
      chatGroupID: props.purchaseOrder,
      type: 'inquiry',
      content: props.id,
      sender: props.user.name,
      senderID: props.user.id,
    };
    try {
      const message = await API.graphql({
        query: createMessage,
        variables: {input: inquiry},
      });
      console.log(message.data.createMessage);
      setInquirySuccessfulModal(true);
    } catch {
      e => console.log(e);
    }
  };
  const addToPurchaseOrder = async () => {
    console.log('addingToPO ' + props.purchaseOrder);
    try {
      const added = await API.graphql({
        query: createProducts,
        variables: {
          input: {
            purchaseOrderID: props.purchaseOrder,
            name: props.productName,
            quantity: parseInt(desiredQuantity),
            siUnit: 'kg',
          },
        },
      });
      console.log(added.data.createProducts);
      var poList = props.POList;
      console.log(poList);
      poList.push(added.data.createProducts);
      console.log(poList);
      props.setPOList(poList);
    } catch {
      e => console.log(e);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? -120 : -180
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
          <CloseButton setModal={props.setProductModal}></CloseButton>
        </View>
        <View
          style={{
            left: Mixins.scaleWidth(10),
            top: Mixins.scaleHeight(10),
            position: 'absolute',
            width: Mixins.scaleWidth(270),
            flexDirection: 'row',
          }}>
          <Text style={[Typography.header]}>{props.productName}Ginger</Text>
          <View style={{position: 'absolute', right: Mixins.scaleWidth(10)}}>
            <TouchableOpacity onPress={() => sendProductInquiry()}>
              <Icon name="chatbox-outline" size={Mixins.scaleWidth(25)}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        {/** 
        <Image
          style={{
            top: Mixins.scaleHeight(40),
            height: Mixins.scaleWidth(130),
            width: Mixins.scaleWidth(130),
            borderRadius: 100,
          }}
          source={{uri: ''}}></Image>*/}
        <View
          style={{
            top: Mixins.scaleHeight(160),
            left: Mixins.scaleWidth(20),
            position: 'absolute',
            width: Mixins.scaleWidth(250),
            flexDirection: 'row',
          }}>
          <View
            onPress={() => console.log('navigate')}
            style={{
              width: Mixins.scaleWidth(145),
              flexDirection: 'row',
              flexWrap: 'wrap',
              height: Mixins.scaleHeight(42),
            }}>
            <Rating
              imageSize={Mixins.scaleWidth(25)}
              readonly={true}
              startingValue={3.5}></Rating>
          </View>
          <View
            style={{
              width: Mixins.scaleWidth(105),
              right: Mixins.scaleWidth(0),
            }}>
            <Text
              style={[
                Typography.large,
                {bottom: Mixins.scaleHeight(-3), color: Colors.PALE_BLUE},
              ]}>
              RM 25-18/kg
            </Text>
          </View>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(80),
            width: Mixins.scaleWidth(245),
            height: Mixins.scaleHeight(155),
            backgroundColor: Colors.GRAY_LIGHT,
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text
            style={[
              Typography.small,
              {
                lineHeight: Mixins.scaleHeight(20),
                top: Mixins.scaleHeight(20),
                left: Mixins.scaleWidth(20),
                position: 'absolute',
              },
            ]}>
            Variety:{'\n'}Available:{'\n'}MOQ:{'\n'}Other Details:
          </Text>
          <Text
            style={[
              Typography.small,
              {
                lineHeight: Mixins.scaleHeight(20),
                top: Mixins.scaleHeight(20),
                right: Mixins.scaleWidth(20),
                position: 'absolute',
                textAlign: 'right',
              },
            ]}>
            Variety:{'\n'}Available:{'\n'}MOQ:
          </Text>
          <View
            style={{
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(40),
              backgroundColor: 'white',
              top: Mixins.scaleHeight(100),
            }}></View>
        </View>
        <View
          style={{
            width: Mixins.scaleWidth(260),
            top: Mixins.scaleHeight(120),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={Typography.normal}>Quantity to buy:</Text>
          <TextInput
            keyboardType="number-pad"
            value={desiredQuantity}
            onChangeText={item => setDesiredQuantity(item)}
            style={{
              left: Mixins.scaleWidth(15),
              width: Mixins.scaleWidth(80),
              height:
                Mixins.scaleHeight(
                  25,
                ) /* 20 works for IOS but we need a 25 for android */,
              borderWidth: 1,
              borderRadius: 20,
              textAlign: 'center',
              textAlignVertical: 'bottom',
            }}></TextInput>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            width: Mixins.scaleWidth(250),
            top: Mixins.scaleHeight(75),
          }}></View>

        <View style={{position: 'absolute', bottom: Mixins.scaleHeight(10)}}>
          <TouchableOpacity
            onPress={() => addToPurchaseOrder()}
            style={{
              width: Mixins.scaleWidth(150),
              backgroundColor: Colors.GRAY_LIGHT,
              borderRadius: 20,
              alignItems: 'center',
              flexDirection: 'row',
              height: Mixins.scaleHeight(25),
            }}>
            <View
              style={{
                left: Mixins.scaleWidth(5),
                bottom: Mixins.scaleHeight(1),
              }}>
              <Icon name="add-outline" size={Mixins.scaleWidth(20)}></Icon>
            </View>

            <Text style={[Typography.normal, {left: Mixins.scaleWidth(10)}]}>
              Purchase Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={inquirySuccessfulModal}
        onBackdropPress={() => setInquirySuccessfulModal(false)}>
        <InquirySuccessfulModal />
      </Modal>
    </KeyboardAvoidingView>
  );
};

const InquirySuccessfulModal = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(330),
        width: Mixins.scaleWidth(290),
        backgroundColor: Colors.PALE_GREEN,
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
      <View style={{top: Mixins.scaleHeight(15)}}>
        <Text style={[Typography.header]}>SUCCESS!</Text>
      </View>
      <View
        style={{width: Mixins.scaleWidth(260), top: Mixins.scaleHeight(25)}}>
        <Text
          style={[
            {textAlign: 'center', lineHeight: Mixins.scaleHeight(15)},
            Typography.small,
          ]}>
          You have successfully sent your product inquiry, wait for the supplier
          to get back
        </Text>
      </View>
    </View>
  );
};

export const PurchaseOrderButton = props => {
  const [purchaseOrderModal, setPurchaseOrderModal] = useState(false);

  return (
    <TouchableOpacity
      style={{
        height: Mixins.scaleHeight(40),
        width: Mixins.scaleWidth(130),
        backgroundColor: Colors.PALE_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
      onPress={() => {
        setPurchaseOrderModal(true);
      }}>
      <Text style={[Typography.normal]}>Purchase Order</Text>
      <Modal isVisible={purchaseOrderModal}>
        <PurchaseOrder
          setPurchaseOrderModal={setPurchaseOrderModal}
          POList={props.POList}
          setPOList={props.setPOList}
          user={props.user}
          purchaseOrder={props.purchaseOrder}
          storeName={props.storeName}></PurchaseOrder>
      </Modal>
    </TouchableOpacity>
  );
};

const PurchaseOrder = props => {
  const [poSuccessfulModal, setpoSuccessfulModal] = useState(false);
  const sendPO = async () => {
    const chatGroups = props.user.retailerCompany.chatGroups.items;
    const chatGroupExists = chatGroups.filter(
      item => item.id == props.purchaseOrder,
    );

    const inquiry = {
      chatGroupID: props.purchaseOrder,
      type: 'purchaseorder',
      content: props.purchaseOrder,
      sender: props.user.name,
      senderID: props.user.id,
    };
    if (!chatGroupExists.length) {
      console.log(chatGroupExists + 'chat group does not exist');
      try {
        const chatGroup = {
          id: props.purchaseOrder,
          name: props.user.retailerCompany.name + '+' + props.storeName,
          retailerID: props.user.retailerCompany.id,
          supplierID: props.purchaseOrder.slice(36, 72),
        };
        console.log(chatGroup);
        const createdChatGroup = await API.graphql({
          query: createChatGroup,
          variables: {input: chatGroup},
        });
        console.log(createdChatGroup);
      } catch {
        e => console.log(e);
      }
    } else {
      console.log(chatGroupExists + 'chat group already exist');
      try {
        const updateChat = await API.graphql({
          query: updateChatGroup,
          variables: {
            input: {
              id: props.purchaseOrder,
              mostRecentMessage: 'Purchase Order',
              mostRecentMessageSender: props.user.name,
            },
          },
        });
      } catch {
        e => console.log(e);
      }
    }

    console.log('creating product inquiry');
    try {
      const message = await API.graphql({
        query: createMessage,
        variables: {input: inquiry},
      });
      console.log(message.data.createMessage);

      setpoSuccessfulModal(true);
    } catch {
      e => console.log(e);
    }
  };
  return (
    <View
      style={{
        height: Mixins.scaleHeight(500),
        width: Mixins.scaleWidth(320),
        backgroundColor: Colors.GRAY_LIGHT,
        borderRadius: 10,
        left: Mixins.scaleWidth(0),
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Text
          style={[
            Typography.large,
            {
              fontFamily: 'Poppins-SemiBold',
              top: Mixins.scaleHeight(15),
            },
          ]}>
          Purchase Order For
        </Text>
        <Text
          style={[
            Typography.header,
            {
              fontFamily: 'Poppins-Bold',
              color: Colors.LIME_GREEN,
              top: Mixins.scaleHeight(10),
            },
          ]}>
          {props.storeName}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.GRAY_WHITE,
          height: Mixins.scaleHeight(220),
          top: Mixins.scaleHeight(30),
          borderRadius: 10,
        }}>
        <PurchaseOrderList
          POList={props.POList}
          setPOList={props.setPOList}></PurchaseOrderList>
      </View>
      <TouchableOpacity
        style={{
          bottom: Mixins.scaleHeight(15),
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(200),
          alignItems: 'center',
          justifyContent: 'center',
          height: Mixins.scaleHeight(35),
          borderRadius: 10,
          shadowColor: 'grey',
          shadowOffset: {width: 0, height: 3},
          shadowOpacity: 3,
          shadowRadius: 5,
          position: 'absolute',
        }}
        onPress={() => sendPO()}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[Typography.normal]}>Send P.O. To Supplier</Text>
          <View style={{right: Mixins.scaleWidth(-10)}}>
            <Icon
              name="paper-plane-outline"
              size={Mixins.scaleWidth(20)}></Icon>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(-10),
          top: Mixins.scaleHeight(-10),
        }}>
        <CloseButton setModal={props.setPurchaseOrderModal} />
      </View>
      <Modal
        isVisible={poSuccessfulModal}
        onBackdropPress={() => setpoSuccessfulModal(false)}>
        <POSuccessfulModal />
      </Modal>
    </View>
  );
};

const POSuccessfulModal = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(330),
        width: Mixins.scaleWidth(290),
        backgroundColor: Colors.PALE_GREEN,
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
      <View style={{top: Mixins.scaleHeight(15)}}>
        <Text style={[Typography.header]}>SUCCESS!</Text>
      </View>
      <View
        style={{width: Mixins.scaleWidth(260), top: Mixins.scaleHeight(25)}}>
        <Text
          style={[
            {textAlign: 'center', lineHeight: Mixins.scaleHeight(15)},
            Typography.small,
          ]}>
          You have successfully sent your purchase order, wait for the supplier
          to get back
        </Text>
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
          width: Mixins.scaleWidth(200),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={props.POList}
      numColumns={1}
      ItemSeparatorComponent={Seperator}
      ListEmptyComponent={
        <View
          style={{
            width: Mixins.scaleWidth(330),
            height: Mixins.scaleHeight(420),
            top: Mixins.scaleHeight(30),
            alignItems: 'center',
          }}>
          <Text>PO is empty, start by adding a product from this store</Text>
        </View>
      }
      renderItem={({item}) => {
        return (
          <PurchaseOrderComponent
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            variety={item.variety}
            grade={item.grade}
            siUnit={item.siUnit}
            setPOList={props.setPOList}
            POList={props.POList}
          />
        );
      }}
    />
  );
};

const PurchaseOrderComponent = props => {
  const deleteItemFromPO = async () => {
    console.log('deleting item: ' + props.id);
    try {
      const deleted = await API.graphql({
        query: deleteProducts,
        variables: {input: {id: props.id}},
      });
      var poList = props.POList;
      const tempList = poList.filter(item => item.id !== props.id);
      console.log(tempList);
      props.setPOList(tempList);
      console.log(deleted.data.deleteProducts);
    } catch {
      e => console.log(e);
    }
  };
  return (
    <View
      style={{
        height: Mixins.scaleHeight(40),

        width: Mixins.scaleWidth(300),
        backgroundColor: 'red',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text
            style={[
              Typography.normal,
              {position: 'absolute', left: Mixins.scaleWidth(5)},
            ]}>
            {props.name}
          </Text>
          <Text
            style={[
              Typography.normal,
              {
                position: 'absolute',
                left: Mixins.scaleWidth(5),
                top: Mixins.scaleWidth(20),
              },
            ]}>
            Grade: {props.name}
          </Text>
          <Text
            style={[
              Typography.normal,
              {
                position: 'absolute',
                left: Mixins.scaleWidth(70),
                top: Mixins.scaleWidth(20),
              },
            ]}>
            Variety: {props.name}
          </Text>
          <Text
            style={[
              Typography.large,
              {
                position: 'absolute',
                left: Mixins.scaleWidth(180),
                top: Mixins.scaleHeight(10),
              },
            ]}>
            {props.quantity}kg
          </Text>
        </View>

        <TouchableOpacity
          style={{position: 'absolute', right: Mixins.scaleWidth(40)}}>
          <Icon name="create-outline" size={Mixins.scaleWidth(25)} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteItemFromPO()}
          style={{position: 'absolute', right: Mixins.scaleWidth(5)}}>
          <Icon
            name="trash-outline"
            size={Mixins.scaleWidth(25)}
            color={Colors.FAIL}
          />
        </TouchableOpacity>
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
