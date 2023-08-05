
import React from 'react';
import Product from '../Product/Product';
import SelectedProducts from '../SelectItems/SelectItems'
import { productsDB, IProduct } from '../../data/products';

interface MainSectionState {
   products: IProduct[];
}

class MainSection extends React.Component<{}, MainSectionState> {
   constructor(props: any) {//!КОСТИЛЬ
      super(props);
      this.state = {
         products: productsDB.map(product => ({ ...product, isSelected: false })),

      };
   }
   selectProduct = (id: any) => {//!КОСТИЛЬ
      //2
      // const { products } = this.state;
      // const selectedProduct = products.find(product => product.id === id);
      // selectedProduct.isSelected = !selectedProduct.isSelected;
      // this.setState({ products: [...products] });

      //1
      const { products } = this.state;
      const newProducts = products.map(product => ({
         ...product, isSelected: product.id === id ? !product.isSelected : product.isSelected
      }));
      this.setState({ products: newProducts })
   }

   render() {
      const { products } = this.state;
      const renderProducts = products.map(product => (
         <Product key={product.id} product={product} selectProduct={this.selectProduct} />
      ));

      return (
         <><section className='min-h-screen'>
            <div className=' container mx-auto mt-10 flex justify-center gap-5 '>
               {renderProducts}
            </div>
            <div className=' items-center text-center'>
               <h2>Список обраного заліза: </h2>
               <SelectedProducts products={products} />
            </div>
         </section>
         </>
      );
   }
}

export default MainSection;









