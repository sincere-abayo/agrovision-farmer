import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, Divider, List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  // Mock data for demonstration
  const reminders = [
    { id: 1, title: 'Apply Fertilizer', description: 'Your maize crop needs fertilizer application', date: '2025-04-15', type: 'crop' },
    { id: 2, title: 'Vaccinate Cattle', description: 'Schedule vaccination for your cattle', date: '2025-04-20', type: 'livestock' },
    { id: 3, title: 'Irrigation Needed', description: 'Your tomato plants need irrigation due to forecasted dry weather', date: '2025-05-01', type: 'crop' },
  ];

  const marketUpdates = [
    { id: 1, product: 'Maize', trend: 'up', price: '320 RWF/kg', change: '+5%' },
    { id: 2, product: 'Tomatoes', trend: 'down', price: '450 RWF/kg', change: '-2%' },
    { id: 3, product: 'Milk', trend: 'up', price: '600 RWF/L', change: '+3%' },
  ];

  const weatherForecast = {
    today: { temp: '24°C', condition: 'Sunny', rainfall: '0mm' },
    tomorrow: { temp: '22°C', condition: 'Partly Cloudy', rainfall: '5mm' },
  };

  const govUpdates = [
    { id: 1, title: 'New Subsidy Program', description: 'Government announces new subsidies for organic farming' },
    { id: 2, title: 'Upcoming Training', description: 'Free training on modern farming techniques next week' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Waramutse neza, Imbabazi</Text>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
      </View>

      {/* Smart Reminders Section */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>AI Smart Reminders</Title>
          {reminders.map((reminder) => (
            <TouchableOpacity 
              key={reminder.id}
              onPress={() => {
                if (reminder.type === 'crop') {
                  navigation.navigate('CropDetail', { id: reminder.id });
                } else {
                  navigation.navigate('LivestockDetail', { id: reminder.id });
                }
              }}
            >
              <View style={styles.reminderItem}>
                <View style={styles.reminderIconContainer}>
                  <Ionicons 
                    name={reminder.type === 'crop' ? 'leaf' : 'paw'} 
                    size={24} 
                    color="#4CAF50" 
                  />
                </View>
                <View style={styles.reminderContent}>
                  <Text style={styles.reminderTitle}>{reminder.title}</Text>
                  <Text style={styles.reminderDesc}>{reminder.description}</Text>
                  <Text style={styles.reminderDate}>Due: {reminder.date}</Text>
                </View>
              </View>
              <Divider />
            </TouchableOpacity>
          ))}
        </Card.Content>
        <Card.Actions>
          <Button>View All Reminders</Button>
        </Card.Actions>
      </Card>

      {/* Market Intelligence Section */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Market Intelligence</Title>
          {marketUpdates.map((item) => (
            <View key={item.id} style={styles.marketItem}>
              <Text style={styles.marketProduct}>{item.product}</Text>
              <View style={styles.marketPriceContainer}>
                <Text style={styles.marketPrice}>{item.price}</Text>
                <Text style={[
                  styles.marketChange,
                  { color: item.trend === 'up' ? 'green' : 'red' }
                ]}>
                  <Ionicons 
                    name={item.trend === 'up' ? 'arrow-up' : 'arrow-down'} 
                    size={16} 
                  /> 
                  {item.change}
                </Text>
              </View>
            </View>
          ))}
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('MarketplaceTab')}>Go to Marketplace</Button>
        </Card.Actions>
      </Card>

      {/* Weather Forecast */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Weather Forecast</Title>
          <View style={styles.weatherContainer}>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherDay}>Today</Text>
              <Text style={styles.weatherTemp}>{weatherForecast.today.temp}</Text>
              <Text>{weatherForecast.today.condition}</Text>
              <Text>Rainfall: {weatherForecast.today.rainfall}</Text>
            </View>
            <View style={styles.weatherItem}>
              <Text style={styles.weatherDay}>Tomorrow</Text>
              <Text style={styles.weatherTemp}>{weatherForecast.tomorrow.temp}</Text>
              <Text>{weatherForecast.tomorrow.condition}</Text>
              <Text>Rainfall: {weatherForecast.tomorrow.rainfall}</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('WeatherTab')}>Full Forecast</Button>
        </Card.Actions>
      </Card>

      {/* Government Updates */}
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Government Updates</Title>
          {govUpdates.map((update) => (
            <List.Item
              key={update.id}
              title={update.title}
              description={update.description}
              left={props => <List.Icon {...props} icon="government" />}
            />
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4CAF50',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  date: {
    fontSize: 16,
    color: 'white',
    opacity: 0.8,
  },
  card: {
    margin: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E7D32',
  },
  reminderItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  reminderIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  reminderContent: {
    flex: 1,
  },
  reminderTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reminderDesc: {
    color: '#666',
    marginVertical: 2,
  },
  reminderDate: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  marketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  marketProduct: {
    fontSize: 16,
    fontWeight: '500',
  },
  marketPriceContainer: {
    alignItems: 'flex-end',
  },
  marketPrice: {
    fontWeight: 'bold',
  },
  marketChange: {
    fontSize: 14,
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weatherItem: {
    alignItems: 'center',
    padding: 10,
  },
  weatherDay: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  weatherTemp: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HomeScreen;
