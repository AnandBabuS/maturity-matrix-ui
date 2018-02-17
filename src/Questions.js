import React from 'react'

import Collapsable from './components/Collapsable'
 
class Questions extends React.Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit() {
        this.props.onSubmit({ [this.props.index]: this.state })
    }

    onChange(answer) {
        this.setState(answer)
    }

    render() {
        let count = 0
        const collapsables = this.props.data.map((question) => {
            return <Collapsable index={count} key={count++} data={question} onChange={this.onChange}/>
        })
        return (
            <div>
                {collapsables}
                <div>
                    <button onClick={this.onSubmit}> Submit </button>
                </div>
            </div>
        );
    }
}
export default Questions;