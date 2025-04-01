import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, Divider, FAB, List, Text, Chip, SegmentedButtons } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const FarmRecordScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('crops');

  // Mock data
  const crops = [
    { 
      id: 1, 
      name: 'Maize', 
      variety: 'Hybrid 614', 
      area: '2 acres', 
      plantingDate: '2023-03-15', 
      status: 'Growing',
      expectedHarvest: '2023-07-20',
      estimatedYield: '4 tons'
    },
    { 
      id: 2, 
      name: 'Tomatoes', 
      variety: 'Roma', 
      area: '0.5 acres', 
      plantingDate: '2023-04-10', 
      status: 'Flowering',
      expectedHarvest: '2023-06-25',
      estimatedYield: '2 tons'
    },
    { 
      id: 3, 
      name: 'Beans', 
      variety: 'Kidney Beans', 
      area: '1 acre', 
      plantingDate: '2023-03-01', 
      status: 'Ready for Harvest',
      expectedHarvest: '2023-06-01',
      estimatedYield: '1.5 tons'
    }
  ];

  const livestock = [
    { 
      id: 1, 
      type: 'Cattle', 
      breed: 'Holstein', 
      quantity: 5, 
      acquisitionDate: '2022-01-15',
      status: 'Healthy',
      lastVaccination: '2023-05-10',
      expectedProducts: 'Milk, 15L daily'
    },
    { 
      id: 2, 
      type: 'Chicken', 
      breed: 'Broiler', 
      quantity: 50, 
      acquisitionDate: '2023-04-01',
      status: 'Growing',
      lastVaccination: '2023-04-15',
      expectedProducts: 'Meat, ready in 2 weeks'
    },
    { 
      id: 3, 
      type: 'Goats', 
      breed: 'Boer', 
      quantity: 8, 
      acquisitionDate: '2022-06-20',
      status: 'Healthy',
      lastVaccination: '2023-03-05',
      expectedProducts: 'Milk, Meat'
    }
  ];

  const renderCropItem = (item) => (
    <TouchableOpacity 
      key={item.id}
      onPress={() => navigation.navigate('CropDetail', { crop: item })}
    >
      <Card style={styles.itemCard}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <View>
              <Title>{item.name}</Title>
              <Paragraph>Variety: {item.variety}</Paragraph>
            </View>
            <Chip 
              mode="outlined" 
              style={[
                styles.statusChip, 
                { 
                  backgroundColor: 
                    item.status === 'Ready for Harvest' ? '#E8F5E9' : 
                    item.status === 'Growing' ? '#E3F2FD' : '#FFF9C4'
                }
              ]}
            >
              {item.status}
            </Chip>
          </View>
          
          <Divider style={styles.divider} />
          
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Ionicons name="resize-outline" size={20} color="#4CAF50" />
              <Text style={styles.detailText}>{item.area}</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="calendar-outline" size={20} color="#4CAF50" />
              <Text style={styles.detailText}>Planted: {item.plantingDate}</Text>
            </View>
          </View>
          
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Ionicons name="calendar" size={20} color="#FF9800" />
              <Text style={styles.detailText}>Harvest: {item.expectedHarvest}</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="trending-up" size={20} color="#FF9800" />
              <Text style={styles.detailText}>Est. Yield: {item.estimatedYield}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  const renderLivestockItem = (item) => (
    <TouchableOpacity 
      key={item.id}
      onPress={() => navigation.navigate('LivestockDetail', { livestock: item })}
    >
      <Card style={styles.itemCard}>
        <Card.Content>
          <View style={styles.cardHeader}>
            <View>
              <Title>{item.type}</Title>
              <Paragraph>Breed: {item.breed}</Paragraph>
            </View>
            <Chip 
              mode="outlined" 
              style={[
                styles.statusChip, 
                { 
                  backgroundColor: 
                    item.status === 'Healthy' ? '#E8F5E9' : 
                    item.status === 'Growing' ? '#E3F2FD' : '#FFEBEE'
                }
              ]}
            >
              {item.status}
            </Chip>
          </View>
          
          <Divider style={styles.divider} />
          
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Ionicons name="calculator-outline" size={20} color="#4CAF50" />
              <Text style={styles.detailText}>Quantity: {item.quantity}</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="calendar-outline" size={20} color="#4CAF50" />
              <Text style={styles.detailText}>Acquired: {item.acquisitionDate}</Text>
            </View>
          </View>
          
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Ionicons name="medkit-outline" size={20} color="#FF9800" />
              <Text style={styles.detailText}>Last Vaccination: {item.lastVaccination}</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="basket-outline" size={20} color="#FF9800" />
              <Text style={styles.detailText}>{item.expectedProducts}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={activeTab}
        onValueChange={setActiveTab}
        buttons={[
          {
            value: 'crops',
            label: 'Crops',
            icon: 'leaf',
          },
          {
            value: 'livestock',
            label: 'Livestock',
            icon: 'paw',
          },
        ]}
        style={styles.segmentedButtons}
      />
      
      <ScrollView style={styles.scrollView}>
        {activeTab === 'crops' ? (
          <View>
            <View style={styles.sectionHeader}>
              <Title style={styles.sectionTitle}>My Crops</Title>
              <Text style={styles.sectionSubtitle}>
                {crops.length} crops registered
              </Text>
            </View>
            {crops.map(renderCropItem)}
          </View>
        ) : (
          <View>
            <View style={styles.sectionHeader}>
              <Title style={styles.sectionTitle}>My Livestock</Title>
              <Text style={styles.sectionSubtitle}>
                {livestock.length} livestock groups registered
              </Text>
            </View>
            {livestock.map(renderLivestockItem)}
          </View>
        )}
      </ScrollView>
      
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => 
          navigation.navigate(
            activeTab === 'crops' ? 'AddCrop' : 'AddLivestock'
          )
        }
        label={activeTab === 'crops' ? 'Add Crop' : 'Add Livestock'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  segmentedButtons: {
    margin: 12,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 12,
  },
  sectionHeader: {
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  sectionSubtitle: {
    color: '#757575',
    marginTop: 2,
  },
  itemCard: {
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statusChip: {
    height: 30,
    alignSelf: 'flex-start',
  },
  divider: {
    marginVertical: 10,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  detailText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#555',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#4CAF50',
  },
});

export default FarmRecordScreen;
