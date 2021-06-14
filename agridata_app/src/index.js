import React from 'react';
import {View, Text} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

const App = () => (
  <View>
    <Text
      style={{
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: 30,
      }}>
      Hello World
    </Text>
  </View>
);

export default App;
