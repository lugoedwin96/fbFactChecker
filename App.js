import React, { useState, useEffect } from 'react';

import { Platform, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';



export default function App() {
    const [claims, setClaims] = useState([]);

    useEffect(() => {
      axios.get("https://cat-fact.herokuapp.com/facts/random", {
        params: {
          animal_type: 'cat',
          amount: 2
        }
      })
      .then((res) => {
        setClaims(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [])

    return (
      <View style={styles.container}>
      {console.log(claims)}
      {/* { claims.map((data, index) => {
          <Text style={styles.welcome}>{data.text}</Text>
        }) 
      } */}
        {/* {claims.map((value, index) => {
          <Text style={styles.welcome}>{value.text}</Text>
        })} */}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
