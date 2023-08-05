
import React from 'react';
import { IProduct } from '../../data/products';

interface IProductProps {
  product: IProduct;
  selectProduct: (id: number) => void;
}

type TProductState = {
  // isSelected: boolean;
  isDeleted: boolean;
  selectedProducts: string[],
}


class Product extends React.Component<IProductProps, TProductState> {
  constructor(props: IProductProps) {
    super(props);
    this.state = {
      // isSelected: false,
      isDeleted: false,
      selectedProducts: [],
    }
  }

  styles() {
    let btnStyle = 'border-2 p-2 bg-slate-100 mb-10  hover:bg-orange-400 w-24'
    let cardClass1 = 'border-4 py-4 px-4 text-center w-48 flex flex-col items-center';
    let cardClass2 = 'border-4 py-4 px-4 text-center w-48 flex flex-col items-center bg-slate-500';
    let cardClass3 = 'border-4 border-green-600 py-4 px-4 text-center w-48 flex flex-col items-center';
    let colorActive = 'text-amber-500 font-bold';

    return { btnStyle, cardClass1, cardClass2, cardClass3, colorActive };
  }


  handlerClick = () => {
    // this.setState({ isVisible: !this.state.isVisible })
  }

  handlerDelete = () => {
    this.setState({ isDeleted: true });
  }

  handlerRecover = () => {
    this.setState({ isDeleted: false });
  }

  render() {
    const style = this.styles();
    const { product: { id, name, quantity, image, isSelected }, selectProduct } = this.props;
    const { isDeleted } = this.state;

    if (isDeleted) {
      return (
        <div>
          <button onClick={this.handlerRecover} className={style.btnStyle}>Recovery</button>
        </div>
      );
    }

    let cardClassName;
    let cardText;

    if (quantity === 0) {
      cardClassName = style.cardClass2;
      cardText = <span className={style.colorActive}>Нема в наявності</span>;
    } else {
      cardClassName = style.cardClass1;
      cardText = `кількість: ${quantity}`;
    }

    const changeBorder = isSelected ? style.cardClass3 : '';
    const changeTextSelect = isSelected ? 'Select ON' : 'Select OFF';
    if (this.state.isDeleted) {
      return null;
    }

    return (
      <>
        <div className={`${cardClassName} ${changeBorder}`}>
          <button onClick={() => selectProduct(id)} className={style.btnStyle}>{changeTextSelect}</button>
          <button onClick={this.handlerDelete} className={style.btnStyle}>Delete</button>
          <img src={image} alt={name} className='w-24' />
          <p>{name}</p>
          <p>{cardText}</p>
        </div >
      </ >
    );
  }
}

export default Product;





