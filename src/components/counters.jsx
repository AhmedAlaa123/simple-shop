import React,{Component} from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:3},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:1},
            {id:5,value:0},
        ]
     }
     deleteItem=(id)=>{
        
        // there is tow ways to remove object  from the array 
        
        // first ==> is by using filter method by filtering all objects that don't have this id

         const counters=this.state.counters.filter(counter=>counter.id!==id)


        /*
            seconde ==> is by finding the index of this object in the array and using splice function in array remove this object
            const {counters}=this.state;
            const index=counters.findIndex(counter=>counter.id===id);
            if(index<0)return;
            counters.splice(index,1);
        */
        this.setState({counters})
     }
    render() { 
        return ( 
            <div>
                {this.state.counters.map(counter=><Counter  key={counter.id} value={counter.value} onclick={this.deleteItem} id={counter.id}/>)}
            </div>
         );
    }
}

 
export default Counters;