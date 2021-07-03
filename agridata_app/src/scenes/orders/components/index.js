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
import {InvoiceButton} from '_components';
import Share from 'react-native-share';
import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';
import * as RNFS from 'react-native-fs';
import logo from '_assets/images/agridata.png';
import XLSX from 'xlsx';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Strings from '_utils';
//import {PDFDocument} from 'pdf-lib';

const logoUri = Image.resolveAssetSource(logo).uri;

export const OrderList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.OrderList}
        numColumns={1}
        renderItem={({item}) => {
          return (
            <Order
              id={item.id}
              amount={item.amount}
              companyName={item.companyName}
              createdAt={item.date}
            />
          );
        }}
      />
    </View>
  );
};

const Order = props => {
  const [invoiceModal, setInvoiceModal] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setInvoiceModal(true)}
      style={{
        marginBottom: 10,
        width: wp('90%'),
        height: hp('13%'),
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: Colors.GRAY_LIGHT,
          borderRadius: 10,
          flexDirection: 'row',
          width: wp('85%'),
          height: hp('12%'),
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}>
        <View
          style={{
            backgroundColor: Colors.GRAY_BLACK,
            height: hp('12%'),
            width: wp('2%'),
            borderRadius: 10,
          }}></View>
        <View
          style={{
            backgroundColor: Colors.GRAY_LIGHT,
            height: hp('12%'),
            width: wp('24%'),

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{}}>
            <Icon name="clipboard-outline" size={wp('11%')} />
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: 0,
            height: hp('8%'),
            borderRightWidth: 1,
            borderColor: Colors.GRAY_DARK,
          }}></View>
        <View
          style={{
            top: hp('1%'),
            width: wp('50%'),
          }}>
          <Text
            style={[
              Typography.small,
              {fontFamily: 'Poppins-SemiBold', left: wp('11%')},
            ]}>
            {'\u26AC'} {props.id}
          </Text>
          <Text style={[Typography.small, {left: wp('11%')}]}>
            {'\u26AC'} {props.companyName}
            {'\n'}
            {'\u26AC'} {props.createdAt}
            {'\n'}
            {'\u26AC'} {props.amount}
            {'\n'}
          </Text>
        </View>
      </View>
      <Modal isVisible={invoiceModal}>
        <InvoiceModal setInvoiceModal={setInvoiceModal} invoiceList={props} />
      </Modal>
    </TouchableOpacity>
  );
};

