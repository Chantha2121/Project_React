import React, { Component } from 'react'
import Column from './Column'

class Table extends Component {
  render() {
    return (
      <div>
        <table>
            <tbody>
            <tr>
                <Column/>
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
}

export default Table
