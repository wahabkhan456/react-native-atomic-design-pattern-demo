import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Card } from 'react-native-paper';

//styles
import styles from './styles';

const index = ({ route }) => {
  const { data } = route.params;
  const ID = data.id;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: `https://randomuser.me/api/portraits/women/${ID}.jpg` }} style={styles.cover} />
        <View style={styles.cardContent}>
          <Text style={{ fontWeight: 'bold', fontSize: 23 }}>{data.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>{data.city}</Text>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>{data.country}</Text>
          </View>
          <Text style={{ fontSize: 18 }}>{data.phone}</Text>
          <Text style={{ fontSize: 18 }}>{data.email}</Text>

        </View>
        <Card.Actions />

      </Card >
    </View>
  );
};





export default index;
