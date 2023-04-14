interface IProduct {
  id: number
  images: Array<any>
  brand: string 
  price: number
  description: string
  discountPercentage: number
}

let addToCartAction = (product: IProduct) => ({
  type: "ADD_TO_CART",
  payload: product
});

let addToFavouritesAction = (product: IProduct) => ({
  type: "ADD_TO_FAVOURITES",
  payload: product
});


export { addToCartAction, addToFavouritesAction };
