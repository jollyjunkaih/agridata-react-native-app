import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
  SupplierDashboard,
  Login,
} from './scenes';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';
import {View, ActivityIndicator} from 'react-native';
import {signIn} from './utils/api/auth';

Amplify.configure(config);

const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthenticationNavigator = props => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="landing" component={Landing} />
      <AuthenticationStack.Screen name="signin">
        {screenProps => (
          <SignIn
            {...screenProps}
            updateAuthState={props.updateAuthState}
            updateUserAttributes={props.updateUserAttributes}
          />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="signup" component={SignUp} />
      <AuthenticationStack.Screen
        name="confirmsignup"
        component={ConfirmSignUp}
      />
    </AuthenticationStack.Navigator>
  );
};

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
  } else if (type == 'general-manager') {
    console.log('General Manager \n');
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
        <AppStack.Screen name="chatroom">
          {screenProps => <ChatRoom {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="inbox">
          {screenProps => <Inbox {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="tasks">
          {screenProps => <RetailerTasks {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="dataanalytics">
          {screenProps => <DataAnalytics {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="invoice">
          {screenProps => <Invoice {...screenProps} />}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  } else if (type == 'supplier') {
    console.log('Supplier \n');
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="dashboard">
          {screenProps => <SupplierDashboard {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="store">
          {screenProps => <SupplierStore {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="chatroom">
          {screenProps => <ChatRoom {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="inbox">
          {screenProps => <Inbox {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="tasks">
          {screenProps => <SupplierTasks {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="dataanalytics">
          {screenProps => <DataAnalytics {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="invoice">
          {screenProps => <Invoice {...screenProps} />}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  }
};

const Initializing = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="green" />
    </View>
  );
};
const App = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState('loggedIn');
  signIn('junkaih@test.com', 'test1234');
  /*useEffect(() => {
    checkAuthState();
  }, []);
  async function checkAuthState() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserAttributes(user.attributes);
      console.log('✅ User is signed in');
      setUserToken(user);
      console.log(userToken);
      console.log(userAttributes);
      setUserLoggedIn('loggedIn');
      console.log('Trying to check verification..');
      if (user.attributes['custom:Verified'] == 'true') {
        console.log('User is verified');
      } else {
        try {
          console.log(
            'User is not verified, proceeding to check verification for ' +
              user.attributes.sub,
          );
          var userExtendedAttribute = await API.graphql(
            graphqlOperation(getExtraUserAttributes, {
              id: user.attributes.sub,
            }),
          );
          console.log('User Attribute: ');
          console.log(userExtendedAttribute);
          if (
            userExtendedAttribute.data.getExtraUserAttributes.verified == true
          ) {
            await Auth.updateUserAttributes(user, {
              'custom:Verified': 'true',
            });
          }
        } catch (e) {
          console.log('Verification Error: ');
          console.log(e);
        }
      }
    } catch (err) {
      console.log('❌ User is not signed in');
      setUserLoggedIn('loggedOut');
    }
  }

  //to pass down the state setter to the sign in page so that it will set the universal state to login
  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }
  //to pass down the state setter to the sign in page so that it will set the universal user attribute state
  function updateUserAttributes(userattributes) {
    setUserAttributes(userattributes);
  }

  function updateUserToken(userdetail) {
    setUserToken(userdetail);
  }
  */
  return (
    <NavigationContainer>
      {isUserLoggedIn === 'initializing' && <Initializing />}
      {isUserLoggedIn === 'loggedIn' && (
        <AppNavigator
        //updateAuthState={updateAuthState}
        //userAttributes={userAttributes}
        />
      )}
      {isUserLoggedIn === 'loggedOut' && (
        <AuthenticationNavigator
        //updateAuthState={updateAuthState}
        //updateUserAttributes={updateUserAttributes}
        />
      )}
    </NavigationContainer>
  );
};

/*const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};*/

export default App;
