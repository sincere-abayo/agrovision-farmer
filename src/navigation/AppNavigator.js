import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import FarmRecordScreen from '../screens/FarmRecordScreen';
import MarketplaceScreen from '../screens/MarketplaceScreen';
import WeatherScreen from '../screens/WeatherScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddCropScreen from '../screens/AddCropScreen';
import AddLivestockScreen from '../screens/AddLivestockScreen';
import CropDetailScreen from '../screens/CropDetailScreen';
import LivestockDetailScreen from '../screens/LivestockDetailScreen';
import MarketListingScreen from '../screens/MarketListingScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CropDetail" component={CropDetailScreen} options={{ title: 'Crop Details' }} />
      <Stack.Screen name="LivestockDetail" component={LivestockDetailScreen} options={{ title: 'Livestock Details' }} />
    </Stack.Navigator>
  );
}

function FarmRecordStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FarmRecord" component={FarmRecordScreen} options={{ title: 'Farm Records' }} />
      <Stack.Screen name="AddCrop" component={AddCropScreen} options={{ title: 'Add Crop' }} />
      <Stack.Screen name="AddLivestock" component={AddLivestockScreen} options={{ title: 'Add Livestock' }} />
    </Stack.Navigator>
  );
}

function MarketplaceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Marketplace" component={MarketplaceScreen} options={{ title: 'Marketplace' }} />
      <Stack.Screen name="MarketListing" component={MarketListingScreen} options={{ title: 'Create Listing' }} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'FarmRecordTab') {
              iconName = focused ? 'leaf' : 'leaf-outline';
            } else if (route.name === 'MarketplaceTab') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'WeatherTab') {
              iconName = focused ? 'partly-sunny' : 'partly-sunny-outline';
            } else if (route.name === 'ProfileTab') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack} 
          options={{ 
            headerShown: false,
            title: 'Home'
          }} 
        />
        <Tab.Screen 
          name="FarmRecordTab" 
          component={FarmRecordStack} 
          options={{ 
            headerShown: false,
            title: 'Farm Records'
          }} 
        />
        <Tab.Screen 
          name="MarketplaceTab" 
          component={MarketplaceStack} 
          options={{ 
            headerShown: false,
            title: 'Marketplace'
          }} 
        />
        <Tab.Screen 
          name="WeatherTab" 
          component={WeatherScreen} 
          options={{ 
            title: 'Weather'
          }} 
        />
        <Tab.Screen 
          name="ProfileTab" 
          component={ProfileScreen} 
          options={{ 
            title: 'Profile'
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
