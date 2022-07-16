import './styles/Card.css'
import {useState} from 'react'
import Items from './types';

function Card(props:Items){
    const [cart, setCart] = useState([]);

  const onAddToCart = ()=>{
    console.log(props)
  }


    return(
        <>
        <div className="card">
            <div className="card-image">
                <img width={300} height={340} src={props.image} alt="product" />
            </div>
            <div className="card-info">
                <h5 className='product-name'>{props.name}</h5>
                <div className='product-description'>
                {props.description}
                </div>
                <div className="product-price">
                    <div className='key'>Price:</div>
                    <div>{props.price}$</div>
                </div>
                <div className="in-stock">
                  <div className='key'>In Stock:</div>
                  <div>{props.stock}</div>
                </div>
                <div className="producer">
                  <div className='key'>Producer:</div>
                  <div>{props.producer}</div>
                </div>
            <button className='add-to-cart' onClick ={onAddToCart}>ADD TO CART</button>
            </div>
        </div>
        </>

    )
}

export default Card;