var React = require('react');


const Radio = ({ button, selectedData, handleOptionChange }) => (<div>
  <label>
    <input type="radio" value="0" checked={selectedData === '0'} onChange={handleOptionChange} />
      {button}
  </label>
</div>)
 
class Answers extends React.Component {

  constructor (props) {
    super(props)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleOptionChange (changeEvent) {
    this.props.onDataSelected(changeEvent.target.value)
  }

  render () {
    return (
      <div className="flexContainer">
        <div className="flexHalf">
            <Radio 
              button="Never"
              selectedData={this.props.selectedData}
              handleOptionChange={this.handleOptionChange}
            />
            <div>
                <label>
                  <input type="radio" value="1" checked={this.props.selectedData === '1'} onChange={this.handleOptionChange}/>
                  Rarely
                </label>
            </div>
            <div>
                <label>
                  <input type="radio" value="2" checked={this.props.selectedData === '2'} onChange={this.handleOptionChange}/>
                    Sometimes
                </label>
            </div>
        </div>
        <div className="flexHalf">
            <div>
            <label>
                <input type="radio" value="3" checked={this.props.selectedData === '3'} onChange={this.handleOptionChange}/>
                Frequently
            </label>
            </div>
            <div>
            <label>
                <input type="radio" value="4" checked={this.props.selectedData === '4'} onChange={this.handleOptionChange}/>
                Always
            </label>
            </div>
          </div>
        </div>
    );
  }
}

export default Answers