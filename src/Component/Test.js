import { render } from '@testing-library/react';
import React, { Component } from 'react';
class Test extends Component{
   


render(){
    return(
        
        <div className='container mt-3'>
                <div className="modal d-block mt-5" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <p>ji lo jindagi</p>
                      
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  onClick={()=>{
                                        this.props.close()
                            } }> Close </button>  
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
}
export default Test;