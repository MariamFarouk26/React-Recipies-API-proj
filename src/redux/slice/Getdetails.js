import { createSlice } from "@reduxjs/toolkit"

const getrecpieSlice = createSlice({
    name:'getrecpie',
    initialState:{getrecpie:[]},
        reducers:{
            getrecpie:(state,action)=>{
                state.getrecpie = action.payload
                console.log(action.payload)
            } 
        }  
});

export const {getrecpie}=getrecpieSlice.actions
export default getrecpieSlice.reducer


// import { createSlice } from "@reduxjs/toolkit"

// const getrecpieSlice = createSlice({
//     name:'getrecpie',
//     initialState:{getrecpie:[]},
//         reducers:{
//             getrecpie:(state,action)=>{
//                 state.getrecpie.push(action.payload)
//                 console.log(action.payload)
//             } 
//         }  
// });

// export const {getrecpie}=getrecpieSlice.actions
// export default getrecpieSlice.reducer