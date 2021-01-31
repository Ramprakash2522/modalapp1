import React, { Component } from 'react';
import Model from './Model';
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: "ram"
            

        }
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    
    render() {
        console.log(this.state.show)
        return (
            <div>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={() => {
                                    this.setState({ show: true })
                                }} >Close</button>
                            {this.state.show && <Model
                            
                             modelclose={this.handleClose}
                             name={this.state.name}
                             age="14"

                             />}
            </div>

        )
    }
}
export default Example;