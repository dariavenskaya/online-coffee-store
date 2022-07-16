import './styles/Shop.css'
import Catalog from './Catalog';


function Shop() {
    return (
      <>
      <div className="wrapper">
      <h3>FILTERS:</h3>
          <div className="filters">
              <div className="price-filter">
               <div className="filter-name">
                Filter by price:
                </div>
                <div className="price-range">
                <p className='price-min'>0</p>
                <input type="range" />
                <p className='price-max'>100</p>
                </div>
              </div>
              <div className="category-filter">
              <div className="filter-name">
                Filter by category:
                </div>
                <div className="checkers">
                  <label className="checkbox">
                    <input type="checkbox"/>
                    <span>coffee</span>
                  </label>
                  <label className="checkbox">
                    <input type="checkbox" className='check'/>
                    <span>tea</span>
                  </label>
                  <label className="checkbox">
                    <input type="checkbox"/>
                    <span>accesories</span>
                  </label>
                </div>
              </div>
              <div className="sorting-filter">
              <div className="filter-name">
                Sort by:
                </div>

                <select name="sort" id="sort-by">
                    <option value="random">random</option>
                    <option value="name(A-Z)">name(A-Z)</option>
                    <option value="name(Z-A)">name(Z-A)</option>
                    <option value="price(low to high)">price(low to high)</option>
                    <option value="price(high to low)">price(high to low)</option>
                </select>

              </div>
          </div>
          <Catalog />
      </div>
      </>
    );
  }
  
  export default Shop;
  