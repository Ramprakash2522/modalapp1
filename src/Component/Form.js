import { logDOM } from '@testing-library/react';
import React, { Component } from 'react';
import Test from './Test';
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            mobile:'',
            age:'',
            email:'',
            show: false



        }
    }
    handleClose=()=>{
        this.setState({show:false})
    }
    render(){
        console.log(this.state.show)
        return(
            
             <div className="container mt-5">
            <div>Enter the Name :</div>
            <input className="form-control mb-2" placeholder="Name" value ={this.state.name} onChange={(e)=>{
                console.log(e.target.value)
                this.setState({ name: e.target.value})
            }}  />

            <div>Enter the Mobile No:</div>
            <input className="form-control mb-2" placeholder="Mobile no"  type="text"  value={this.state.mobile} onChange={(e)=>{
                this.setState({mobile: e.target.mobile})
            }} />

            <div>Enter your  age :</div>
            <input className="form-control mb-2" placeholder="age" value={this.state.age} onChange={(e)=>{
                this.setState({age: e.target.age})
            }} />

            <div> Enter your email :</div>
            <input className="form-control mb-3" placeholder="email"  value={this.state.email} onChange={(e)=>{
                this.setState({email: e.target.email})
            }}/>
            <input className='form-control mb-3' placeholder="password"  type="password" value={this.state.password} onChange={(e)=>{
                    this.setState({password: e.target.password})
            }} />


             <div>   
            <button className="btn btn-primary mb-2"  onClick={()=>{
                        this.setState({ name:"", mobile:"", email:"", age:"" , password:"" })
                    alert('added')
                
                }
                    }> Submit</button>

            </div> 
            
          

            {/* <button type="button" className="btn btn-danger" data-bs-dismiss="modal"  onClick={() => {
                                    this.setState({ show: true})
                                }} >open</button>
                            {this.state.show && <Test
                            close={this.handleClose}
                            
                            

                             />} */}

             
            </div>
        )
    }
}
export default Form;