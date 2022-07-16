import './styles/Catalog.css'
import Card from './Card';
// import Items from './types';
import list from './data'

function Catalog(){
    return(
        <>
        <div className="catalog wrapper">
          <h3>CATALOG</h3>
          <div className="cards">
              {list.map((item) => (
                <Card
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
        </div>
        </>
    )
}

export default Catalog;