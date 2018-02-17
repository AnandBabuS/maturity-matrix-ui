import React from 'react'

import Tabs from './components/Tabs'
import Questions from './Questions'
import { questionsConfig } from './config'
 
class Test extends React.Component {

   constructor(props) {
     super(props)
     this.state = {
       team1: null,
       PO: null,
       scrumMaster: null,
     }
     this.getQuestions = this.getQuestions.bind(this)
     this.onsubmit = this.onsubmit.bind(this)
   }

   getQuestions(key) {
      return questionsConfig[key]
   }

   onsubmit(data) {
     console.log(data)
    this.setState(data)
   }

   render() {
      return (
        <div className="testPage">
        <Tabs
          data={
            [{
              index: 'Team',
              content: <Questions
                onSubmit={this.onsubmit}
                data={this.getQuestions('team1')}
                index={'team1'}
              />,
              title: 'Team'
            },
            {
              index: 'TAB2',
              content: 'Content 2',
              title: 'tab 2 title'
            },
            {
              index: 'TAB3',
              content: 'Content 3',
              title: 'tab 3 title',
              selected: true,
            },
            {
              index: 'TAB4',
              content: 'Content 4',
              title: 'tab 4 title'
            },
            {
              index: 'TAB5',
              content: 'Content 5',
              title: 'tab 5 title'
            }]
          }
        />
        </div>
      );
   }
}
export default Test;
