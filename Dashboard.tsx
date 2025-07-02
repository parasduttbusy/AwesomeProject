import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = (props: any) => {
  return (
    <SafeAreaView>
      <Text>This is Dashboard</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Invite')}>
        <Text>Go to Invite</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
