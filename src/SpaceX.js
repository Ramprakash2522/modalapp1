import React, { Component } from 'react';
import axios from 'axios';
import Model from './Component/Model';
class  SpaceX extends  Component{
    constructor(props){
        super(props);
        this.state = {
            cores:[],
        }
        
    }
    componentDidMount() {
        
        axios.get("https://api.spacexdata.com/v3/cores")
        .then(res => {
            console.log(res)
             this.setState({ cores: res.data })
            })
    }

    render(){
        let { cores } = this.state;
       console.log(cores);
        return(
            <div className="container">
            <div>
                    <input placeholder="serch by title" className="form-control mt-3"/>
                </div>
                <div className="row">
              
            {
                cores&&cores.length>0&&cores.map((data,index)=>{
                    return(
                        <div  className="row-sm-4 ">
                        <Model
                         title={data.core_serial}
                         block={data.block}
                        detail={data.details}
                        />
                        
                    </div>

                    )
                })

            }
           </div>
          </div>
        )
    }
}
export default SpaceX;