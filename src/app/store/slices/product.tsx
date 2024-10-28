import {createSlice} from '@reduxjs/toolkit'
interface ProductSate{
    name:string;
    category:string;
    qty:number;
}
const initialState:ProductSate[]=[{name:"shoes",category:"bata",qty:2},
    {name:"clothes",category:"silk",qty:3},
    {name:"glasses",category:"gucci",qty:4}
]

const productSlice=createSlice({
name:"product",
initialState,
reducers:{
    addProduct(state,action){
        state.push(action.payload)
    },
    deleteProduct(state,action){},
}
});
console.log(productSlice)
export const{addProduct,deleteProduct}=productSlice.actions;
export default productSlice.reducer