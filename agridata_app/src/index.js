import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, SafeAreaView} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {
  AccountsDashboard,
  RetailManagerDashboard,
  Marketplace,
  Store,
  Inbox,
  ChatRoom,
  EmployeeDashboard,
  OwnerDashboard,
  Orders,
  SupplierStore,
  SupplierTasks,
  RetailerTasks,
} from './scenes';

const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AppNavigator = props => {
  const type = 'retailer-manager';
  //Verified Retailer
  if (type == 'retailer-manager') {
    console.log('Retail Manager \n');
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="dashboard">
          {screenProps => <RetailManagerDashboard {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="marketplace">
          {screenProps => <Marketplace {...screenProps} />}
        </AppStack.Screen>

        <AppStack.Screen name="store">
          {screenProps => <Store {...screenProps} />}
        </AppStack.Screen>

        <AppStack.Screen name="inbox">
          {screenProps => <Inbox {...screenProps} />}
        </AppStack.Screen>

        <AppStack.Screen name="chatroom">
          {screenProps => (
            <ChatRoom {...screenProps} userAttributes={props.userAttributes} />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="orders">
          {screenProps => <Orders {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="tasks">
          {screenProps => <RetailerTasks {...screenProps} />}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  }
  //Not yet verified retailer
  else if (type == 'retailer' && verified == 'false') {
    console.log('Unverified Retailer \n');
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="unverifiedretailerdashboard">
          {screenProps => (
            <UnverifiedRetailerDashboard
              {...screenProps}
              updateAuthState={props.updateAuthState}
              userAttributes={props.userAttributes}
            />
          )}
        </AppStack.Screen>

        <AppStack.Screen name="retailerupdateprofile">
          {screenProps => (
            <RetailerUpdateProfile
              {...screenProps}
              userAttributes={props.userAttributes}
              userToken={props.userToken}
            />
          )}
        </AppStack.Screen>

        <AppStack.Screen name="verification">
          {screenProps => (
            <Verification
              {...screenProps}
              userAttributes={props.userAttributes}
              userToken={props.userToken}
            />
          )}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  }

  //Not yet verified farmer
  else if (type == 'farmer' && verified == 'false') {
    console.log('Unverified Farmer \n');
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="unverifiedfarmerdashboard">
          {screenProps => (
            <UnverifiedFarmerDashboard
              {...screenProps}
              updateAuthState={props.updateAuthState}
              userAttributes={props.userAttributes}
            />
          )}
        </AppStack.Screen>

        <AppStack.Screen name="farmerupdateprofile">
          {screenProps => (
            <FarmerUpdateProfile
              {...screenProps}
              userAttributes={props.userAttributes}
              userToken={props.userToken}
            />
          )}
        </AppStack.Screen>

        <AppStack.Screen name="verification">
          {screenProps => (
            <Verification
              {...screenProps}
              userAttributes={props.userAttributes}
              userToken={props.userToken}
            />
          )}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  }

  //Verified Farmer
  else {
    console.log('Verified Farmer \n');
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="fdashboard">
          {screenProps => (
            <FDashboard
              {...screenProps}
              updateAuthState={props.updateAuthState}
              userAttributes={props.userAttributes}
            />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="forder">
          {screenProps => (
            <FOrder
              {...screenProps}
              updateAuthState={props.updateAuthState}
              userAttributes={props.userAttributes}
            />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="farm">
          {screenProps => (
            <Farm {...screenProps} ID={props.userAttributes.sub} />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="farmerupdateprofile">
          {screenProps => (
            <FarmerUpdateProfile
              {...screenProps}
              userAttributes={props.userAttributes}
              userToken={props.userToken}
            />
          )}
        </AppStack.Screen>

        <AppStack.Screen name="farmerprofilepage">
          {screenProps => (
            <FarmerProfilePage
              {...screenProps}
              updateAuthState={props.updateAuthState}
              userAttributes={props.userAttributes}
            />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="addproduce" component={AddProduce} />
        <AppStack.Screen name="editproduce" component={EditProduce} />
      </AppStack.Navigator>
    );
  }
};

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
