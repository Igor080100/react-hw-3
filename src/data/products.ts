
export interface IProduct {
   id: number;
   name: string;
   quantity: number;
   image: string;
   isSelected?: boolean;
}

export const productsDB: Array<IProduct> = [
   {
      id: 1,
      name: 'xeon e5 2670 v3',
      quantity: 50,
      image: 'xeon.jpg',
   },
   {
      id: 2,
      name: ' huananzhi x99',
      quantity: 25,
      image: 'mother.jpg',
   },
   {
      id: 3,
      name: 'Aerocool KCAS-1000M ',
      quantity: 0,
      image: 'kcas.jpg',
   },



]

