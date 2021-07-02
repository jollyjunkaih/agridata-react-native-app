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
import {API, Storage} from 'aws-amplify';

export const ProductPopUp = props => {
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
  const [productName, setProductName] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setmaxPrice] = useState('');
  const [moq, setMOQ] = useState('');
  const [variety, setVariety] = useState('');
  const [grade, setGrade] = useState('');

  async function addListing() {
    try {
      if (imageSource) {
        const response = await fetch(imageSource);
        const blob = await response.blob();
        console.log('FileName: \n');
        photo.fileName =
          selected + '_' + variety + '_' + user.attributes.nickname;
        await Storage.put(photo.fileName, blob, {
          contentType: 'image/jpeg',
        });
        console.log('image passed');
      }
      const response = await API.graphql({
        query: createProductListing,
        variables: {input: {supplierID: props.supplierID, productName}},
      });
      var products = props.productList;
      for (let [i, product] of products.entries()) {
        if (product.id == props.id) {
          products.splice(i, 1);
        }
      }
      props.setProducts(products);
      console.log('Response :\n');
      console.log(response);
      setsuccessModal(true);
    } catch (e) {
      console.log(e);
    }
  }

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
        Platform.OS === 'ios' ? 250 : -180
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
      <View>
        <View
          style={{
            alignItems: 'center',

            width: Mixins.scaleWidth(200),
            height: Mixins.scaleHeight(0),
          }}>
          <View
            style={{
              borderWidth: 0.5,
              width: Mixins.scaleWidth(100),
              height: Mixins.scaleWidth(100),
              borderRadius: 100,
              top: Mixins.scaleHeight(30),
              right: Mixins.scaleWidth(-50),
            }}>
            {imageSource === null ? (
              <TouchableOpacity
                onPress={() => {
                  selectImage();
                }}>
                <Icon
                  name="add-outline"
                  size={150}
                  style={{
                    width: Mixins.scaleWidth(150),
                    height: Mixins.scaleWidth(150),
                    borderRadius: 100,
                    top: Mixins.scaleHeight(-20),
                    left: Mixins.scaleWidth(-15),
                  }}
                  source={require('_assets/images/agridata.png')}
                />
              </TouchableOpacity>
            ) : (
              <View>
                <Image
                  source={{uri: imageSource}}
                  style={{
                    resizeMode: 'cover',
                    width: Mixins.scaleWidth(100),
                    height: Mixins.scaleWidth(100),
                    borderRadius: 100,
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    selectImage();
                  }}
                  style={{
                    borderRadius: 100,
                    height: Mixins.scaleWidth(40),
                    width: Mixins.scaleWidth(40),
                    backgroundColor: Colors.LIGHT_BLUE,
                    bottom: Mixins.scaleWidth(30),
                    left: Mixins.scaleWidth(75),
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
        </View>
        <View>
          <Text
            style={[
              Typography.large,
              {
                top: Mixins.scaleHeight(130),
                left: Mixins.scaleWidth(100),
              },
            ]}>
            Add Photo
          </Text>
        </View>
        <View>
          {/*<Text
            style={
              ([Typography.small],
              {
                color: Colors.GRAY_DARK,
                top: Mixins.scaleHeight(130),
                left: Mixins.scaleWidth(45),
              })
            }>
            You can only add up to 8 images
          </Text>*/}
        </View>
      </View>
      <View
        style={{
          top: Mixins.scaleHeight(140),
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
              style={{left: Mixins.scaleWidth(3)}}></TextInput>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text
                style={
                  ([Typography.large],
                  {top: Mixins.scaleHeight(-3), marginRight: 5})
                }>
                RM
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                width: Mixins.scaleWidth(80),
                height: Mixins.scaleHeight(18),
                borderRadius: 3,
                justifyContent: 'center',
                marginBottom: 8,
                marginRight: 10,
              }}>
              <TextInput
                keyboardType="default"
                placeholder=" Min Price"
                style={{left: Mixins.scaleWidth(3)}}></TextInput>
            </View>
            <View
              style={{
                height: 0,
                width: Mixins.scaleWidth(5),
                borderWidth: 1,
                borderColor: 'black',
                bottom: Mixins.scaleHeight(4),
                left: Mixins.scaleWidth(-5),
              }}></View>
            <View
              style={{
                backgroundColor: 'white',
                width: Mixins.scaleWidth(80),
                height: Mixins.scaleHeight(18),
                borderRadius: 3,
                justifyContent: 'center',
                marginBottom: 8,
              }}>
              <TextInput
                keyboardType="default"
                placeholder=" Max Price"
                style={{left: Mixins.scaleWidth(3)}}></TextInput>
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
              placeholder="Variety"
              style={{left: Mixins.scaleWidth(3)}}></TextInput>
          </View>
          <View
            style={{
              flexDirection: 'row',
              zIndex: 1001,
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(25),
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: Mixins.scaleWidth(110),
                height: Mixins.scaleHeight(18),
                borderRadius: 3,
                justifyContent: 'center',
                marginBottom: 8,
              }}>
              <TextInput
                keyboardType="default"
                placeholder="Quantity Available"
                style={{left: Mixins.scaleWidth(3)}}></TextInput>
            </View>
            <View
              style={{
                width: Mixins.scaleWidth(80),
                marginLeft: 10,
                height: Mixins.scaleHeight(20),
              }}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                defaultValue="kg"
                style={{
                  width: Mixins.scaleWidth(80),
                  height: Mixins.scaleHeight(18),

                  borderColor: 'white',
                  borderRadius: 3,
                }}
                containerStyle={{
                  width: Mixins.scaleWidth(80),
                }}
                dropDownContainerStyle={{borderWidth: 0}}
                placeholder="kg"></DropDownPicker>
            </View>
          </View>
          <View style={{flexDirection: 'row', zIndex: 1000}}>
            <View
              style={{
                backgroundColor: 'white',
                width: Mixins.scaleWidth(110),
                height: Mixins.scaleHeight(18),
                borderRadius: 3,
                justifyContent: 'center',
                marginBottom: 8,
              }}>
              <TextInput
                keyboardType="default"
                placeholder="Minimum Order"
                style={{left: Mixins.scaleWidth(3)}}></TextInput>
            </View>
            <View style={{marginLeft: 10}}>
              <DropDownPicker
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                defaultValue="kg"
                style={{
                  width: Mixins.scaleWidth(80),
                  height: Mixins.scaleHeight(18),
                  borderRadius: 3,
                  borderColor: 'white',
                }}
                containerStyle={{
                  width: Mixins.scaleWidth(80),
                }}
                dropDownContainerStyle={{borderWidth: 0}}
                placeholder="kg"
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(60),
              borderRadius: 3,
              zIndex: 10,
            }}>
            <TextInput
              keyboardType="default"
              placeholder="Other Details"
              style={{
                top: Mixins.scaleHeight(5),
                left: Mixins.scaleWidth(3),
              }}></TextInput>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          height: Mixins.scaleHeight(30),
          width: Mixins.scaleWidth(150),
          backgroundColor: Colors.LIGHT_BLUE,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          position: 'absolute',
          bottom: Mixins.scaleHeight(-190),
          right: Mixins.scaleWidth(70),
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 5,
          shadowRadius: 3,
          shadowColor: 'grey',
        }}
        onPress={() => [addListing(), console.log('true')]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[Typography.normal]}> Add Product</Text>
          <View style={{right: Mixins.scaleWidth(-7)}}>
            <Icon name="add-circle-outline" size={20} />
          </View>
        </View>
      </TouchableOpacity>
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
        <ProductPopUp
          setAddItemsButton={setAddItemsButton}
          user={props.user}
          setProducts={props.setProducts}></ProductPopUp>
      </Modal>
    </TouchableOpacity>
  );
};

