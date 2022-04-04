import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Search extends Component {

  // 搜索
  searchHandler = () => {
    // 获取到input框中的值
    const {value:keyWord} = this.keyWordElement
    console.log(keyWord);
    // 更新状态
    this.props.updateState({isFirst:false,isLoading:true})

    // 发送请求
    axios.get(`https://api.github.com/search/users1?q=${keyWord}`).then(
      res => {
        this.props.updateState({isLoading:false,list:res.data.items})
      },
      error => {
        this.props.updateState({isLoading:false,errorMsg:error.message})
      }
    )

  }

  render() {
    return (
      <div className='search'>
        <h2>输入关键词查找用户</h2>
        <input ref={c => this.keyWordElement = c} type="text" placeholder='输入关键词' />
        <button onClick={this.searchHandler} >Search</button>
      </div>
    )
  }
}
