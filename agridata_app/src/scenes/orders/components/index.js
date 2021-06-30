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
//import {PDFDocument} from 'pdf-lib';

const logoUri = Image.resolveAssetSource(logo).uri;

export const OrderList = props => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.OrderList}
        numColumns={1}
        renderItem={item => {
          return <Order user={item.name} />;
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
            <Icon name="clipboard-outline" size={Mixins.scaleWidth(40)} />
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            width: 0,
            height: Mixins.scaleHeight(50),
            borderRightWidth: 1,
            borderColor: Colors.GRAY_DARK,
          }}></View>
        <View
          style={{
            justifyContent: 'center',
            width: Mixins.scaleWidth(180),
          }}>
          <Text
            style={[
              Typography.small,
              {fontFamily: 'Poppins-SemiBold', left: Mixins.scaleWidth(40)},
            ]}>
            {'\u26AC'} XXXXXXXXXXXX
          </Text>
          <Text style={[Typography.small, {left: Mixins.scaleWidth(40)}]}>
            {'\u26AC'} Company Name
            {'\n'}
            {'\u26AC'} Date
            {'\n'}
            {'\u26AC'} Invoice Amount
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

const InvoiceModal = props => {
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
        <CloseButton setModal={props.setInvoiceModal} />
      </View>
      <Text
        style={[
          Typography.header,
          {
            position: 'absolute',
            top: Mixins.scaleHeight(30),
            left: Mixins.scaleWidth(20),
          },
        ]}>
        Invoice NUMXXXX
      </Text>
      <Text
        style={[
          Typography.placeholder,
          {
            position: 'absolute',
            right: Mixins.scaleWidth(20),
            top: Mixins.scaleHeight(55),
          },
        ]}>
        DD-MM-YY
      </Text>
      <Text
        style={
          ([Typography.normal],
          {
            position: 'absolute',
            top: Mixins.scaleHeight(55),
            left: Mixins.scaleWidth(20),
          })
        }>
        Company Name
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          width: Mixins.scaleWidth(250),
          alignSelf: 'center',
          top: Mixins.scaleHeight(80),
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <View style={{top: Mixins.scaleHeight(90)}}>
        <View
          style={{
            width: Mixins.scaleWidth(320),
            maxHeight: Mixins.scaleHeight(320),
          }}>
          <FlatList
            keyExtractor={item => item.id}
            data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
            numColumns={1}
            ItemSeparatorComponent={Seperator}
            renderItem={item => {
              return <InvoiceItem user={item.name} />;
            }}
          />
        </View>
        <Text
          style={[
            Typography.normal,
            {
              fontFamily: 'Poppins-SemiBold',
              left: Mixins.scaleWidth(200),
              marginTop: Mixins.scaleHeight(10),
            },
          ]}>
          TOTAL: RM XXX
        </Text>
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: Colors.LIGHT_BLUE,
          width: Mixins.scaleWidth(85),
          height: Mixins.scaleHeight(30),
          bottom: Mixins.scaleHeight(30),
          right: Mixins.scaleHeight(20),
          elevation: 3,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => createPDF()}>
        <Text style={[Typography.normal, {left: Mixins.scaleWidth(15)}]}>
          PDF
        </Text>
        <View style={{position: 'absolute', right: Mixins.scaleWidth(15)}}>
          <Icon name="cloud-download-outline" size={Mixins.scaleWidth(20)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          backgroundColor: Colors.PALE_GREEN,
          width: Mixins.scaleWidth(85),
          height: Mixins.scaleHeight(30),
          bottom: Mixins.scaleHeight(30),
          right: Mixins.scaleHeight(120),
          elevation: 3,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => createCSV()}>
        <Text style={[Typography.normal, {left: Mixins.scaleWidth(15)}]}>
          CSV
        </Text>
        <View style={{position: 'absolute', right: Mixins.scaleWidth(15)}}>
          <Icon name="cloud-download-outline" size={Mixins.scaleWidth(20)} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const InvoiceItem = props => {
  return (
    <View
      style={{
        width: Mixins.scaleWidth(300),
        height: Mixins.scaleHeight(35),
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={[
          Typography.small,
          {position: 'absolute', left: Mixins.scaleWidth(10)},
        ]}>
        Product Name
      </Text>
      <Text
        style={[
          Typography.small,
          {position: 'absolute', left: Mixins.scaleWidth(100)},
        ]}>
        |XXXkg
      </Text>
      <Text
        style={[
          Typography.small,
          {position: 'absolute', left: Mixins.scaleWidth(145)},
        ]}>
        @ RM8/kg
      </Text>
      <Text
        style={[
          Typography.small,
          {
            position: 'absolute',
            right: Mixins.scaleWidth(10),
            fontFamily: 'Poppins-SemiBold',
          },
        ]}>
        RM XXX
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
    RNFS.unlink(filePath);
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
    RNFS.unlink(file);
  } catch (error) {
    console.log('Error1: ', error);
    RNFS.unlink(file);
  }
};