export const ProductModal = props => {
  const [lowPrice, setLowPrice] = useState(props.item.priceMin.toString());
  const [highPrice, setHighPrice] = useState(props.item.priceMax.toString());
  const [available, setAvailable] = useState(
    props.item.availableQuantity.toString(),
  );
  const [moq, setMOQ] = useState(props.item.moq.toString());

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
        style={{
          height: Mixins.scaleHeight(640),
          width: Mixins.scaleWidth(360),
        }}>
        <View
          style={{
            height: Mixins.scaleHeight(500),
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
            style={{top: Mixins.scaleHeight(25), right: Mixins.scaleWidth(75)}}>
            <Text style={[Typography.normal]}>{props.item.productName}</Text>
          </View>
          <View style={{top: Mixins.scaleHeight(30)}}>
            <Image
              source={require('_assets/images/produce.png')}
              style={{
                resizeMode: 'contain',
                width: Mixins.scaleWidth(150),
                height: Mixins.scaleHeight(120),
              }}
            />
          </View>
          <View
            style={{
              top: Mixins.scaleHeight(30),
              backgroundColor: Colors.GRAY_LIGHT,
              borderRadius: 15,
              width: Mixins.scaleWidth(270),
              height: Mixins.scaleHeight(180),
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
                margin: Mixins.scaleWidth(5),
              }}>
              <View style={{margin: Mixins.scaleWidth(5)}}>
                <Text>Enter Product Details</Text>
              </View>
              <View
                style={{
                  margin: Mixins.scaleWidth(5),
                }}>
                <Text>Price Range</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: Mixins.scaleWidth(80),
                    height: Mixins.scaleHeight(20),
                    margin: Mixins.scaleWidth(5),
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      left: Mixins.scaleWidth(10),
                      height: Mixins.scaleHeight(40),
                      borderBottomColor: 'transparent',
                    }}
                    value={lowPrice}
                    onChangeText={item => setLowPrice(item)}></TextInput>
                </View>
                <Text style={{top: Mixins.scaleHeight(5)}}>-</Text>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: Mixins.scaleWidth(80),
                    height: Mixins.scaleHeight(20),
                    margin: Mixins.scaleWidth(5),
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      left: Mixins.scaleWidth(10),
                      height: Mixins.scaleHeight(40),
                      borderBottomColor: 'transparent',
                    }}
                    value={highPrice}
                    onChangeText={item => setHighPrice(item)}></TextInput>
                </View>
              </View>

              <View
                style={{
                  margin: Mixins.scaleWidth(5),
                  flexDirection: 'row',
                }}>
                <Text style={{top: Mixins.scaleHeight(3)}}>Available</Text>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: Mixins.scaleWidth(60),
                    height: Mixins.scaleHeight(20),
                    margin: Mixins.scaleWidth(5),
                    justifyContent: 'center',
                    borderRadius: 5,
                    left: Mixins.scaleWidth(10),
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      left: Mixins.scaleWidth(10),
                      height: Mixins.scaleHeight(40),
                      borderBottomColor: 'transparent',
                    }}
                    value={available}
                    onChangeText={item => setAvailable(item)}></TextInput>
                </View>
                <Text
                  style={{
                    top: Mixins.scaleHeight(3),
                    left: Mixins.scaleWidth(10),
                  }}>
                  kg
                </Text>
              </View>

              <View
                style={{
                  margin: Mixins.scaleWidth(5),
                  flexDirection: 'row',
                }}>
                <Text style={{top: Mixins.scaleHeight(3)}}>MOQ</Text>
                <View
                  style={{
                    backgroundColor: 'white',
                    width: Mixins.scaleWidth(60),
                    height: Mixins.scaleHeight(20),
                    margin: Mixins.scaleWidth(5),
                    justifyContent: 'center',
                    borderRadius: 5,
                    left: Mixins.scaleWidth(10),
                  }}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={{
                      left: Mixins.scaleWidth(10),
                      height: Mixins.scaleHeight(40),
                      borderBottomColor: 'transparent',
                    }}
                    value={moq}
                    onChangeText={item => setMOQ(item)}></TextInput>
                </View>
                <Text
                  style={{
                    top: Mixins.scaleHeight(3),
                    left: Mixins.scaleWidth(10),
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
              width: Mixins.scaleWidth(120),
              height: Mixins.scaleHeight(30),
              borderRadius: 10,
              top: Mixins.scaleHeight(60),
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
                size={Mixins.scaleWidth(15)}
                style={{left: Mixins.scaleWidth(10)}}></Icon>
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
              width: Mixins.scaleWidth(150),
              height: Mixins.scaleHeight(30),
              borderRadius: 10,
              top: Mixins.scaleHeight(70),
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
                size={Mixins.scaleWidth(15)}
                style={{left: Mixins.scaleWidth(10)}}></Icon>
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
        width: Mixins.scaleWidth(130),
        height: Mixins.scaleHeight(155),
        margin: Mixins.scaleWidth(17.5),
        borderRadius: 20,
        elevation: 3,
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: Mixins.scaleHeight(70),
          width: Mixins.scaleHeight(70),
          borderRadius: 100,
          top: Mixins.scaleHeight(10),
        }}></Image>
      <Text style={[Typography.normal, {top: Mixins.scaleHeight(20)}]}>
        {props.productName}
      </Text>
      <Text
        style={[
          Typography.small,
          {top: Mixins.scaleHeight(20), width: Mixins.scaleWidth(100)},
        ]}>
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
