import { useState } from 'react';
import './App.css';
import Category from './components/Category/Category';
import Product from './components/Product/Product';

function App() {
  // const [search, setSearch] = useState('');

  // const handleChange = e => {
  //   setSearch(e.target.value);
  // }

  return <>
    <div className="app">
      <div className='app-search'>
        <h1>PRODUCTS</h1>
        <form>
          <input
            className='app-input'
            type='text'
            placeholder='Search...'
            // onChange={handleChange}
          />
        </form>
      </div>
      <Category name='Electronics'/>
      <Product name='Iphone' price='99.99'/>
      <Product name='Iphone' price='99.99'/>

      <Category name='Sporting Gools'/>
      <Product name='Football' price='49.99'/>
      <Product name='Football' price='49.99'/>
    </div>
  </>;
}

export default App;
