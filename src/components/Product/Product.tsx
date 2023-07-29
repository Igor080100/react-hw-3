import React from 'react';
import { IProduct } from '../../data/products';

interface ProductProps {
  product: IProduct;
}
export class Product extends React.Component<ProductProps> {
  styles() {
    let cardClass1 = 'border-2 py-4 px-4 text-center w-48 flex flex-col items-center';
    let cardClass2 = 'border-2 py-4 px-4 text-center w-48 flex flex-col items-center bg-slate-500';
    let colorActive = 'text-amber-500 font-bold';

    return { cardClass1, cardClass2, colorActive };
  }

  render() {
    const style = this.styles();
    const { name, quantity, image } = this.props.product;

    let cardClassName;
    let cardText;

    if (quantity === 0) {
      cardClassName = style.cardClass2;
      cardText = <span className={style.colorActive}>Нема в наявності</span>;
    } else {
      cardClassName = style.cardClass1;
      cardText = `кількість: ${quantity}`;
    }

    return (
      <div className={cardClassName}>
        <img src={image} alt={name} className='w-24' />
        <p>{name}</p>
        <p>{cardText}</p>
      </div>
    );
  }
}

// export function Product(props: ProductProps) {
//   return (
//     <div>
//       <img src={props.product.image} alt={props.product.name} />
//       <p>{props.product.name}</p>
//       <p>{props.product.quantity}</p>
//     </div>
//   );
// }

