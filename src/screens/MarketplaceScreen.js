import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card, Title, Paragraph, Button, Chip, Text, Searchbar, FAB, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const MarketplaceScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock data for marketplace listings
  const marketListings = [
    {
      id: 1,
      type: 'sell',
      product: 'Maize',
      quantity: '2 tons',
      price: '300 RWF/kg',
      location: 'Kigali, Rwanda',
      seller: 'John Farmer',
      availableDate: '2023-06-30',
      description: 'Fresh maize harvest, high quality hybrid variety.',
      image: null // In a real app, this would be an image URL
    },
    {
      id: 2,
      type: 'buy',
      product: 'Tomatoes',
      quantity: '500 kg',
      price: '450 RWF/kg',
      location: 'Musanze, Rwanda',
      buyer: 'Green Grocers Ltd',
      neededBy: '2023-06-25',
      description: 'Looking for fresh tomatoes for our retail stores. Must be grade A quality.',
      image: null
    },
    {
      id: 3,
      type: 'sell',
      product: 'Milk',
      quantity: '200 liters',
      price: '600 RWF/L',
      location: 'Nyagatare, Rwanda',
      seller: 'Eastern Dairy Farm',
      availableDate: 'Daily',
      description: 'Fresh cow milk available daily, pasteurized and ready for pickup.',
      image: null
    },
    {
      id: 4,
      type: 'sell',
      product: 'Beans',
      quantity: '1.5 tons',
      price: '850 RWF/kg',
      location: 'Huye, Rwanda',
      seller: 'Sarah`s Farm',
      availableDate: '2023-07-10',
      description: 'Organic kidney beans, newly harvested and sorted.',
      image: null
    }
  ];

  const filteredListings = activeFilter === 'all' 
    ? marketListings 
    : marketListings.filter(item => item.type === activeFilter);

  const searchFilteredListings = filteredListings.filter(item => 
    item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderListingItem = (item) => (
    <Card style={styles.listingCard} key={item.id}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <Title>{item.product}</Title>
          <Chip 
            mode="outlined" 
            style={[
              styles.typeChip, 
              { backgroundColor: item.type === 'sell' ? '#E8F5E9' : '#E3F2FD' }
            ]}
          >
            {item.type === 'sell' ? 'Selling' : 'Buying'}
          </Chip>
        </View>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Ionicons name="cube-outline" size={20} color="#4CAF50" />
            <Text style={styles.detailText}>{item.quantity}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Ionicons name="cash-outline" size={20} color="#4CAF50" />
            <Text style={styles.detailText}>{item.price}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={20} color="#4CAF50" />
            <Text style={styles.detailText}>{item.location}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Ionicons name="calendar-outline" size={20} color="#4CAF50" />
            <Text style={styles.detailText}>
              {item.type === 'sell' ? `Available: ${item.availableDate}` : `Needed by: ${item.neededBy}`}
            </Text>
          </View>
        </View>
        
        <Paragraph style={styles.description}>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" style={styles.contactButton}>
          Contact {item.type === 'sell' ? 'Seller' : 'Buyer'}
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search products or location"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
      />
      
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'all' && styles.activeFilterButton
          ]}
          onPress={() => setActiveFilter('all')}
        >
          <Text style={[
            styles.filterText,
            activeFilter === 'all' && styles.activeFilterText
          ]}>All</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'sell' && styles.activeFilterButton
          ]}
          onPress={() => setActiveFilter('sell')}
        >
          <Text style={[
            styles.filterText,
            activeFilter === 'sell' && styles.activeFilterText
          ]}>Selling</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'buy' && styles.activeFilterButton
          ]}
          onPress={() => setActiveFilter('buy')}
        >
          <Text style={[
            styles.filterText,
            activeFilter === 'buy' && styles.activeFilterText
          ]}>Buying</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.listingsContainer}>
        {searchFilteredListings.length > 0 ? (
          searchFilteredListings.map(renderListingItem)
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="search" size={50} color="#BDBDBD" />
            <Text style={styles.emptyStateText}>No listings found</Text>
            <Text style={styles.emptyStateSubText}>Try adjusting your search or filters</Text>
          </View>
        )}
      </ScrollView>
      
      <FAB
        style={styles.fab}
        icon="plus"
        label="Create Listing"
        onPress={() => navigation.navigate('MarketListing')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 12,
    borderRadius: 8,
    elevation: 2,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#EEEEEE',
  },
  activeFilterButton: {
    backgroundColor: '#4CAF50',
  },
  filterText: {
    color: '#757575',
  },
  activeFilterText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listingsContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  listingCard: {
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  typeChip: {
    height: 30,
  },
  detailsContainer: {
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  description: {
    marginTop: 5,
    color: '#757575',
  },
  contactButton: {
    backgroundColor: '#4CAF50',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#757575',
    marginTop: 16,
  },
  emptyStateSubText: {
    fontSize: 14,
    color: '#9E9E9E',
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#4CAF50',
  },
});

export default MarketplaceScreen;
