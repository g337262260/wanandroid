import React ,{Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'


//引入页面组件
import ScreenTab from '../ui'

//配置路由
const navigator = createStackNavigator({
    ScreenTab:ScreenTab,
})

const  App = createAppContainer(navigator)

export default App
