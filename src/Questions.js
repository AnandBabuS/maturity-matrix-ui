import React from 'react'

import Collapsable from './components/Collapsable'
 
class Questions extends React.Component {

render() {
    console.log(this.props.data)
     const collapsables = this.props.data.map((question) => {
         return <Collapsable key={question} data={question}/>
     })
      return (
          <div>
              {collapsables}
          </div>
      );
    }
}
export default Questions;