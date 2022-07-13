import './styles/Shop.css'

function Shop() {
    return (
      <>
      <div className="wrapper">
          <div className="filters">
              <div className="price-filter">
               <div className="filter-name">
                Filter by price:
                </div>
                <input type="range" />
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
                <select name="" id=""></select>
                </div>

              </div>
          </div>
      </div>
      </>
    );
  }
  
  export default Shop;
  