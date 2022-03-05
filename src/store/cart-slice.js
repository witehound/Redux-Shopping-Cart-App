import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart : false
    },
    reducers: {
        addToCart (state,actions){ 
            const newItem = actions.payload
            const existingItem = state.itemList.find((item)=> item.id === newItem.id)
            if(existingItem){
                existingItem.quantity++
                existingItem.totalprice =+ newItem.price
            }else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice : newItem.price,
                    name: newItem.name
                })
            }
        },
        removeFromCart (){},
        SetShowCart (state){
            state.showCart = true
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice