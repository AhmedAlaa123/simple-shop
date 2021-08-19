import React, { Component } from 'react';
class LoginPage extends Component {
    state = { 
        username:'',
        password:''
     }
     handelChange =e=>{
        this.setState({[e.target.id]:e.target.value})
     }
     handelSubmit =e=>{
         e.preventDefault()
         const loginResault=this.props.login(this.state)
         if(loginResault){
            this.props.history.replace('/add-product')
            alert('Login is Succeeful')
         }
         else{
            alert('Username or password is error!')
            this.setState({username:'',password:''})
         }
       
     }
    render() { 
        return ( 
            <div className='container text-secondary font-weight-light'>
                <h1 className='font-weight-light mt-2'>Login</h1>
                <form onSubmit={this.handelSubmit} className='mt-5'>
                    <div className="from-group">
                        <label className='fa-2x' htmlFor='username'>Username :</label>
                        <input className='form-control' id='username' type='text'  onChange={this.handelChange} placeholder='Enter username' value={this.state.username}required/>
                    </div>
                    <div className="from-group mt-3">
                        <label className='fa-2x' htmlFor='password'>password</label>
                        <input className='form-control' id='password' type='password' onChange={this.handelChange}  placeholder='Enter password' value={this.state.password}  required/>
                    </div>
                    <input type='submit' className='btn btn-secondary mt-3' value='Login'/>
                </form>
            </div> );
    }
}
 
export default LoginPage;