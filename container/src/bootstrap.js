import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

console.log('Container')

const elementProducts = document.querySelector('#my-products')
const elementCart = document.querySelector('#my-cart')

productsMount(elementProducts)
cartMount(elementCart)
