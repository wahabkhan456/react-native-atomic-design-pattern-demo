import * as React from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

//utils
import en from "../../locals/en.json";

const JobCard = ({ data, onJobPressed }) => {
    const ID = data.id;
    return (
        < Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
                <Card.Cover source={{ uri: `https://randomuser.me/api/portraits/women/${ID}.jpg` }} style={styles.cover} />
                <View style={styles.content}>
                    <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>{data.city}</Text>
                        <Text style={{ marginLeft: 10 }}>{data.country}</Text>
                    </View>
                    <Text>{data.phone}</Text>
                    <Text>{data.email}</Text>

                </View>
            </Card.Content>
            <Card.Actions style={styles.button}>
                <TouchableOpacity onPress={() => onJobPressed()}>
                    <Button>{en.VIEW}</Button>
                </TouchableOpacity>
            </Card.Actions>
        </Card >
    );
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 4,
        }
    },
    cardContent: {
        flexDirection: 'row'
    },
    cover: {
        width: 80,
        height: 80
    },
    content: {
        marginLeft: 10,
        flexDirection: 'column',
        alignSelf: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default JobCard;