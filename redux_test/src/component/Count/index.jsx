import React, { Component } from 'react'
import { Select } from 'antd'
import { Button } from 'antd'
const {Option} = Select

export default class Count extends Component {

  state = {
   count:0,
   value:1
  }
  selectedNumber = (value) => {
   this.setState({value:value})
  }
  //加
  increment = () => {
    const {count,value} = this.state
    console.log(count,value)
    this.setState({count: count + value * 1})
  }

  // 减
  decrement = () => {
   const {count,value} = this.state
   console.log(count,value)
   this.setState({count: count - value * 1})
  }

  // 奇数加 
  incrementIfOdd = () => {
   const {count,value} = this.state
   console.log(count,value)
   if(count % 2 !== 0){
    this.setState({count: count + value * 1})
   }
  }

  // 异步加
  incrementAsync = () => {
   const {count,value} = this.state
   console.log(count,value)
   setTimeout(() => {
    this.setState({count: count + value * 1})
   }, 500);
  }

  render() {
    const {count} = this.state
    return (
      <div>

        <h1>当前求和为： { count }</h1>
        <Select defaultValue="1" style={{ width: 120 }} onChange={this.selectedNumber}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>&nbsp;&nbsp;
        <Button type="primary" onClick={this.increment}>+</Button>&nbsp;&nbsp;
        <Button type="primary" onClick={this.decrement}>-</Button>&nbsp;&nbsp;
        <Button type="primary" onClick={this.incrementIfOdd}>求和为奇数时加</Button>&nbsp;&nbsp;
        <Button type="primary" onClick={this.incrementAsync}>异步加</Button>
      </div>
    )
  }
}
