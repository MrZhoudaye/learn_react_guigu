import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  // 当点选中时
  onChangeHandler = (id) => {
    return (e) => {
      // console.log(id,e.target.checked)
      this.props.changeTodoState(id,e.target.checked)
    }
    // this.props.changeTodoState()
  }

  // 删除
  delHander = (id) => {
    if(window.confirm('确定要删除吗？')){
      this.props.delTodo(id)
    }
  }

  render() {
    const {id,name,state} = this.props
    // console.log(id,name,state)
    return (   
      <li className='item'>
        <input id={id} type="checkbox" checked={state} onChange={this.onChangeHandler(id)}/>
        <span className='item_name'>{name}</span>
        <button onClick={() => {this.delHander(id)}} className='del_btn' id={id}>删除</button>
      </li>
    )
  }
}
