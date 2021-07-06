import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AccountsDashboard, //done
  RetailManagerDashboard, // done
  GeneralManagerDashboard, //done
  Marketplace,
  Store,
  Inbox, //done
  ChatRoom, //done but no modal
  EmployeeDashboard, //done
  OwnerDashboard, //done
  Orders, //Done
  SupplierStore, // done most
  SupplierTasks, //done
  RetailerTasks, //done
  CompanyProfile, //done
  EditCompany, //done
  HumanResource, //done
  PersonalProfile, //done.
  EditPersonal, //done.
  //DataAnalytics,
  Registration, //done
  SupplierDashboard, //done
  Login, //done
  CreateCompany, //done
  Landing, //done
  Verification, //done
  CreateAccountPopUp, //done
  ConfirmSignUp, //done
} from './scenes';
import {SuccessfulModal, UnsuccessfulModal} from '_components';
import {DataAnalytics} from './scenes/data_analytics/';
/*import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';*/
import {View, ActivityIndicator} from 'react-native';
import {getUser} from './graphql/queries';
import {createUser} from './graphql/mutations';
import {MarketplaceList} from '_scenes';

//Amplify.configure(config);

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
            setUserAttributes={props.setUserAttributes}
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
  const type = 'general-manager';
  if (props.user.retailerCompanyID || props.user.supplierCompanyID) {
    if (
      props.user.retailerCompanyID &&
      props.user.retailerCompany.verified != undefined
    ) {
      if (type == 'retailer-manager') {
        console.log('Retail Manager \n');
        return (
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="dashboard">
              {screenProps => (
                <RetailManagerDashboard
                  {...screenProps}
                  user={props.user}
                  updateAuthState={props.updateAuthState}
                />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="marketplace">
              {screenProps => (
                <Marketplace {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>

            <AppStack.Screen name="store">
              {screenProps => <Store {...screenProps} user={props.user} />}
            </AppStack.Screen>

            <AppStack.Screen name="inbox">
              {screenProps => <Inbox {...screenProps} user={props.user} />}
            </AppStack.Screen>

            <AppStack.Screen name="chatroom">
              {screenProps => <ChatRoom {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="orders">
              {screenProps => <Orders {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="tasks">
              {screenProps => (
                <RetailerTasks {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="personalprofile">
              {screenProps => (
                <PersonalProfile {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="editprofile">
              {screenProps => (
                <EditPersonal {...screenProps} user={props.user} />
              )}
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
                  user={props.user}
                  updateAuthState={props.updateAuthState}
                />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="inbox">
              {screenProps => <Inbox {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="chatroom">
              {screenProps => <ChatRoom {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="tasks">
              {screenProps => (
                <SupplierTasks {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="orders">
              {screenProps => <Orders {...screenProps} user={props.user} />}
            </AppStack.Screen>

            <AppStack.Screen name="personalprofile">
              {screenProps => (
                <PersonalProfile {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="editpersonal">
              {screenProps => (
                <EditPersonal {...screenProps} user={props.user} />
              )}
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
                  user={props.user}
                  updateAuthState={props.updateAuthState}
                />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="orders">
              {screenProps => <Orders {...screenProps} user={props.user} />}
            </AppStack.Screen>{' '}
            <AppStack.Screen name="companyprofile">
              {screenProps => (
                <CompanyProfile {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="editcompany">
              {screenProps => (
                <EditCompany {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="humanresource">
              {screenProps => (
                <HumanResource {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="personalprofile">
              {screenProps => (
                <PersonalProfile {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="editpersonal">
              {screenProps => (
                <EditPersonal {...screenProps} user={props.user} />
              )}
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
                  user={props.user}
                />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="tasks">
              {screenProps => (
                <RetailerTasks {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="personalprofile">
              {screenProps => (
                <PersonalProfile {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="editpersonal">
              {screenProps => (
                <EditPersonal {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
          </AppStack.Navigator>
        );
      } else if (type == 'general-manager') {
        console.log('General Manager \n');
        return (
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="dashboard">
              {screenProps => (
                <GeneralManagerDashboard
                  {...screenProps}
                  updateAuthState={props.updateAuthState}
                  user={props.user}
                />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="orders">
              {screenProps => <Orders {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="marketplace">
              {screenProps => (
                <Marketplace {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="store">
              {screenProps => <Store {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="chatroom">
              {screenProps => <ChatRoom {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="inbox">
              {screenProps => <Inbox {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="tasks">
              {screenProps => (
                <RetailerTasks {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="dataanalytics">
              {screenProps => (
                <DataAnalytics {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="invoice">
              {screenProps => <Invoice {...screenProps} user={props.user} />}
            </AppStack.Screen>
            <AppStack.Screen name="companyprofile">
              {screenProps => (
                <CompanyProfile {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="editcompany">
              {screenProps => (
                <EditCompany {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="humanresource">
              {screenProps => (
                <HumanResource {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="personalprofile">
              {screenProps => (
                <PersonalProfile {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
            <AppStack.Screen name="editpersonal">
              {screenProps => (
                <EditPersonal {...screenProps} user={props.user} />
              )}
            </AppStack.Screen>
          </AppStack.Navigator>
        );
      }
    } else if (
      props.user.supplierCompanyID &&
      props.user.supplierCompany.verified != undefined
    ) {
      console.log('Supplier \n');
      return (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="dashboard">
            {screenProps => (
              <SupplierDashboard
                {...screenProps}
                updateAuthState={props.updateAuthState}
                user={props.user}
              />
            )}
          </AppStack.Screen>
          <AppStack.Screen name="marketplace">
            {screenProps => (
              <SupplierStore {...screenProps} user={props.user} />
            )}
          </AppStack.Screen>
          <AppStack.Screen name="chatroom">
            {screenProps => <ChatRoom {...screenProps} user={props.user} />}
          </AppStack.Screen>
          <AppStack.Screen name="inbox">
            {screenProps => <Inbox {...screenProps} user={props.user} />}
          </AppStack.Screen>
          <AppStack.Screen name="tasks">
            {screenProps => (
              <SupplierTasks {...screenProps} user={props.user} />
            )}
          </AppStack.Screen>
          <AppStack.Screen name="dataanalytics">
            {screenProps => (
              <DataAnalytics {...screenProps} user={props.user} />
            )}
          </AppStack.Screen>
          <AppStack.Screen name="invoice">
            {screenProps => <Invoice {...screenProps} user={props.user} />}
          </AppStack.Screen>
        </AppStack.Navigator>
      );
    } else {
      return (
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="verification">
            {screenProps => (
              <Verification
                {...screenProps}
                updateAuthState={props.updateAuthState}
                user={props.user}
              />
            )}
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
/*const App = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState('loggedIn');
  const [userID, setUserID] = useState(null);
  const [userAttributes, setUserAttributes] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [runAgain, setRunAgain] = useState(false);

  const createNewUser = async () => {
    try {
      const newUserInfo = await API.graphql({
        query: createUser,
        variables: {
          input: {
            id: userID,
            name: userAttributes.name,
            role: userAttributes['custom:role'],
            contactNumber: userAttributes.phone_number,
          },
        },
      });
      console.log('newuser: ' + newUserInfo.data.createUser);
      console.log(newUserInfo.data.createUser);
      setUserDetails(newUserInfo.data.getUser);
      setUserLoggedIn('loggedIn');
    } catch {
      e => console.log(e);
    }
  };

  const getUserAttributes = async () => {
    try {
      if (userID) {
        const userInfo = await API.graphql({
          query: getUser,
          variables: {id: userID},
        });
        console.log('fetch' + userID);
        console.log(userInfo);
        if (userInfo.data.getUser != null) {
          setUserDetails(userInfo.data.getUser);
          setUserLoggedIn('loggedIn');
        } else {
          console.log('no user found');
          console.log(userAttributes);
          if (userAttributes != null) {
            console.log('attempting to create new user');
            createNewUser();
          } else {
            setRunAgain(true);
          }
        }
      }
    } catch {
      e => console.log(e);
    }
  };

  useEffect(() => {
    checkAuthState();
  }, [userID]);

  useEffect(() => {
    getUserAttributes();
    console.log('useEffect Triggered');
  }, [userID, runAgain]);
  async function checkAuthState() {
    //this checks for the current authenticated state (for when u dont click logout)
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUserID(user.attributes.sub);
      setUserAttributes(user.attributes);
      console.log('✅ User is alreadry signed in: ');
      console.log(user.attributes);
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
          updateUserID={updateUserID}
          setUserAttributes={setUserAttributes}
        />
      )}
    </NavigationContainer>
  );
};

export const App = () => {
  return (
    <NavigationContainer>
      <Marketplace></Marketplace>
    </NavigationContainer>
  );
};
*/

export const App = () => {
  return <Store></Store>;
};
export default App;
