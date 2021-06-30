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
  CreateCompany,
  Landing,
} from './scenes';
import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';
import {View, ActivityIndicator} from 'react-native';
import {getUser} from './graphql/queries';

Amplify.configure(config);

const AuthenticationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthenticationNavigator = props => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="landing">
        {screenProps => <Landing {...screenProps} />}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="signin">
        {screenProps => (
          <Login
            {...screenProps}
            updateAuthState={props.updateAuthState}
            updateUserID={props.updateUserID}
          />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="signup">
        {screenProps => (
          <Registration
            {...screenProps}
            updateAuthState={props.updateAuthState}
            updateUserAttributes={props.updateUserAttributes}
          />
        )}
      </AuthenticationStack.Screen>
    </AuthenticationStack.Navigator>
  );
};

const AppNavigator = props => {
  console.log(props.user);
  const type = props.user.role;
  if (props.user.retailerID || props.user.supplierID) {
    if (props.user.retailerID && props.user.retailer.verified != undefined) {
      if (type == 'retailer-manager') {
        console.log('Retail Manager \n');
        return (
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="dashboard">
              {screenProps => (
                <RetailManagerDashboard
                  {...screenProps}
                  userType={type}
                  updateAuthState={props.updateAuthState}
                />
              )}
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
                <ChatRoom
                  {...screenProps}
                  userAttributes={props.userAttributes}
                />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="orders">
              {screenProps => <Orders {...screenProps} />}
            </AppStack.Screen>
            <AppStack.Screen name="tasks">
              {screenProps => <RetailerTasks {...screenProps} />}
            </AppStack.Screen>
            <AppStack.Screen name="personalprofile">
              {screenProps => <PersonalProfile {...screenProps} />}
            </AppStack.Screen>
            <AppStack.Screen name="editprofile">
              {screenProps => <EditPersonal {...screenProps} />}
            </AppStack.Screen>
          </AppStack.Navigator>
        );
      } else if (type == 'accounts') {
        console.log('Accounts \n');
        return (
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="dashboard">
              {screenProps => (
                <AccountsDashboard
                  {...screenProps}
                  updateAuthState={props.updateAuthState}
                />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="inbox">
              {screenProps => <Inbox {...screenProps} />}
            </AppStack.Screen>
            <AppStack.Screen name="chatroom">
              {screenProps => (
                <ChatRoom
                  {...screenProps}
                  userAttributes={props.userAttributes}
                />
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
              {screenProps => (
                <OwnerDashboard
                  {...screenProps}
                  userType={type}
                  updateAuthState={props.updateAuthState}
                />
              )}
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
              {screenProps => (
                <EmployeeDashboard
                  {...screenProps}
                  updateAuthState={props.updateAuthState}
                />
              )}
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
              {screenProps => (
                <RetailManagerDashboard
                  {...screenProps}
                  updateAuthState={props.updateAuthState}
                />
              )}
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
      }
    } else if (
      props.user.supplierID &&
      props.user.supplier.verified != undefined
    ) {
      console.log('Supplier \n');
      return (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="dashboard">
            {screenProps => (
              <SupplierDashboard
                {...screenProps}
                updateAuthState={props.updateAuthState}
              />
            )}
          </AppStack.Screen>
          <AppStack.Screen name="marketplace">
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
    } else {
      return (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="verification">
            {screenProps => <RetailManagerDashboard {...screenProps} />}
          </AppStack.Screen>
          <AppStack.Screen name="companyprofile">
            {screenProps => <CompanyProfile {...screenProps} />}
          </AppStack.Screen>
          <AppStack.Screen name="editcompanyprofile">
            {screenProps => <EditCompany {...screenProps} />}
          </AppStack.Screen>
        </AppStack.Navigator>
      );
    }
  } else {
    return (
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="registercompany">
          {screenProps => <CreateCompany {...screenProps} user={props.user} />}
        </AppStack.Screen>

        <AppStack.Screen name="verification">
          {screenProps => <RetailManagerDashboard {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="companyprofile">
          {screenProps => <CompanyProfile {...screenProps} />}
        </AppStack.Screen>
        <AppStack.Screen name="editcompanyprofile">
          {screenProps => <EditCompany {...screenProps} />}
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
  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');
  const [userID, setUserID] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const getUserAttributes = async () => {
    try {
      if (userID) {
        const userInfo = await API.graphql({
          query: getUser,
          variables: {id: userID},
        });
        console.log('fetch' + userID);
        console.log(userInfo);
        setUserDetails(userInfo.data.getUser);
        setUserLoggedIn('loggedIn');
      }
    } catch {
      e => console.log('failed');
    }
  };
  useEffect(() => {
    getUserAttributes();
    console.log('useEffect Triggered');
  }, [userID]);
  useEffect(() => {
    checkAuthState();
  }, []);
  async function checkAuthState() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserID(user.attributes.sub);
      console.log('✅ User is alreadry signed in: ' + user.attributes.sub);
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
  function updateUserID(userID) {
    setUserID(userID);
  }

  return (
    <NavigationContainer>
      {isUserLoggedIn === 'initializing' && <Initializing />}
      {isUserLoggedIn === 'loggedIn' && (
        <AppNavigator updateAuthState={updateAuthState} user={userDetails} />
      )}
      {isUserLoggedIn === 'loggedOut' && (
        <AuthenticationNavigator
          updateAuthState={updateAuthState}
          updateUserID={updateUserID}
        />
      )}
    </NavigationContainer>
  );
};

export default App;
