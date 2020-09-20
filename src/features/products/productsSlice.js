import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        filteredProducts: [],
        listedProductsNumber: 0
    },
    reducers: {
        setProducts(state, action) {
            state.allProducts = JSON.parse(JSON.stringify(action.payload));
            state.filteredProducts = JSON.parse(JSON.stringify(action.payload));
            state.listedProductsNumber = state.filteredProducts.length;
        },
        setFilteredProducts(state, action) {
            switch (action.payload.filterType) {
                case 'size':
                    state.filteredProducts = filterProducts(state.allProducts, action.payload.filteredSizes);
                    break;
                case 'order':
                    state.filteredProducts = orderProducts(state.filteredProducts || [], action.payload.selectedOrder);
                    break;
                default:
                    console.log('default case');
            }

            state.listedProductsNumber = state.filteredProducts.length;
        }
    }
})

function filterProducts(allProducts, newFilteredSizes) {
    return allProducts.filter((product_, index) => {
        if (newFilteredSizes.length > 0) {
            return product_.availableSizes.some(item => newFilteredSizes.includes(item));
        } else {
            return true;
        }
    });
}

function orderProducts(filteredProducts, selectedOrder) {
    return filteredProducts.sort((a, b) =>
        selectedOrder === 'asc' ? a.price - b.price : selectedOrder === 'desc' ? b.price - a.price : a.price - a.price);
}

export const { setProducts, setFilteredProducts } = productsSlice.actions

export default productsSlice.reducer


