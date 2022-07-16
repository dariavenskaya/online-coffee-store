import './styles/CardInCart.css'
import React from 'react';
import Items from './types';

interface ICount {
    plus():void;
    minus():void,
    count:number
}


function Counter(props:ICount) {
	return (
		<div className="quantity">
		  <button className="plus" onClick={props.plus}>+</button>
		  <div className="number">{props.count}</div>
		  <button disabled={props.count === 0} className="minus" onClick={props.minus}>-</button>
		</div>
	)
	};


function CardInCart(props:Items){
    const [count, setCount] = React.useState(1);
	const plus = () => {
		setCount(count + 1)
	};
		const minus = () => {
		setCount(count -1)
	};

    return(
        <>
        <div className="card-in-cart">
            <div className="item">
                <p className='product-name'>{props.name}</p>
                <img width={170} src={props.image} alt="product" />
            </div>
            <div className="price">{props.price}$</div>
            <Counter 
            plus={plus}
            minus={minus}
            count={count}
            />
            <div className="subtotal">
                {count*props.price}$
            </div>
            <div className="remove-btn">
            <button><img  src="remove.svg" alt="remove item" /></button>
            </div>
        </div>
        <hr/>
        </>
    )
}
export default CardInCart;