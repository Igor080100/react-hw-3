
export interface IProduct {
   name: string;
   quantity: number;
   image: string;
}

export const products: Array<IProduct> = [
   {
      name: 'xeon e5 2670 v3',
      quantity: 50,
      image: 'xeon.jpg',
   },
   {
      name: ' huananzhi x99',
      quantity: 25,
      image: 'mother.jpg',
   },
   {
      name: 'Aerocool KCAS-1000M ',
      quantity: 0,
      image: 'kcas.jpg',
   },

]