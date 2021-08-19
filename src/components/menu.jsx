import React, { Component } from 'react';

// this component is menu page
class Menu extends Component {

    
    render() { 
       // clone all products from component's props
        const {products}=this.props
        // Component contetnt
        return ( <div className='container '>
                    <h1 className='container font-weight-light mt-3'>Menu</h1>
                    <table className="table font-weight-light mt-5">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price &#36;</th>
                        <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // Add the products  to menu table
                            products.map(product=>{
                                return(
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price} &#36;</td>
                                        <td><span onClick={()=>this.props.addToCart(product)}  style={{cursor:'pointer',color:`${product.incart?'black':'grey'}`}}><i className='fa fa-cart-arrow-down fa-2x'></i></span></td>
                                    </tr>
                                );
                            })
                        }
                    
                    </tbody>
                    </table>
        </div> );
    }
}
 
// default export
export default Menu;