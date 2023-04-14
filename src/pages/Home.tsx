import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addToCartAction, addToFavouritesAction } from "../actions/productsActions";
import axios from "axios";
import { Spinner, MyAlert } from "../components";

var Common: any = require("../styles/common");
import { HomeStyles } from '../styles';

const { container, productInfoWrapper, productName, productPrice, discountedProductPrice, image } = HomeStyles

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  interface IProduct {
    id: number
    images: Array<any>
    brand: string 
    price: number
    description: string
    discountPercentage: number
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    const getProducts = axios.get('https://dummyjson.com/products')
    getProducts.then(res => setProducts(res.data.products))
  };

  const productList: IProduct[] = products;


  const addToCart = (product: IProduct) => {
    dispatch(addToCartAction(product));
    MyAlert("Sepete Eklendi!", `${product.brand} \n ${product.description}`, " Tamam :)");
  };

  const addToFavourites = (product: IProduct) => {
    dispatch(addToFavouritesAction(product));
    MyAlert("Favorilere Eklendi!", `${product.brand} \n ${product.description}`, " Tamam :)");
  };

  if (!productList?.length) {
    return (
      <Spinner />
    );
  }

  const getAllProducts = (product) => {
    const { images, brand, price, description, discountPercentage } = product
    const discountedPrice = (price - (price * discountPercentage / 100))?.toFixed(2)

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => addToCart({ images, brand, price, description })}
      >
        <View style={container}>
          <View style={productInfoWrapper}>
            <TouchableOpacity 
                activeOpacity={0.5}
                onPress={() => addToFavourites({ images, brand, price, description })}
            >
              <Text style= {{color: '#D90000', margin :5}}>Favorilere Ekle</Text>
            </TouchableOpacity>
            <Image source={{ uri: images[0] }} style={image}
              resizeMode="contain"
            />
          </View>
        
          <View style={productInfoWrapper}>
            <Text style={productName}>{`${brand}\n`}</Text>
            <Text style={productName}>{`${description}\n`}</Text>
          </View>
          <View>
            <Text style={productPrice}>{discountedPrice?.toString()} TL</Text>
            <Text style={discountedProductPrice}>{price?.toString()} TL</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={Common.container}>
      <Text style={Common.pageTitle}>{`Ürünler (Toplam ${productList.length} adet)`}</Text>
      <FlatList
        data={productList}
        renderItem={({ item }) => getAllProducts(item)}
        keyExtractor={product => product.id}
      />
    </View>
  );
};

export { Home };
