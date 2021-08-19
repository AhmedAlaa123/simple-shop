import React, { Component } from 'react';
 
// this component to product in app database
class AddProduct extends Component {
    state = {
        id:0,
        name:'',
        price:'',
        count:0,
        incart:false
      }
      handelChange=e=>{

          this.setState({[e.target.id]:e.target.value})
      }
      handelSubmit=e=>{
          e.preventDefault();
          if(this.state.name===''||this.state.price==='')
          return
          this.props.submit(this.state)
          this.setState({name:'',price:''})

      }
      componentDidMount(){
        // check if user is active
        if(!(this.props.isActive))
        {
            // redirect to login page if user is not active when he want to open add product page.
          this.props.history.replace('/login')
          return
        }
      
      }
    render() { 
        return ( 
        <div className='container text-secondary font-weight-light'>
            <h1 className='font-weight-light mt-2'>Add Product Page</h1>
            <form onSubmit={this.handelSubmit} className='mt-5'>
                <div className="from-group">
                    <label className='fa-2x' htmlFor='name'>Product Name :</label>
                    <input className='form-control' id='name' type='text'  onChange={this.handelChange} placeholder='Enter Product Name' value={this.state.name} required/>
                </div>
                <div className="from-group mt-3">
                    <label className='fa-2x' htmlFor='price'>Product Price &#36; :</label>
                    <input className='form-control' id='price' type='number' onChange={this.handelChange}  placeholder='Enter Product Name' min={1} value={this.state.price}   required/>
                </div>
                <input type='submit' className='btn btn-secondary mt-3' value='Add Product'/>
            </form>
        </div> );
    }
}
 
export default AddProduct;