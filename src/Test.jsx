import React from 'react'

import Tabs from './components/Tabs'
import Questions from './Questions'
import { questionsConfig } from './config'
 
class Test extends React.Component {

   constructor(props) {
     super(props)
     this.getQuestions = this.getQuestions.bind(this)
   }

   getQuestions(key) {
     console.log(key)
     console.log(questionsConfig)
     console.log(questionsConfig[key])
      return questionsConfig[key]
   }

   render() {
      return (
        <div className="testPage">
        <Tabs
          data={
            [{
              index: 'Team',
              content: <Questions data={this.getQuestions('team1')}/>,
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
