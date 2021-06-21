import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {
  AccountsDashboard,
  Marketplace,
  Store,
  Inbox,
  ChatRoom,
  EmployeeDashboard,
  OwnerDashboard,
} from './scenes';

const App = () => {
  return <EmployeeDashboard></EmployeeDashboard>;
};

export default App;