export const SortModal = props => {
  return (
    <View
      style={{
        position: 'absolute',
        right: wp('8%'),
        top: hp('18%'),
        backgroundColor: Colors.GRAY_MEDIUM,
        borderRadius: 5,
        width: wp('53%'),
        height: hp('17%'),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: wp('50%'),
          height: hp('3.3%'),
          borderRadius: 20,
        }}>
        <View style={{left: wp('3.5%'), flexDirection: 'row'}}>
          <Icon name="time-outline" size={wp('6%')} />
          <Icon name="arrow-up-outline" size={wp('4%')} />
        </View>
        <Text style={[Typography.normal, {left: wp('6%')}]}>
          {Strings.oldest}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: wp('50%'),
          height: hp('3.3%'),
          borderRadius: 20,
          marginHorizontal: wp('1.8%'),
          marginTop: hp('0.5%'),
        }}>
        <View style={{left: wp('3.5%'), flexDirection: 'row'}}>
          <Icon name="time-outline" size={wp('6%')} />
          <Icon name="arrow-down-outline" size={wp('4%')} />
        </View>
        <Text style={[Typography.normal, {left: wp('6%')}]}>
          {Strings.latest}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: wp('50%'),
          height: hp('3.3%'),
          borderRadius: 20,
          marginHorizontal: wp('1.8%'),
          marginTop: hp('0.5%'),
        }}>
        <View style={{left: wp('3.5%'), flexDirection: 'row'}}>
          <Icon name="pricetags-outline" size={wp('6%')} />
          <Icon name="arrow-up-outline" size={wp('4%')} />
        </View>
        <Text style={[Typography.normal, {left: wp('6%')}]}>
          {Strings.leastExpensive}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          width: wp('50%'),
          height: hp('3.3%'),
          borderRadius: 20,
          marginHorizontal: wp('1.8%'),
          marginTop: hp('0.5%'),
        }}>
        <View style={{left: wp('3.5%'), flexDirection: 'row'}}>
          <Icon name="pricetags-outline" size={wp('6%')} />
          <Icon name="arrow-down-outline" size={wp('4%')} />
        </View>
        <Text style={[Typography.normal, {left: wp('6%')}]}>
          {Strings.mostExpensive}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const InvoiceModal = props => {
  const Seperator = () => {
    return (
      <View
        style={{
          height: 0,
          borderBottomWidth: 1,
          width: wp('90%'),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
    );
  };
  return (
    <View
      style={{
        width: wp('90%'),
        height: hp('82%'),
        backgroundColor: Colors.GRAY_WHITE,
        borderRadius: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          right: wp('1%'),
          top: hp('1%'),
        }}>
        <CloseButton setModal={props.setInvoiceModal} />
      </View>
      <Text
        style={[
          Typography.header,
          {
            position: 'absolute',
            top: hp('4%'),
            left: wp('5%'),
          },
        ]}>
        {Strings.invoice} #1214
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: wp('5%'),
            top: hp('8%'),
          },
        ]}>
        30 June 2021
      </Text>
      <Text
        style={[
          Typography.normal,
          {
            top: hp('8.5%'),
            left: wp('5%'),
          },
        ]}>
        Matthew's Farm
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: wp('80%'),
          alignSelf: 'center',
          top: hp('13%'),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <View style={{top: hp('14%')}}>
        <View
          style={{
            width: wp('90%'),
            maxHeight: hp('50%'),
          }}>
          <FlatList
            keyExtractor={item => item.id}
            data={[
              {productName: 'Ginger', price: 10, quantity: 40, amount: 400},
              {productName: 'Sawi', price: 3, quantity: 40, amount: 120},
            ]}
            numColumns={1}
            ItemSeparatorComponent={Seperator}
            renderItem={({item}) => {
              return (
                <InvoiceItem
                  productName={item.productName}
                  price={item.price}
                  quantity={item.quantity}
                  amount={item.amount}
                />
              );
            }}
          />
        </View>
        <Text
          style={[
            Typography.normal,
            {
              fontFamily: 'Poppins-SemiBold',
              textAlign: 'right',
              marginTop: hp('2%'),
              right: hp('2%'),
            },
          ]}>
          {Strings.total}: RM 600
        </Text>
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: Colors.LIGHT_BLUE,
          width: wp('23%'),
          height: hp('5%'),
          bottom: hp('5%'),
          right: wp('7%'),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => createPDF()}>
        <Text style={[Typography.normal, {left: wp('3%')}]}>PDF</Text>
        <View style={{position: 'absolute', right: wp('3%')}}>
          <Icon name="cloud-download-outline" size={wp('5.5%')} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: Colors.PALE_GREEN,
          width: wp('23%'),
          height: hp('5%'),
          bottom: hp('5%'),
          right: wp('35%'),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => createCSV()}>
        <Text style={[Typography.normal, {left: wp('3%')}]}>CSV</Text>
        <View style={{position: 'absolute', right: wp('3%')}}>
          <Icon name="cloud-download-outline" size={wp('5.5%')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const InvoiceItem = props => {
  return (
    <View
      style={{
        width: wp('85%'),
        height: hp('6%'),
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <Text style={[Typography.small, {position: 'absolute', left: wp('3%')}]}>
        {props.productName}
      </Text>
      <Text style={[Typography.small, {position: 'absolute', left: wp('25%')}]}>
        |{props.quantity}kg
      </Text>
      <Text style={[Typography.small, {position: 'absolute', left: wp('40%')}]}>
        @ RM{props.price}/kg
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            right: wp('3%'),
          },
        ]}>
        RM {props.amount}
      </Text>
    </View>
  );
};

const onShare = async () => {
  const shareOptions = {
    message: 'Share PDF Test',
    url: 'file:///storage/emulated/0/Download/test15.pdf',
  };
  try {
    const ShareResponse = await Share.open(shareOptions);
  } catch (error) {
    console.log('Error: ', error);
  }
};

