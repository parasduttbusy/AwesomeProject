import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Invite from './Invite';
import Dashboard from './Dashboard';
const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

const MainNavigation = (props: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Invite"
        component={Invite}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
