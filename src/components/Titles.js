import React from 'react'
 
class Titles extends React.Component {

    constructor(props) {
        super(props)
        this.onTabSelected = this.onTabSelected.bind(this)
    }

    onTabSelected(selected) {
        console.log(selected)
        this.props.onTabSelected(selected)
    }

    render() {
        const titles = this.props.index.map((index) => (
            <div className="spacing-around">
                <button onClick={() => { this.onTabSelected(index) }} key={index} type="button" className="btn btn-secondary">{this.props.data[index]}</button>
            </div>
        ))
      return (
          <div className="widen btn-group-vertical" role="group" aria-label="Vertical button group">
            {titles}
          </div>
      );
    }
}
export default Titles;