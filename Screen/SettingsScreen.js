import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.scrollview_container}>
         
          <Text style={styles.title_text}>Listes des catégories</Text>
          <Text style={styles.default_text}>general</Text>
          <Text style={styles.default_text}>health</Text>
          <Text style={styles.default_text}>science</Text>
          <Text style={styles.default_text}>sports / 10</Text>
          <Text style={styles.default_text}>technology</Text>
          <Text style={styles.default_text}>health</Text>
          <Text style={styles.default_text}>business</Text>
          <Text style={styles.default_text}>entertainment</Text>
        </View>
        )
    }
}
const styles = StyleSheet.create({
       scrollview_container: {
      flex: 1
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 35,
      flex: 2,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      color: '#000000',
      textAlign: 'center'
    },
    default_text: {
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    }
  })