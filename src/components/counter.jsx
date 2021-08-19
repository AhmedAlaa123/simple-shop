import React, { Component } from 'react';
class Counter extends Component {
    state = {   
        value:this.props.value
    }
    handelingIncrement=()=>{
        this.setState({value:this.state.value+1})
    }
    render() { 
        const {value: count}=this.state
        return ( 
            <div>
              
                <span style={{fontSize:20}} className={`badge badge-${count===0?'warning':'primary'} m-2`}>{this.formateCount()}</span>
                <button onClick={this.handelingIncrement} className='btn btn-secondary btn-sm'>
                    Increament
                </button>
                <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onclick(this.props.id)}>Delete</button>
            </div>
         );
    }
    formateCount=()=>this.state.value===0?'zero':this.state.value
}
 
export default Counter;
