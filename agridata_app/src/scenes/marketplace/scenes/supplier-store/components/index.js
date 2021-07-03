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
import {
  CloseButton,
  AddButton,
  SuccessfulModal,
  UnsuccessfulModal,
} from '_components';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Modal from 'react-native-modal';
import {Rating} from 'react-native-ratings';
import {ChatButton} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  deleteProductListing,
  updateProductListing,
  createProductListing,
} from '../../../../../graphql/mutations';
import {API} from 'aws-amplify';
import {DismissKeyboardView} from '_components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ProductPopUp = props => {
  const addListing = async () => {
    const newListing = await API.graphql({
      query: createProductListing,
      variables: {input: {supplierID: props.id}},
    });
    var products = props.productList;
    for (let [i, product] of products.entries()) {
      if (product.id == props.id) {
        products.splice(i, 1);
      }
    }
    props.setProducts(products);
  };
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
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      mediaType: 'photo',
      maxWidth: 256,
      maxHeight: 256,
    };

    launchImageLibrary(options, response => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let photo = {uri: response.uri};
        console.log({photo});
        console.log(response.assets[0].uri);
        setImageSource(response.assets[0].uri);
      }
    });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? 100 : -180
      } /* Keyboard Offset needs to be tested against multiple phones */
    >
      <View
        style={{
          height: hp('90%'),
          width: wp('90%'),
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <View
          style={{
            position: 'absolute',
            right: wp('1%'),
            top: hp('1%'),
          }}>
          <CloseButton setModal={props.setAddItemsButton} />
        </View>

        <View
          style={{
            top: hp('4%'),

            alignItems: 'center',
            width: wp('90%'),
          }}>
          <View
            style={{
              borderWidth: 1,
              width: wp('35%'),
              height: wp('35%'),
              borderRadius: 100,
              borderStyle: 'dashed',
            }}>
            {imageSource === null ? (
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    selectImage();
                  }}
                  style={{left: wp('1%'), bottom: hp('1%')}}>
                  <Icon name="add-outline" size={wp('35%')} />
                </TouchableOpacity>
                <Text style={[Typography.large]}>Add Photo</Text>
              </View>
            ) : (
              <View>
                <Image
                  source={{uri: imageSource}}
                  style={{
                    resizeMode: 'cover',
                    width: wp('35%'),
                    height: wp('35%'),
                    borderRadius: 100,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    selectImage();
                  }}
                  style={{
                    borderRadius: 100,
                    height: hp('5%'),
                    width: wp('10%'),
                    backgroundColor: Colors.LIGHT_BLUE,
                    bottom: hp('4%'),
                    left: wp('25%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOffset: {
                      width: 1,
                      height: 1,
                    },
                    shadowOpacity: 2,
                    shadowRadius: 3,
                    shadowColor: 'grey',
                  }}>
                  <Icon type="ionicon" name="pencil" size={25} />
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/*<View>
            <Text
            style={
              ([Typography.small],
              {
                color: Colors.GRAY_DARK,
                top: Mixins.scaleHeight(130),
                left: Mixins.scaleWidth(45),
              })
            }>
            You can only add up to 8 images
          </Text>
          </View>*/}
        </View>
        <View
          style={{
            top: hp('12%'),
            backgroundColor: Colors.GRAY,
            height: hp('45%'),
            width: wp('80%'),
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
            style={([Typography.normal], {left: wp('6%'), top: hp('1.5%')})}>
            Enter product details
          </Text>
          <View
            style={{
              left: wp('6%'),
              top: hp('2%'),
            }}>
            <TextInput
              keyboardType="default"
              placeholder="Product Name"
              underlineColorAndroid="transparent"
              style={{
                left: wp('1%'),
                backgroundColor: 'white',
                width: wp('65%'),
                height: hp('6%'),
                borderRadius: 3,
                justifyContent: 'center',
                marginBottom: hp('1%'),
                marginTop: hp('0.5%'),
                borderBottomColor: 'black',
                color: 'black',
              }}></TextInput>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  Typography.large,
                  {bottom: hp('0.5%'), marginRight: wp('1%'), left: wp('1%')},
                ]}>
                RM
              </Text>
              <TextInput
                keyboardType="default"
                placeholder=" Min Price"
                underlineColorAndroid="transparent"
                style={{
                  left: wp('3%'),
                  backgroundColor: 'white',
                  width: wp('22.3%'),
                  height: hp('6%'),
                  borderRadius: 3,
                  justifyContent: 'center',
                  marginBottom: hp('1%'),
                  borderBottomColor: 'black',
                  color: 'black',
                }}></TextInput>
              <View
                style={{
                  width: wp('3%'),
                  borderWidth: wp('0.2%'),
                  borderColor: 'black',
                  bottom: hp('1%'),
                  left: wp('7%'),
                  zIndex: 10,
                }}></View>
              <TextInput
                keyboardType="default"
                placeholder=" Max Price"
                underlineColorAndroid="transparent"
                style={{
                  left: wp('11%'),
                  backgroundColor: 'white',
                  width: wp('22.3%'),
                  height: hp('6%'),
                  borderRadius: 3,
                  justifyContent: 'center',
                  marginBottom: hp('1%'),
                  borderBottomColor: 'black',
                  color: 'black',
                }}></TextInput>
            </View>
            <TextInput
              keyboardType="default"
              placeholder="Variety"
              underlineColorAndroid="transparent"
              style={{
                backgroundColor: 'white',
                width: wp('65%'),
                height: hp('6%'),
                borderRadius: 3,
                justifyContent: 'center',
                marginBottom: hp('1%'),
                left: wp('1%'),
                borderBottomColor: 'black',
                color: 'black',
              }}></TextInput>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TextInput
                keyboardType="default"
                placeholder="Quantity Available"
                underlineColorAndroid="transparent"
                style={{
                  left: wp('1%'),
                  backgroundColor: 'white',
                  width: wp('40%'),
                  height: hp('6%'),
                  borderRadius: 3,
                  justifyContent: 'center',
                  marginBottom: hp('1%'),
                  borderBottomColor: 'black',
                  color: 'black',
                }}></TextInput>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                keyboardType="default"
                placeholder="Minimum Order"
                underlineColorAndroid="transparent"
                style={{
                  left: wp('1%'),
                  backgroundColor: 'white',
                  width: wp('40%'),
                  height: hp('6%'),
                  borderRadius: 3,
                  justifyContent: 'center',
                  marginBottom: hp('1%'),
                  borderBottomColor: 'black',
                  color: 'black',
                }}></TextInput>
              <View style={{marginLeft: 10, bottom: hp('3%')}}>
                <DropDownPicker
                  open={open2}
                  value={value2}
                  items={items2}
                  setOpen={setOpen2}
                  setValue={setValue2}
                  setItems={setItems2}
                  defaultValue="kg"
                  style={{
                    width: wp('24%'),
                    height: hp('5%'),
                    borderRadius: 3,
                    borderColor: 'white',
                  }}
                  dropDownContainerStyle={{borderWidth: 0}}
                  placeholder="kg"
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: hp('5%'),
            height: hp('7%'),
            width: wp('37%'),
            backgroundColor: Colors.LIGHT_BLUE,
            borderRadius: 10,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 5,
            shadowRadius: 3,
            shadowColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            top: hp('15%'),
            flexDirection: 'row',
          }}>
          <Text style={[Typography.normal]}>Add Product{'\t'}</Text>
          <Icon name="add-circle-outline" size={wp('5%')} />
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
        height: hp('8%'),
        width: wp('30%'),
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
      onPress={() => setAddItemsButton(true)}>
      <Text style={[Typography.large]}>Add Items</Text>
      <Modal isVisible={addItemsButton}>
        <ProductPopUp
          setAddItemsButton={setAddItemsButton}
          user={props.user}
          setProducts={props.setProducts}></ProductPopUp>
      </Modal>
    </TouchableOpacity>
  );
};

