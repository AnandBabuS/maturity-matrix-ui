import React from 'react'
 
import Answers from './Answers';
import MaturityLevel from './MaturityLevel';

class Collapsable extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        collapsed: true,
        selectedData: '2',
    }
    this.changeState = this.changeState.bind(this)
    this.onDataSelected = this.onDataSelected.bind(this)
}

changeState() {
    this.setState({
        collapsed: !this.state.collapsed,
    })
}

onDataSelected(data) {
    this.setState({
        selectedData: data,
    }, this.props.onChange({ [this.props.index]: parseInt(data) }))
}

render() {
      return (
        <div className="container">
            <div className="questionBox" onClick={this.changeState}>
                {this.props.data}
            </div>
            <div className={this.state.collapsed ? "collapsed": "expanded"}>
                <div className="flexContainer radioField">
                    <div className="answers">
                        <Answers
                            selectedData={this.state.selectedData}
                            onDataSelected={this.onDataSelected}
                        />
                    </div>
                    <div className="graph">
                        <MaturityLevel
                            matured={ this.state.selectedData ? 25 * parseInt(this.state.selectedData) : 0 }
                            gap={ this.state.selectedData ? 25 * ( 4 - parseInt(this.state.selectedData)) : 0 }
                        />
                    </div>
                </div>
            </div>
        </div>
      );
    }
}
export default Collapsable;