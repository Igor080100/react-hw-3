
import React from 'react';
import { IProduct } from '../../data/products';

interface SelectedProductsProps {
   products: IProduct[];
}

class SelectedProducts extends React.Component<SelectedProductsProps> {
   render() {
      const { products } = this.props;
      const selectedProducts = products.filter(product => product.isSelected)
      return (
         <div>
            {selectedProducts.map(product => <li key={product.id}>{product.name}</li>)}
         </div>
      );
   }
}

export default SelectedProducts;

