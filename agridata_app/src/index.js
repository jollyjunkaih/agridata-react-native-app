import React from 'react';
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
} from './scenes';

const App = () => {
  return <EmployeeDashboard></EmployeeDashboard>;
};

export default App;
