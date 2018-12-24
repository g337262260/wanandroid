import React, {Component} from 'react'
import App from './app/config/route'

export default class RootApp extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return <App/>;
  }
}