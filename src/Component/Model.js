import React, { Component } from 'react';
class Model extends Component {   
    render() {
        console.log(this.props)
        return (
            <div className='container mt-3'>
                <div className="modal d-block mt-5" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <p>mfng,vmn.,bvm</p>
                        {this.props.name}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={() => {
                                   this.props.modelclose()

                                }} >Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
                
                 {/* <div className="card mt-3">
                    <div className="card-body">
                        <h1 className="text-success">{this.props.title}</h1>
                        <h5 className="text-danger"> {this.props.block}</h5>
                        <h6 className="text-primary">{this.props.detail}</h6>
                    </div>
                </div> */}
            </div>

        )
    }
}
export default Model;