/**
 * HomePage/index.js
 *
 */

import React,{Component} from 'react'
import { Image } from 'react-native'
import view from './view'
import waRequest from '../../config/waRequest'

export default class PageHome extends Component{
    static navigationOptions = {
        title:'首页',
        tabBarIcon:({focused}) =>{
            const icon = focused
                ?require('../../assets/images/tab_home_active.png')
                :require('../../assets/images/tab_home.png');
            return <Image source={icon} style={{height:22,width:22}} />;
        }
    };

    constructor(props){
        super(props)
        this.navigation = props.navigation
    }

    async getArticle(){
        waRequest.homeArticle('')
    }

    componentDidMount(): void {
        this.getArticle()
    }

    render(){
        return view(this)
    }
}