import React from 'react'
import {ScrollView,StyleSheet,FlatList} from 'react-native'
import {getNews} from '../services/NewsService'
import ItemNews from "../components/ItemNews"

export default class HomeScreen extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            news: [] 
        },
        this._loadNews()
    }

    _loadNews(){
        
        getNews().then((data) => {
            this.setState( {
                news: data.articles
            })
            console.log(this.state.news)
            })
           
    }

    componentDidMount(){
        this._loadNews()
    }

    _displayDetailForNew = (title) => {
        //console.log("Détail des news avec pour titre  " + title);
        this.props.navigation.navigate('DetailsScreen', {title: title})
    }



    _reloadPage = (title) => {
        const newSeenIndex = this.state.news.findIndex(item => item.title === title)
        this.setState ( {
            ...this.state,
            news: this.state.news.filter( (item, index) => index !== newSeenIndex)
          })
    }



    render() {
        return (
            
                <FlatList
                    style={styles.list}
                    data = {this.state.news}
                    keyExtractor = {(item) => item.title}
                    renderItem = {({item}) => (
                        <ItemNews  
                            key = {item.item}
                            myNew = {item}
                            displayDetailForNew = {this._displayDetailForNew}
                            reloadPage = {this._reloadPage}
                        />
                    )}
                />
            
            
        );
    }

}

const styles = StyleSheet.create ({
    list:{
        flex: 1,
        backgroundColor: '#DCDCDC'
    }
})
