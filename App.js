import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class KickerApp extends React.Component {
    render() {
        let pic = {
            uri: 'https://minigolsus.com/wp-content/uploads/2014/09/slide1-table1.png'
        };
        return (
            <View style={styles.container}>
                <DynamicLogo text='Kicker App' pic={pic}/>
            </View>
        );
    }
}

class DynamicLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShowingPic: true}

        setInterval(() => (
            this.setState(previousState => (
                {isShowingPic: !previousState.isShowingPic}
            ))
        ), 1000);
    }

    render() {
        if (this.state.isShowingPic) {
            return (
                <View>
                    <Image source={this.props.pic} style={{width: 200, height: 150}}/>
                </View>
            );
        }

        return (
            <View>
                <Text style={styles.logo}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        color: 'navy',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
