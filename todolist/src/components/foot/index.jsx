import React, { Component } from 'react'
import './index.css'

export default class Foot extends Component {
  // 选中所有
  changeAll = (e) => {
    let state = e.target.checked
    this.props.changeTodoStateAll(state)
  }

  // 删除所有已完成任务
  setAllAlreadyDel = () => {
    if(window.confirm('确定删除所有已完成任务吗？')){
      this.props.delAllAlreadyState()
    }
  }

  render() {
    const {listArr} = this.props
    const totle = listArr.length // 总数
    let alreadyCount = 0 // 完成数
    // listArr.forEach(item => {
    //   if(item.state){
    //     alreadyCount = alreadyCount + 1
    //   }
    // })
    // 这里使用 reduce 方法，并简写
    alreadyCount = listArr.reduce((prev,cur) => prev + (cur.state ? 1 : 0),alreadyCount)
    return (
      <div id='foot'>
        <input type="checkbox" name="checkAll" id="checkAll" checked={ alreadyCount === totle && totle !== 0} onChange={this.changeAll} />
        <span>已完成{alreadyCount}/全部{totle}</span>
        <button className='del_all_btn' onClick={this.setAllAlreadyDel}>删除所有已完成任务</button>
      </div>
    )
  }
}
