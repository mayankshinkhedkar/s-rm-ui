import { ADD_PRODUCT } from '../constants'

let products = [
  {
    productName: "Paav Bhaji",
    quantity: "50",
    price: 50,
    isProductOfTheDEaey: false
  },
  {
    productName: "Burger",
    quantity: "150",
    price: 30,
    isProductOfTheDEaey: false
  },
  {
    productName: "Masala Dosa",
    quantity: "100",
    price: 80,
    isProductOfTheDEaey: false
  },
  {
    productName: "Noodles",
    quantity: "200",
    price: 40,
    isProductOfTheDEaey: false
  },
  {
    productName: "Pizza",
    quantity: "10",
    price: 250,
    isProductOfTheDEaey: false
  },
  {
    productName: "Unlimited Thali",
    quantity: "500",
    price: 60,
    isProductOfTheDEaey: true
  },
]

export default function productsReducer(state = products, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      let newProducts = state;
      newProducts.push(action.data);
      return newProducts
    default:
      return state
  }
}