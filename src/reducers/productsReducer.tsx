interface IProduct {
  id: number
  images: Array<any>
  brand: string 
  price: number
  description: string
  discountPercentage: number
}

const initialState: IProduct[] = [];

const addToCart = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return (
        [...state, action.payload]
      );
    default:
      return state;
  }
};

const addToFavourites = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return (
        [...state, action.payload]
      );
    default:
      return state;
  }
};

export { addToCart, addToFavourites };
