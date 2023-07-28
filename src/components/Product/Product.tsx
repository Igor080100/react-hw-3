import React from 'react';
import { IProduct } from '../../data/products';

interface ProductProps {
  product: IProduct;
}

export class Product extends React.Component<ProductProps> {
  render() {
    const { name, price, image } = this.props.product;//Деструктуризація 
    return (
      <div className="border-2 py-4 px-4 text-center w-48 flex flex-col items-center">
        <img src={image} alt={name} className='w-24' />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    );
  }
}

// export function Product(props: ProductProps) {
//   return (
//     <div>
//       <img src={props.product.image} alt={props.product.name} />
//       <p>{props.product.name}</p>
//       <p>{props.product.price}</p>
//     </div>
//   );
// }

