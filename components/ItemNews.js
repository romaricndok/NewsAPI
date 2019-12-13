import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity,View } from 'react-native'


class ItemNews extends React.Component {

   

    render(){
        const {myNew, displayDetailForNew} = this.props 

            //console.log(this.props); //afficher l'objet
            return (
                    <TouchableOpacity onPress={() => displayDetailForNew(myNew.title)} style={styles.main_container}>
                        <Image 
                            style={styles.image}
                            source={{uri : myNew.urlToImage}}
                        />
                        <View style={styles.content_container}>
                            <View style={styles.header_container}>
                                <Text style={styles.title_text}>{myNew.title}</Text>
                            </View>
                            <View style={styles.description_container}>
                                <Text style={styles.vote_text} >La source est {myNew.source.name}</Text>
                                <Text style={styles.vote_text} >l'auteur est {myNew.author}</Text>
                            </View>
                            <View style={styles.date_container}>
                                <Text style={styles.date_text}>Sorti le {myNew.publishedAt}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
            )
        }
    }

     /*   return(
            <SwipeRow leftOpenValue={0} rightOpenValue={-170} key={myNew}>

                <View style={styles.rowBack}>
                    
                        <Text style={{marginRight:20}}> Déjà lu ?</Text>
                        <Image 
                            source = {require('../assets/icon_bouton_marquer_commeLu.png')}
                            style={styles.buttom_image} />
                   
                   
                </View>

                <View >
                    <View key={myNew.title} style={{ flex: 1}}>         
                        <TouchableOpacity style ={styles.container} onPress = { () => displayDetailForNew() } >
                            <View  style={styles.header}> 
                                <Image 
                                    style={styles.image}  
                                    source={{uri : myNew.urlToImage }}
                                />  
                            <Text style = {styles.title}> {myNew.title} </Text>
                            <Text style = {styles.content} numberOfLines={2}> {myNew.description} </Text> 
                            </View>  
                        </TouchableOpacity>
                    </View>
                </View >
        </SwipeRow>

        )
     

    }
}
*/

const styles = StyleSheet.create({
    main_container: {
      height: 190,
      flexDirection: 'row'
    },
    image: {
      width: 120,
      height: 180,
      margin: 5,
      backgroundColor: 'gray'
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    header_container: {
      flex: 3,
      flexDirection: 'row'
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 12,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
    vote_text: {
      fontWeight: 'bold',
      fontSize: 15,
      paddingRight: 5
    },
    description_container: {
      flex: 3
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666'
    },
    date_container: {
      flex: 1
    },
    date_text: {
      textAlign: 'center',
      fontSize: 14
    }
  })
export default ItemNews