import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import { getNewsDetailsFromApi} from '../services/NewsService'



class DetailsScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            news: undefined
        }
        
    }

    componentDidMount(){
        getNewsDetailsFromApi(this.props.navigation.state.params.publishedAt).then(data => {
            this.setState({
                news: data
            })
        })
    }

    _displayNews(){
        const news = this.state.news
        if ( news != undefined){
            return (
                <ScrollView style={styles.scrollview_container}>
                     <Text>{this.state.news.publishedAt}</Text>
                </ScrollView>
            )
        }
    }

    render() {
        //const publishedAt = this.props.navigation.state.params.publishedAt
        return (
            <View style={styles.main_container}>
                {this._displayNews()}
            </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  scrollview_container: {
      flex:1
  }
})

export default DetailsScreen
