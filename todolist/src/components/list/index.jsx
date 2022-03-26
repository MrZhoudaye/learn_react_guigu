import React, { Component } from 'react'
import Item from '../item/index'

export default class List extends Component {

  // 获取到每一项是否选中，并将结果提交给App父组件
  // changeItemState = (id,value) => {
  //   // console.log(id,value)
  //   this.props.changeTodoState(id,value)
  // }

  render() {
    const { listArr,changeTodoState,delTodo} = this.props
    return (
      <ul>  
        {
          listArr.map((item) => {
            return (
              <Item changeTodoState={changeTodoState}  key={item.id} {...item} delTodo={delTodo}/>
            )
          })
        }
      </ul>
    )
  }
}