/*
const writepdf = () => {
  var path = RNFS.DownloadDirectoryPath + '/test14.pdf';
  const pdfPath = '/data/data/com.agridata_app/files/sample.pdf';
  RNFS.moveFile(pdfPath, path)
    .then(success => {
      console.log('File move', path);
      alert('File moved');
    })
    .catch(err => {
      console.log(err.message);
    });
};
*/
const createPDF = async () => {
  const listOfProducts = [
    {name: 'walnut', price: '10', quantity: '150'},
    {name: 'pinkwalnut', price: '10', quantity: '120'},
  ];
  var noProduct = listOfProducts.length;
  var positionY = 2000;
  var positionY2 = 3100;
  var total = 0;
  const page1 = PDFPage.create().setMediaBox(2480, 3508);
  const page2 = PDFPage.create().setMediaBox(2480, 3508);
  page1
    .drawText('Thanks For Your Order!', {
      x: 100,
      y: 3100,
      color: Colors.LIME_GREEN,
      fontName: 'Poppins-Regular',
      fontSize: 150,
    })
    .drawText('Invoice#: 1234567', {
      x: 100,
      y: 2900,
      fontName: 'Poppins-Regular',
      fontSize: 80,
    })
    .drawText('Date : 22-07-2021', {
      x: 1500,
      y: 2900,
      fontName: 'Poppins-Regular',
      fontSize: 80,
    })
    .drawText('Customer Name: City Grocer', {
      x: 100,
      y: 2800,
      fontName: 'Poppins-Regular',
      fontSize: 80,
    })
    .drawText('Supplier Name: City Grocer', {
      x: 100,
      y: 2700,
      fontName: 'Poppins-Regular',
      fontSize: 80,
    })
    .drawRectangle({
      x: 200,
      y: 2400,
      width: 2100,
      height: 0,
    })
    .drawRectangle({
      x: 200,
      y: 2250,
      width: 2100,
      height: 0,
    })
    .drawText('PRODUCT', {
      x: 200,
      y: 2300,
      fontName: 'Poppins-Regular',
      fontSize: 70,
      color: Colors.GRAY_DARK,
    })
    .drawText('QTY.', {
      x: 1000,
      y: 2300,
      fontName: 'Poppins-Regular',
      fontSize: 70,
      color: Colors.GRAY_DARK,
    })
    .drawText('UNIT PRICE', {
      x: 1400,
      y: 2300,
      fontName: 'Poppins-Regular',
      fontSize: 70,
      color: Colors.GRAY_DARK,
    })
    .drawText('AMOUNT', {
      x: 2000,
      y: 2300,
      fontName: 'Poppins-Regular',
      fontSize: 70,
      color: Colors.GRAY_DARK,
    });
  for (let i = 0; i < noProduct; i++) {
    if (i < 6) {
      page1
        .drawText(listOfProducts[i].name, {
          x: 200,
          y: positionY,
          fontName: 'Poppins-Regular',
          fontSize: 70,
        })
        .drawText(listOfProducts[i].quantity + ' kg', {
          x: 1000,
          y: positionY,
          fontName: 'Poppins-Regular',
          fontSize: 70,
        })
        .drawText('RM ' + listOfProducts[i].price + '/kg', {
          x: 1400,
          y: positionY,
          fontName: 'Poppins-Regular',
          fontSize: 70,
        })
        .drawText(
          'RM ' + listOfProducts[i].price * listOfProducts[i].quantity,
          {
            x: 2000,
            y: positionY,
            fontName: 'Poppins-Regular',
            fontSize: 70,
          },
        )
        .drawRectangle({
          x: 200,
          y: positionY - 80,
          width: 2100,
          height: 0,
          color: Colors.GRAY_MEDIUM,
        });
      positionY -= 200;
      total += listOfProducts[i].price * listOfProducts[i].quantity;
    } else {
      page2
        .drawText(listOfProducts[i].name, {
          x: 200,
          y: positionY2,
          fontName: 'Poppins-Regular',
          fontSize: 70,
        })
        .drawText(listOfProducts[i].quantity + ' kg', {
          x: 1000,
          y: positionY2,
          fontName: 'Poppins-Regular',
          fontSize: 70,
        })
        .drawText('RM ' + listOfProducts[i].price + '/kg', {
          x: 1400,
          y: positionY2,
          fontName: 'Poppins-Regular',
          fontSize: 70,
        })
        .drawText(
          'RM ' + listOfProducts[i].price * listOfProducts[i].quantity,
          {
            x: 2000,
            y: positionY2,
            fontName: 'Poppins-Regular',
            fontSize: 70,
          },
        )
        .drawRectangle({
          x: 200,
          y: positionY2 - 80,
          width: 2100,
          height: 0,
          color: Colors.GRAY_MEDIUM,
        });
      positionY2 -= 200;
      total += listOfProducts[i].price * listOfProducts[i].quantity;
    }
  }
  if (noProduct <= 6) {
    page1
      .drawText('Total Cost:', {
        x: 1400,
        y: positionY - 100,
        fontName: 'Poppins-Regular',
        fontSize: 70,
      })
      .drawText('RM ' + total, {
        x: 2000,
        y: positionY - 100,
        fontName: 'Poppins-Regular',
        fontSize: 70,
        color: Colors.LIME_GREEN,
      })
      .drawText('Received By:', {
        x: 2000,
        y: 500,
        fontName: 'Poppins-Regular',
        fontSize: 70,
      })
      .drawRectangle({
        x: 2000,
        y: 200,
        width: 400,
        height: 0,
      });
  } else {
    page2
      .drawText('Total Cost:', {
        x: 1400,
        y: positionY2 - 100,
        fontName: 'Poppins-Regular',
        fontSize: 70,
      })
      .drawText('RM ' + total, {
        x: 2000,
        y: positionY2 - 100,
        fontName: 'Poppins-Regular',
        fontSize: 70,
        color: Colors.LIME_GREEN,
      })
      .drawText('Received By:', {
        x: 2000,
        y: 500,
        fontName: 'Poppins-Regular',
        fontSize: 70,
      })
      .drawRectangle({
        x: 2000,
        y: 200,
        width: 400,
        height: 0,
      });
  }

  //const docsDir = await PDFLib.getDocumentsDirectory();
  //const pdfPath = `${docsDir}/sample.pdf`;
  var filePath = RNFS.DocumentDirectoryPath + '/test16.pdf';
  if (noProduct <= 6) {
    PDFDocument.create(filePath)
      .addPages(page1)
      .write() // Returns a promise that resolves with the PDF's path
      .then(path => {
        console.log('PDF created at: ' + path);
        alert('PDF created');
      })
      .catch(e => {
        alert('PDF fail to create');
      });
  } else {
    PDFDocument.create(filePath)
      .addPages(page1, page2)
      .write() // Returns a promise that resolves with the PDF's path
      .then(path => {
        console.log('PDF created at: ' + path);
        alert('PDF created');
      })
      .catch(e => {
        alert('PDF fail to create');
      });
  }
  const shareOptions = {
    message: 'Share PDF Test',
    url: 'file:///data/user/0/com.agridata_app/files/test16.pdf',
  };
  try {
    const ShareResponse = await Share.open(shareOptions);
    //RNFS.unlink(filePath);
  } catch (error) {
    console.log('Error: ', error);
    RNFS.unlink(filePath);
  }
};

const createCSV = async () => {
  var data = [
    {name: 'walnut', quantity: '100', price: '10', total: '1000'},
    {name: 'pink walnut', quantity: '100', price: '12', total: '1200'},
  ];
  var ws = XLSX.utils.json_to_sheet(data);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Products');
  const wbout = XLSX.write(wb, {
    type: 'binary',
    bookType: 'xlsx',
  });
  var file = RNFS.DocumentDirectoryPath + '/test.xlsx';
  RNFS.writeFile(file, wbout, 'ascii')
    .then(r => {
      console.log('CSV created at: ' + file);
      alert('CSV created');
    })
    .catch(e => {
      alert('CSV failed to create');
    });
  const shareOptions = {
    message: 'Share CSV Test',
    url: 'file:///data/user/0/com.agridata_app/files/test.xlsx',
  };
  try {
    const ShareResponse = await Share.open(shareOptions);
    console.log(ShareResponse);
    //RNFS.unlink(file);
  } catch (error) {
    console.log('Error1: ', error);
    RNFS.unlink(file);
  }
};
