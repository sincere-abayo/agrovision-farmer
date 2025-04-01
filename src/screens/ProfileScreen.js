import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, Text, Avatar, List, Switch, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  
  // Mock user data
  const user = {
    name: 'John Farmer',
    location: 'Kigali, Rwanda',
    phone: '+250 78 123 4567',
    email: 'john.farmer@example.com',
    farmName: 'Green Valley Farm',
    farmSize: '5 acres',
    farmingType: 'Mixed (Crops & Livestock)',
    memberSince: 'June 2023',
    avatar: null // In a real app, this would be an image URL
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          {user.avatar ? (
            <Avatar.Image size={80} source={{ uri: user.avatar }} />
          ) : (
            <Avatar.Text size={80} label={user.name.substring(0, 2)} backgroundColor="#4CAF50" />
          )}
          <View style={styles.profileInfo}>
            <Title style={styles.name}>{user.name}</Title>
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={16} color="#fff" />
              <Text style={styles.location}>{user.location}</Text>
            </View>
          </View>
        </View>
      </View>
      
      {/* Farm Information */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Farm Information</Title>
          <List.Item
            title="Farm Name"
            description={user.farmName}
            left={props => <List.Icon {...props} icon="home-variant" color="#4CAF50" />}
          />
          <Divider />
          <List.Item
            title="Farm Size"
            description={user.farmSize}
            left={props => <List.Icon {...props} icon="resize" color="#4CAF50" />}
          />
          <Divider />
          <List.Item
            title="Farming Type"
            description={user.farmingType}
            left={props => <List.Icon {...props} icon="leaf" color="#4CAF50" />}
          />
        </Card.Content>
      </Card>
      
      {/* Contact Information */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Contact Information</Title>
          <List.Item
            title="Phone"
            description={user.phone}
            left={props => <List.Icon {...props} icon="phone" color="#4CAF50" />}
          />
          <Divider />
          <List.Item
            title="Email"
            description={user.email}
            left={props => <List.Icon {...props} icon="email" color="#4CAF50" />}
          />
        </Card.Content>
      </Card>
      
          {/* App Settings */}
          <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>App Settings</Title>
          <List.Item
            title="Dark Mode"
            left={props => <List.Icon {...props} icon="theme-light-dark" color="#4CAF50" />}
            right={() => (
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                color="#4CAF50"
              />
            )}
          />
          <Divider />
          <List.Item
            title="Notifications"
            left={props => <List.Icon {...props} icon="bell" color="#4CAF50" />}
            right={() => (
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                color="#4CAF50"
              />
            )}
          />
          <Divider />
          <List.Item
            title="Language"
            description="English"
            left={props => <List.Icon {...props} icon="translate" color="#4CAF50" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
        </Card.Content>
      </Card>
      
      {/* Account Actions */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Account</Title>
          <List.Item
            title="Edit Profile"
            left={props => <List.Icon {...props} icon="account-edit" color="#4CAF50" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="Help & Support"
            left={props => <List.Icon {...props} icon="help-circle" color="#4CAF50" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
          <List.Item
            title="About AgroVision"
            description={`Version 1.0.0 • Member since ${user.memberSince}`}
            left={props => <List.Icon {...props} icon="information" color="#4CAF50" />}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
        </Card.Content>
      </Card>
      
      <Button 
        mode="outlined" 
        style={styles.logoutButton}
        icon="logout"
      >
        Log Out
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    paddingBottom: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 20,
  },
  name: {
    color: 'white',
    fontSize: 22,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    color: 'white',
    marginLeft: 5,
  },
  card: {
    margin: 10,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E7D32',
  },
  logoutButton: {
    margin: 20,
    borderColor: '#FF5722',
    borderWidth: 1,
  },
});

export default ProfileScreen;
