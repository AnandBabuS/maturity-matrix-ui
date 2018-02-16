import React from 'react'
import styles from './App.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/scss/bootstrap.scss'

import Home from './Home.jsx'
import Test from './Test.jsx'
import Result from './Result.jsx'

class App extends React.Component {
   render() {
      return (
        <Router>
            <div style={{height: '100%', color: '#d86805' }}>
                {/* <ul>
                    <li className={styles.inline}><Link to={'/'}>Home</Link></li>
                    <li className={styles.inline}><Link to={'/test'}>test</Link></li>
                    <li className={styles.inline}><Link to={'/result'}>result</Link></li> 
                </ul> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/test' component={Test} />
                    <Route exact path='/result' component={Result} />
                </Switch>
            </div>
        </Router>
      );
   }
}
export default App