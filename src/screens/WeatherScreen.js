import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph, Text, Divider, Button, Chip } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const WeatherScreen = () => {
  // Mock data for weather information
  const currentWeather = {
    location: 'Kigali, Rwanda',
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: '12 km/h',
    rainfall: '0 mm',
    icon: 'partly-sunny'
  };

  const forecast = [
    { day: 'Today', temp: 24, condition: 'Partly Cloudy', rainfall: '0 mm', icon: 'partly-sunny' },
    { day: 'Tomorrow', temp: 23, condition: 'Scattered Showers', rainfall: '5 mm', icon: 'rainy' },
    { day: 'Wednesday', temp: 22, condition: 'Rain', rainfall: '15 mm', icon: 'rainy' },
    { day: 'Thursday', temp: 25, condition: 'Sunny', rainfall: '0 mm', icon: 'sunny' },
    { day: 'Friday', temp: 26, condition: 'Sunny', rainfall: '0 mm', icon: 'sunny' },
    { day: 'Saturday', temp: 24, condition: 'Partly Cloudy', rainfall: '2 mm', icon: 'partly-sunny' },
    { day: 'Sunday', temp: 23, condition: 'Scattered Showers', rainfall: '8 mm', icon: 'rainy' }
  ];

  const farmingTips = [
    { 
      id: 1, 
      title: 'Irrigation Planning', 
      description: 'Based on the forecast, plan to irrigate your crops on Thursday and Friday when there is no rainfall expected.',
      icon: 'water'
    },
    { 
      id: 2, 
      title: 'Pest Control', 
      description: 'The upcoming rainy conditions on Wednesday are ideal for applying fungicides to prevent fungal diseases.',
      icon: 'bug'
    },
    { 
      id: 3, 
      title: 'Harvesting', 
      description: 'Consider harvesting mature crops before Wednesday to avoid rain damage.',
      icon: 'basket'
    }
  ];

  const renderWeatherIcon = (iconName, size = 40) => {
    switch(iconName) {
      case 'sunny':
        return <Ionicons name="sunny" size={size} color="#FFD700" />;
      case 'partly-sunny':
        return <Ionicons name="partly-sunny" size={size} color="#FFD700" />;
      case 'rainy':
        return <Ionicons name="rainy" size={size} color="#4682B4" />;
      default:
        return <Ionicons name="cloud" size={size} color="#A9A9A9" />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Current Weather Card */}
      <Card style={styles.currentWeatherCard}>
        <Card.Content>
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={20} color="#4CAF50" />
            <Text style={styles.locationText}>{currentWeather.location}</Text>
          </View>
          
          <View style={styles.currentWeatherContent}>
            <View style={styles.temperatureContainer}>
              {renderWeatherIcon(currentWeather.icon, 60)}
              <Text style={styles.temperatureText}>{currentWeather.temperature}°C</Text>
              <Text style={styles.conditionText}>{currentWeather.condition}</Text>
            </View>
            
            <View style={styles.weatherDetailsContainer}>
              <View style={styles.weatherDetailItem}>
                <Ionicons name="water-outline" size={24} color="#4682B4" />
                <View>
                  <Text style={styles.detailLabel}>Humidity</Text>
                  <Text style={styles.detailValue}>{currentWeather.humidity}%</Text>
                </View>
              </View>
              
              <View style={styles.weatherDetailItem}>
                <Ionicons name="speedometer-outline" size={24} color="#4682B4" />
                <View>
                  <Text style={styles.detailLabel}>Wind</Text>
                  <Text style={styles.detailValue}>{currentWeather.windSpeed}</Text>
                </View>
              </View>
              
              <View style={styles.weatherDetailItem}>
                <Ionicons name="rainy-outline" size={24} color="#4682B4" />
                <View>
                  <Text style={styles.detailLabel}>Rainfall</Text>
                  <Text style={styles.detailValue}>{currentWeather.rainfall}</Text>
                </View>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
      
      {/* 7-Day Forecast */}
      <Card style={styles.forecastCard}>
        <Card.Content>
          <Title style={styles.sectionTitle}>7-Day Forecast</Title>
          
          {forecast.map((day, index) => (
            <View key={index}>
              {index > 0 && <Divider style={styles.divider} />}
              <View style={styles.forecastItem}>
                <Text style={styles.forecastDay}>{day.day}</Text>
                <View style={styles.forecastDetails}>
                  {renderWeatherIcon(day.icon, 30)}
                  <Text style={styles.forecastCondition}>{day.condition}</Text>
                </View>
                <View style={styles.forecastTemperature}>
                  <Text style={styles.forecastTemp}>{day.temp}°C</Text>
                  <Text style={styles.forecastRainfall}>{day.rainfall}</Text>
                </View>
              </View>
            </View>
          ))}
        </Card.Content>
      </Card>
      
      {/* Farming Tips Based on Weather */}
      <Card style={styles.tipsCard}>
        <Card.Content>
          <Title style={styles.sectionTitle}>Farming Tips</Title>
          <Paragraph style={styles.tipsSubtitle}>
            Recommendations based on weather forecast
          </Paragraph>
          
          {farmingTips.map((tip) => (
            <View key={tip.id} style={styles.tipItem}>
              <View style={styles.tipIconContainer}>
                <Ionicons name={tip.icon} size={24} color="#4CAF50" />
              </View>
              <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
              </View>
            </View>
          ))}
        </Card.Content>
      </Card>
      
      {/* Weather Alerts */}
      <Card style={styles.alertCard}>
        <Card.Content>
          <View style={styles.alertHeader}>
            <Ionicons name="warning" size={24} color="#FF9800" />
            <Title style={styles.alertTitle}>Weather Alert</Title>
          </View>
          <Paragraph style={styles.alertText}>
            Heavy rainfall expected on Wednesday. Consider protecting sensitive crops and ensuring proper drainage in your fields.
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 12,
  },
  currentWeatherCard: {
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#555',
  },
  currentWeatherContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temperatureContainer: {
    alignItems: 'center',
    flex: 1,
  },
  temperatureText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 5,
  },
  conditionText: {
    fontSize: 16,
    color: '#555',
  },
  weatherDetailsContainer: {
    flex: 1,
    marginLeft: 20,
  },
  weatherDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: '#757575',
    marginLeft: 10,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  forecastCard: {
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E7D32',
  },
  divider: {
    marginVertical: 8,
  },
  forecastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  forecastDay: {
    fontSize: 16,
    fontWeight: '500',
    width: 100,
  },
  forecastDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  forecastCondition: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  forecastTemperature: {
    alignItems: 'flex-end',
  },
  forecastTemp: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  forecastRainfall: {
    fontSize: 12,
    color: '#4682B4',
  },
  tipsCard: {
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  tipsSubtitle: {
    color: '#757575',
    marginBottom: 15,
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tipIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  alertCard: {
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: '#FFF8E1',
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  alertTitle: {
    marginLeft: 10,
    color: '#FF9800',
  },
  alertText: {
    color: '#555',
    lineHeight: 20,
  },
});

export default WeatherScreen;
