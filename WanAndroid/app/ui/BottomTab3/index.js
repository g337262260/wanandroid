/**
 * ScreenTab1/index.js
 */
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native'

export default class ScreenTab3 extends Component {
    // 自定义当前页面路由配置，后面用到的createBottomTabNavigator也使用这个对象中的属性
    static navigationOptions = {
    // 设置 title
    title: "TAB3"
};

constructor(props) {
    super(props);
    this.navigation = props.navigation;
}

render() {
    return(
        <View>
            <Text style={{ fontSize: 36 }}>TAB3</Text>
        </View>
    );
}
}