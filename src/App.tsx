import { createElement as element } from 'react';//Витягнув функцію і 
// import React from 'react';
import './App.css';
import { Product } from './components/Product/Product'
import { products } from './data/products'


function App() {
  return element('div', { className: 'container mx-auto mt-10 flex justify-center ' },
    element(Product, { product: products[0] }),
    element(Product, { product: products[1] }),
    element(Product, { product: products[2] }),
  )
}

// function App() {
//   return (
//     <div className='container mx-auto max-w-2xl pt-5'>
//       <Product product={products[0]} />
//       <Product product={products[1]} />
//       <Product product={products[2]} />
//     </div>
//   )
// }


export default App;


