import React from 'react'

import Tabs from './components/Tabs'
 
class Test extends React.Component {
   render() {
      return (
        <Tabs 
          data={
            [{
              index: 'TAB1',
              content: 'Content 1',
              title: 'tab 1 title'
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
      );
   }
}
export default Test;
