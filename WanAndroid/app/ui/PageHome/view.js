/**
 * HomePage.view.js
 *
 */

import React,{Component} from 'react'
import {Text,View,Button} from 'react-native'

export default self =>(
    <View>
        <Text style={{ fontSize:36}}>
            Home
        </Text>
        <Button title="PageHome1" onPress={()=>self.navigation.navigate('PageHome1')} />
    </View>
)