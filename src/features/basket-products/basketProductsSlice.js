import { createSlice } from '@reduxjs/toolkit'

const basketProductsSlice = createSlice({
    name: 'salesBasketProducts',
    initialState: {
        basketProducts: [],
    },
    reducers: {
        addProductToBasket(state, action) {
            if (state.basketProducts.find(_ => _.id === action.payload.id)) {
                state.basketProducts = state.basketProducts.map(_ => {
                    return {..._, quantity: _.id === action.payload.id ? _.quantity + 1 : _.quantity};
                })
            } else {
                action.payload['quantity'] = 1;
                state.basketProducts.push(action.payload);
            }
        },
        changeAmount(state, action) {
            state.basketProducts = action.payload;
        }
    }
})

export const { addProductToBasket, changeAmount } = basketProductsSlice.actions

export default basketProductsSlice.reducer


