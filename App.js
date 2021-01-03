import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Gundem from './src/screens/Gundem';
import Teknoloji from './src/screens/Teknoloji';
import Spor from './src/screens/Spor';

import Notification from './src/Utils/Notification';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
 
  const toggleDrawer = () => {
  
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
       
      <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function GundemStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Guncel">
        <Stack.Screen
          name="Güncel Haberler"
          component={Gundem}
          options={{
            title: 'Güncel Haberler',
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f54112',
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
  );
}

function TeknolojiStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Teknoloji"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="Teknoloji"
        component={Teknoloji}
        options={{
          title: 'Teknoloji Haberleri',
          
        }}/>
      <Stack.Screen
        name="Spor"
        component={Spor}
        options={{
          title: 'Spor Haberleri', 
        }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="GüncelHaberler"
          options={{ drawerLabel: 'Güncel Haberler Option' }}
          component={GundemStack} />
        <Drawer.Screen
          name="Teknoloji"
          options={{ drawerLabel: 'Teknoloji Option' }}
          component={TeknolojiStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
