import { StyleSheet } from 'react-native';

const imageWidth = 320;
const imageHeight = 240;

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D9D9D9',
    alignItems: "center",
    flexDirection: 'row',
    margin: 15,
    marginBottom: 5,
    borderRadius:10,
    paddingHorizontal: 10
  },
  productInfoWrapper: {
    flex: 1,
    width: imageWidth,
    padding: 10,
  },
  productName: {
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "bold"
  },
  image: {
    width: imageWidth / 3,
    height: imageHeight / 3,
  },
  discountedProductPrice: {
    textDecorationLine: 'line-through'
  }
});
