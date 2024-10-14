import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTrip from '../../components/Mytrip/Mytrip'; // Adjust the path if needed
import Chat from '../../components/Chat/Chat'; // Adjust the path if needed

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={Chat} options={{ title: 'Chat' }} />
    </Tab.Navigator>
  );
}
