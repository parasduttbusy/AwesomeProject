import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Invite = (props: any) => {
  return (
    <SafeAreaView>
      <Text>This is Invite</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Dashboard')}>
        <Text>Go to Dashboard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Invite;

const styles = StyleSheet.create({});
