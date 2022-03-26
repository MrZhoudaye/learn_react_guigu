// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react'
import './App.css'
import Foot from './components/foot'
import List from './components/list'
import Header from './components/header'

export default class App extends Component { 
  state = {
    listArr : [
      {id:1,name:'打代码',state:false},
      {id:2,name:'睡觉',state:true},
      {id:3,name:'吃饭',state:false},
    ]
  }
  // 绑定子组件事件 添加
  addTodo = (data) => {
    //动态添加
    const {listArr} = this.state
    this.setState({listArr: [data,...listArr]})
  } 

  // 绑定子组件事件 选中
  changeTodoState = (id,state) => {
    // console.log(id,state)
    // 修改state
    const {listArr} = this.state
    // let index = listArr.findIndex((item) => {
    //   return item.id === id
    // })
    // listArr[index].state = state
    // this.setState({listArr: listArr})

    const newList = listArr.map(item => {
      if(item.id === id) return {...item, state}
      else return item
    })
    this.setState({listArr: newList})
  }

  // 绑定子组件 选中所有
  changeTodoStateAll = (data) => {
    // console.log(data)
    const {listArr} = this.state
    // const newList = listArr.map((item) => {
    //   item.state = data
    //   return item
    // })
    const newList = listArr.map(item => {
      return {...item,state:data}
    })
    this.setState({listArr: newList})
  }

  // 绑定子组件 删除
  delTodo = (id) => {
    const {listArr} = this.state
    const newTodo = listArr.filter((item) => {
      return item.id !== id
    })
    this.setState({listArr:newTodo})
  }

  // 绑定子组件 删除所有已完成
  delAllAlreadyState = () => {
    const {listArr} = this.state
    const newList = listArr.filter((item) => {
      return !item.state
    })
    this.setState({listArr: newList})
  }

  render() {
    const {listArr} = this.state
    return (
      <div id='app'>
        <Header addTodo={this.addTodo}/>
        <List changeTodoState={this.changeTodoState} listArr={listArr} delTodo = {this.delTodo}/>
        <Foot changeTodoStateAll = {this.changeTodoStateAll} delAllAlreadyState = {this.delAllAlreadyState} listArr={listArr}/>
      </div>
    )
  }
}
