import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {
  AccountsDashboard,
  OwnerDashboard,
  Marketplace,
  Store,
  Inbox,
  ChatRoom,
} from './scenes';

const App = () => {
  return <OwnerDashboard></OwnerDashboard>;
};

export default App;