export const ProductModal = props => {
  const [lowPrice, setLowPrice] = useState('5'); //props.item.priceMin.toString()
  const [highPrice, setHighPrice] = useState('7'); //props.item.priceMax.toString()
  const [available, setAvailable] = useState('20'); //props.item.availableQuantity.toString()
  const [moq, setMOQ] = useState('123'); //props.item.moq.toString()

  const [successfulModal, setSuccessfulModal] = useState(false);
  const [unsuccessfulModal, setUnsuccessfulModal] = useState(false);

  const deleteListing = async () => {
    const deletedListing = await API.graphql({
      query: deleteProductListing,
      variables: {input: {id: props.item.id}},
    });
    var products = props.productList;
    for (let [i, product] of products.entries()) {
      if (product.id == props.item.id) {
        products.splice(i, 1);
      }
    }
    props.setProducts(products);
  };
  const updateListing = async () => {
    console.log(props);
    const updatedListing = await API.graphql({
      query: updateProductListing,
      variables: {
        input: {
          id: props.item.id,
          lowPrice: parseFloat(lowPrice),
          highPrice: parseFloat(highPrice),
          quantityAvailable: parseInt(available),
          minimumQuantity: parseInt(moq),
          productName: props.item.productName,
        },
      },
    });
    var products = props.productList;
    for (let [i, product] of products.entries()) {
      if (product.id == props.item.id) {
        products.splice(i, 1);
      }
    }
    products.push(updatedListing.data.updateProductListing);
    props.setProducts(products);
    setSuccessfulModal(true);
  };

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'position'}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? Mixins.scaleHeight(-230) : -180
        } /* Keyboard Offset needs to be tested against multiple phones */
      >
        <View
          style={{
            height: hp('90%'),
            width: wp('90%'),
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            /* taking into account the margin from Product Card */
          }}>
          <View
            style={{
              position: 'absolute',
              right: wp('1%'),
              top: hp('1%'),
            }}>
            <CloseButton setModal={props.setProductModal}></CloseButton>
          </View>
          <View
            style={{top: hp('5%'), alignSelf: 'flex-start', left: wp('5%')}}>
            <Text style={[Typography.welcome]}>Banana</Text>
            {/*{props.item.productName} */}
          </View>
          <View style={{top: hp('5%')}}>
            <Image
              source={require('_assets/images/produce.png')}
              style={{
                resizeMode: 'contain',
                width: wp('50%'),
                height: hp('30%'),
              }}
            />
          </View>
          <View
            style={{
              top: hp('5%'),
              backgroundColor: Colors.GRAY_LIGHT,
              borderRadius: 15,
              width: wp('80%'),
              height: hp('30%'),
              alignItems: 'center',
              zIndex: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 3,
            }}>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                margin: wp('1%'),
              }}>
              <View style={{margin: wp('1%')}}>
                <Text>Edit Product Details</Text>
              </View>
              <View
                style={{
                  margin: wp('1%'),
                }}>
                <Text>Price Range</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: wp('25%'),
                    height: hp('4%'),
                    margin: wp('1%'),
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      left: wp('3%'),
                      height: hp('6%'),
                      borderBottomColor: 'black',
                      color: 'black',
                    }}
                    value={lowPrice}
                    onChangeText={item => setLowPrice(item)}></TextInput>
                </View>
                <Text style={{top: hp('1%')}}>-</Text>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: wp('25%'),
                    height: hp('4%'),
                    margin: wp('1%'),
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      left: wp('3%'),
                      height: hp('6%'),
                      borderBottomColor: 'black',
                      color: 'black',
                    }}
                    value={highPrice}
                    onChangeText={item => setHighPrice(item)}></TextInput>
                </View>
              </View>

              <View
                style={{
                  margin: wp('1%'),
                  flexDirection: 'row',
                }}>
                <Text style={{top: hp('1%')}}>Available</Text>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: wp('18%'),
                    height: hp('4%'),
                    margin: wp('1%'),
                    justifyContent: 'center',
                    borderRadius: 5,
                    left: wp('2%'),
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      left: wp('3%'),
                      height: hp('6%'),
                      borderBottomColor: 'black',
                      color: 'black',
                    }}
                    value={available}
                    onChangeText={item => setAvailable(item)}></TextInput>
                </View>
                <Text
                  style={{
                    top: hp('1%'),
                    left: wp('5%'),
                  }}>
                  kg
                </Text>
              </View>

              <View
                style={{
                  margin: wp('1%'),
                  flexDirection: 'row',
                }}>
                <Text style={{top: hp('1%')}}>MOQ</Text>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: wp('18%'),
                    height: hp('4%'),
                    margin: wp('1%'),
                    justifyContent: 'center',
                    borderRadius: 5,
                    left: wp('2%'),
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      left: wp('2%'),
                      height: hp('6%'),
                      borderBottomColor: 'black',
                      color: 'black',
                    }}
                    value={moq}
                    onChangeText={item => setMOQ(item)}></TextInput>
                </View>
                <Text
                  style={{
                    top: hp('1%'),
                    left: wp('5%'),
                  }}>
                  kg
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => updateListing()}
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: wp('30%'),
              height: hp('5%'),
              borderRadius: 10,
              top: hp('9%'),
              zIndex: 0,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[Typography.small]}>Edit Listing</Text>
              <Icon
                name="create-outline"
                size={wp('5%')}
                style={{left: wp('3%')}}></Icon>
            </View>
          </TouchableOpacity>
          <Modal
            isVisible={successfulModal}
            onBackdropPress={() => setSuccessfulModal(false)}>
            <SuccessfulModal setSuccessfulModal={setSuccessfulModal} />
          </Modal>

          <TouchableOpacity
            onPress={() => setUnsuccessfulModal(true)}
            style={{
              backgroundColor: Colors.LIGHT_RED,
              width: wp('40%'),
              height: hp('5%'),
              borderRadius: 10,
              top: hp('10%'),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[Typography.small]}>Remove Listing</Text>
              <Icon
                name="remove-circle-outline"
                size={wp('5%')}
                style={{left: wp('3%')}}></Icon>
            </View>
          </TouchableOpacity>
          <Modal
            isVisible={unsuccessfulModal}
            onBackdropPress={() => setUnsuccessfulModal(false)}>
            <UnsuccessfulModal setUnsuccessfulModal={setUnsuccessfulModal} />
          </Modal>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const ProductCard = props => {
  const [productModal, setProductModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setProductModal(true)}
      style={{
        backgroundColor: Colors.GRAY_LIGHT,
        width: wp('36%'),
        height: hp('25%'),
        margin: wp('5%'),
        borderRadius: 20,
        elevation: 3,
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: wp('18%'),
          width: wp('18%'),
          borderRadius: 100,
          top: hp('2%'),
        }}></Image>
      <Text style={[Typography.normal, {top: hp('3%')}]}>
        Banana{/*{props.productName}*/}
      </Text>
      <Text style={[Typography.small, {top: hp('3%'), width: wp('30%')}]}>
        Price: {props.priceMin} - {props.priceMax}
        {'\n'}MOQ: {props.moq}
        {'\n'}Quantity: {props.availableQuantity}
      </Text>
      <Modal isVisible={productModal}>
        <ProductModal
          setProducts={props.setProducts}
          productList={props.productList}
          setProductModal={setProductModal}
          item={props}></ProductModal>
      </Modal>
    </TouchableOpacity>
  );
};

export const SupplierplaceList = props => {
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={props.refreshing}
          onRefresh={props.onRefresh}
        />
      }
      keyExtractor={item => item.id}
      data={props.productList}
      numColumns={2}
      ListEmptyComponent={
        <View
          style={{
            width: wp('80%'),
            height: hp('15%'),
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.LIGHT_BLUE,
          }}>
          <Text
            style={[
              Typography.large,
              {
                textAlign: 'center',
                width: wp('70%'),
              },
            ]}>
            You have 0 item in your store right now, start adding them by
            clicking on the button
          </Text>
        </View>
      }
      renderItem={({item}) => {
        return (
          <ProductCard
            setProducts={props.setProducts}
            productList={props.productList}
            productName={item.productName}
            type={item.variety}
            availableQuantity={item.quantityAvailable}
            date={item.updatedAt}
            image={item.productPicture}
            priceMin={item.lowPrice}
            priceMax={item.highPrice}
            moq={item.minimumQuantity}
            farmerID={item.supplierID}
            id={item.id}
          />
        );
      }}
    />
  );
};
