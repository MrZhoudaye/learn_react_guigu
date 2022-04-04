import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {isFirst,isLoading,list,errorMsg} = this.props
    return (
      <div className='userList'>
        { 
          isFirst ? <h2>欢迎使用</h2> :
          isLoading ? <h2>Loading</h2> :
          errorMsg ? <h3>{errorMsg}</h3> :
          list.map(item => {
            return (
              <div className="item">
                <a rel='noreferrer' href={item.html_url} target='_blank'>
                  <img src={item.avatar_url} alt="" />
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}
