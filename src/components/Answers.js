var React = require('react');

 
class Answers extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'option1'
    };
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    }, this.props.onDataSelected(this.state.selectedOption))
  }

  render () {
    return (
      <div className="flexContainer">
        <div className="flexHalf">
            <div>
                <label>
                  <input type="radio" value="1" checked={this.state.selectedOption === '1'} onChange={this.handleOptionChange} />
                  Never
                </label>
            </div>
            <div>
                <label>
                  <input type="radio" value="2" checked={this.state.selectedOption === '2'} onChange={this.handleOptionChange}/>
                  Rarely
                </label>
            </div>
            <div>
                <label>
                  <input type="radio" value="3" checked={this.state.selectedOption === '3'} onChange={this.handleOptionChange}/>
                    Sometimes
                </label>
            </div>
        </div>
        <div className="flexHalf">
            <div>
            <label>
                <input type="radio" value="4" checked={this.state.selectedOption === '4'} onChange={this.handleOptionChange}/>
                Frequently
            </label>
            </div>
            <div>
            <label>
                <input type="radio" value="5" checked={this.state.selectedOption === '5'} onChange={this.handleOptionChange}/>
                Always
            </label>
            </div>
          </div>
        </div>
    );
  }
}

export default Answers