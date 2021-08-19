import React, { Component } from 'react';
class Cart extends Component {
   
    render() { 
        // Creatin Product Array from component Props if Props dosn't containe item products the product const will be 
        const products=this.props.products?this.props.products:[]
    
        return ( 
            <div className='container font-weight-light'>
                <h1 className='text-secondary mt-3 font-weight-light'>Shopping Cart</h1>
                {
                    products.length<=0?'':(<button onClick={this.props.reset} className='btn btn-danger btn-lg mb-5 mt-5 font-weight-light btn-block'>Reset</button>)
                }
                
                {products.length>0?'':(<h4 className='text-danger text-center mt-5 font-weight-light '>! There is No Products In The Cart Please go to the menu and add Your Products.</h4>)}

                {
                    products.map(product=>{
                        return (
                            <div key={product.id} className='row'>
                                <h3 className='col font-weight-light'>{product.name}</h3> 
                    
                               <span className='col'>
                                    <span className={`badge badge-${product.count>0?'primary':'warning'} `} style={{fontSize:'18px'}}>{this.countFormat(product)}</span>
                                    <button onClick={()=>this.props.incrementCount(product)} className='btn btn-lg btn-primary m-2 font-weight-light'>+</button>
                                    <button onClick={()=>this.props.decrementCount(product)} className='btn btn-lg btn-primary m-2 font-weight-light'>-</button>
                                    <button onClick={()=>this.props.deleteProduct(product)} className='btn btn-lg btn-danger font-weight-light'><i className='fa fa-trash  '></i>  delete</button>
                               </span>

                            </div>
                        );
                    })
                }
               <p className='font-weight-bold text-primary'><span className='font-weight-light fa-2x' >Total Price :</span> {this.getTotalPrice(products)} &#36;</p>
            </div>
            );
    }

    // This Method used to formate Product's Count if product count is 0 return 'Zero' as String else retun exact count
    countFormat(product){
        return product.count>0?product.count:'Zero'
    }
    getTotalPrice(products){
        let totalprice=0
        for (let index = 0; index < products.length; index++) {
            totalprice+= products[index].count*products[index].price;
            
        }
        return totalprice
    }
}
 
export default Cart;