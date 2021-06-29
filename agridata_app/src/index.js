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
  CompanyProfile,
  EditCompany,
  HumanResource,
  PersonalProfile,
  EditPersonal,
  DataAnalytics,
  Registration,
} from './scenes';
import {Login} from '_scenes';

const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AppNavigator = props => {
  const type = 'accounts';
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
  } else if (type == 'accounts') {
    console.log('Accounts \n');
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="dashboard">
          {screenProps => <AccountsDashboard {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="inbox">
          {screenProps => <Inbox {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="chatroom">
          {screenProps => (
            <ChatRoom {...screenProps} userAttributes={props.userAttributes} />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="tasks">
          {screenProps => <SupplierTasks {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="orders">
          {screenProps => <Orders {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="companyprofile">
          {screenProps => <CompanyProfile {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="editcompany">
          {screenProps => <EditCompany {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="humanresource">
          {screenProps => <HumanResource {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="personalprofile">
          {screenProps => <PersonalProfile {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="editpersonal">
          {screenProps => <EditPersonal {...screenProps} />}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  } else if (type == 'owner') {
    console.log('Owner \n');
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="dashboard">
          {screenProps => <OwnerDashboard {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="orders">
          {screenProps => <Orders {...screenProps} />}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  } else if (type == 'retailer-employee') {
    console.log('Retailer Employee \n');
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="dashboard">
          {screenProps => <EmployeeDashboard {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="tasks">
          {screenProps => <RetailerTasks {...screenProps} />}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  }
};

/*const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};*/

const App = () => {
  return <DataAnalytics></DataAnalytics>;
};

export default App;
