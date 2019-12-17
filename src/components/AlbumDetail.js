import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import Button from './Button'
import Card from './Card'
import CardSection from './CardSection'

const css = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle:{
        height: 300,
        flex: 1
    }
})

class AlbumDetail extends Component {
    render(){
        const{
            title,
            artist,
            image,
            url
        } = this.props.album

        return(
            <Card>
                <CardSection>
                    <View style={css.thumbnailContainerStyle}> 
                        <Image 
                        style={css.thumbnailStyle}
                        source={{uri: image}}/>
                    </View>
                    <View style={css.headerContentStyle}>
                        <Text style={css.headerTextStyle}> { title } </Text>
                        <Text> { artist } </Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image 
                    style={css.imageStyle}
                    source={{ uri: image }} />
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(this.props.album.url)}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>

        )
    }
}

export default AlbumDetail;