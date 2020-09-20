import { combineReducers } from 'redux';
import productsSlice from '../features/products/productsSlice';
import basketProductsSlice from '../features/basket-products/basketProductsSlice';

export default combineReducers({
    products: productsSlice,
    salesBasketProducts: basketProductsSlice
})
