import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Search extends Component {
  // input框数据
  // 添加一条
  add = (e) => {
    let {target,keyCode} = e
    // console.log(target,keyCode)
    if(keyCode !== 13) return

    if(target.value === ''){
      alert('请输入')
      return
    }
    // 触发父组件方法
    this.props.addTodo({id:nanoid(),name:target.value,state:false})
    target.value = ''
  }
  render() {
    return (
      <div>
          <input id="search" onKeyDown={this.add} type="text" placeholder='请输入你的任务名称，按回车键确认' />
      </div>
    )
  }
}
