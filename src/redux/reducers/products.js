import { ADD_PRODUCT, UPDATE_PRODUCT_OF_THE_DAY, REMOVE_PRODUCT } from '../constants'

let products = [
  {
    id: 1,
    productName: "Paav Bhaji",
    quantity: "50",
    price: 50,
    isProductOfTheDEaey: false
  },
  {
    id: 2,
    productName: "Burger",
    quantity: "150",
    price: 30,
    isProductOfTheDEaey: false
  },
  {
    id: 3,
    productName: "Masala Dosa",
    quantity: "100",
    price: 80,
    isProductOfTheDEaey: false
  },
  {
    id: 4,
    productName: "Noodles",
    quantity: "200",
    price: 40,
    isProductOfTheDEaey: false
  },
  {
    id: 5,
    productName: "Pizza",
    quantity: "10",
    price: 250,
    isProductOfTheDEaey: false
  },
  {
    id: 6,
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

    case UPDATE_PRODUCT_OF_THE_DAY:

      let newProductOfDay = state;
      let getProductIndex = newProductOfDay.findIndex(obj => obj.isProductOfTheDEaey === true)
      newProductOfDay[getProductIndex].isProductOfTheDEaey = false
      getProductIndex = newProductOfDay.findIndex(obj => obj.id === action.data)
      newProductOfDay[getProductIndex].isProductOfTheDEaey = true

      return newProductOfDay

    case REMOVE_PRODUCT:

      let newUpdatedProducts = state.filter(obj => obj.id !== action.data);

      return newUpdatedProducts

    default:
      return state
  }
}