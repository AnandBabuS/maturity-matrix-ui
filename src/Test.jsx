import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { browserHistory } from 'react-router';

import Tabs from './components/Tabs'
import Questions from './Questions'
import { questionsConfig } from './config'

class Test extends React.Component {

   constructor(props) {
     super(props)

     this.getQuestions = this.getQuestions.bind(this)
     this.getNextTab = this.getNextTab.bind(this)
     this.onsubmit = this.onsubmit.bind(this)

     this.tabData = [{
      index: 'team',
      content: <Questions
        onSubmit={this.onsubmit}
        data={this.getQuestions('team')}
        index={'team'}
      />,
      title: 'Team'
    },
    {
      index: 'productOwner',
      content: <Questions
        onSubmit={this.onsubmit}
        data={this.getQuestions('productOwner')}
        index={'productOwner'}
      />,
      title: 'Product Owner'
    },
    {
      index: 'scrumMaster',
      content: <Questions
        onSubmit={this.onsubmit}
        data={this.getQuestions('scrumMaster')}
        index={'scrumMaster'}
      />,
      title: 'Scrum Master',
      selected: true,
    },
    {
      index: 'sprintPlanning',
      content: <Questions
        onSubmit={this.onsubmit}
        data={this.getQuestions('sprintPlanning')}
        index={'sprintPlanning'}
      />,
      title: 'Sprint Planning'
    },
    {
      index: 'releasePlanning',
      content: <Questions
        onSubmit={this.onsubmit}
        data={this.getQuestions('releasePlanning')}
        index={'releasePlanning'}
      />,
      title: 'Release Planning'
    }]
   }

   getQuestions(key) {
      return questionsConfig[key]
   }

   getNextTab(tab) {
      const index = this.tabData.findIndex((element) => {
        return element.index === tab
      })
      return this.tabData[index + 1] ? this.tabData[index + 1].index : ''
   }

   onsubmit(data) {
    this.setState(data, () => {
      const index = this.getNextTab(Object.keys(data)[0])
      if(index) {
        this.tabs.tabSelected(index)
      } else {
        console.log(this.state)
        this.props.history.push('/result')
      }
    })
  }

   render() {
      return (
        <div className="testPage">
        <Tabs
          ref={ (tabs) => { this.tabs = tabs }}
          data={ this.tabData }
        />
        </div>
      );
   }
}
export default withRouter(Test)
