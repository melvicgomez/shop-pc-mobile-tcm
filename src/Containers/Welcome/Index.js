import React from 'react';
import { View, Text } from 'react-native';
import { Brand } from '@/Components';
import { useTheme } from '@/Theme';

const IndexWelcomeContainer = () => {
  const { Gutters, Layout } = useTheme();

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[Layout.colCenter, Gutters.smallHPadding]}>
        <Brand />
      </View>
      <Text>TEST</Text>
    </View>
  );
};

export default IndexWelcomeContainer;
