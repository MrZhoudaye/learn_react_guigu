// import './App.css';
import React, { Component } from 'react'
import Search from './components/search';
import List from './components/list';

export default class App extends Component {

  // state
  state = {
    isFirst: true,// 定义是否是初次进入页面
    isLoading: false,// 定义是否在加载
    list: [],// 定义返回数组
    errorMsg:''// 定义接口错误
  }

  // 更新状态
  updateState = (state) => {
    this.setState(state)
  }

  render() {
    return (
      <div className='App'>
        <Search updateState = {this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}
