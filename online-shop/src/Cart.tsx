import CardInCart from './CardInCart';
import Items from './types';
import list from './data';

function Cart({items = []}){
    return(
        <>
        <div className="cart-page wrapper">
          <h3>SHOPPING CART</h3>
          <hr/>
          {list.map((item:Items) => (
                <CardInCart
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  id={item.id}
                  category={item.category}
                  stock={item.stock}
                  producer={item.producer}
                />
          ))}
        </div>
        </>
    )
}
export default Cart;