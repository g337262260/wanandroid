/**
 *BottomTab/index.js
 */

import {createBottomTabNavigator} from 'react-navigation'

import PageHome from '../ui/PageHome'
import BottomTab1 from '../ui/BottomTab1'
import BottomTab2 from '../ui/BottomTab2'
import BottomTab3 from '../ui/BottomTab3'


const ScreenTab = createBottomTabNavigator(
    //配置tab路由
    {
        PageHome:PageHome,
        BottomTab1:BottomTab1,
        BottomTab2:BottomTab2,
        BottomTab3:BottomTab3,
    },
    //其他配置
    {
        tabBarPosotion:'bottom'
    }

);

export default ScreenTab;
