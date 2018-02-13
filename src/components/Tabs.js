import React from 'react'
import Titles from './Titles'
 
class Tabs extends React.Component {

    constructor(props) {
        super(props)
        this.copyPropsToState = this.copyPropsToState.bind(this)
        this.tabSelected = this.tabSelected.bind(this)
        this.state = {
            contents: {},
            titles: {},
            index: [],
            selectedIndex: '',
        }
    }

    componentDidMount () {
        this.copyPropsToState()
    }

    tabSelected(selectedIndex) {
        this.setState({selectedIndex})
    }

    copyPropsToState() {
        const contents = {}
        const titles = {}
        const index = []
        let selectedIndex = ''
        if(this.props.data) {
            this.props.data.forEach((tab) => {
                contents[tab.index] = tab.content
                titles[tab.index] = tab.title
                index.push(tab.index)
                if (tab.selected) {
                    selectedIndex = tab.index
                }
            })
            this.setState({
                contents,
                titles,
                index,
                selectedIndex,
            })
        }
    }

    render() {
      return (
          <div className="container-fluid">
            <div className="row">
                <div style={{height: '100%'}} className="col-lg-4 col-md-4">
                    <Titles
                        data = {this.state.titles}
                        selectedIndex = {this.state.selectedIndex}
                        index={this.state.index}
                        onTabSelected={this.tabSelected}
                    />
                </div>
                <div style={{height: '100%'}} className="col-lg-8 col-md-8">
                    {this.state.contents[this.state.selectedIndex]}
                </div>
            </div>
          </div>
      );
    }
}
export default Tabs;