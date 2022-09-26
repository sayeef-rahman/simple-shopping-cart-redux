import { INCREMENT, DECREMENT,} from "./actionTypes";

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:{
            const existingState = [...state];
            const newItemToAdd = action.payload;
            const exists = existingState.find(item => item.id === newItemToAdd.id);

            if(exists && (exists.cartQuantity < newItemToAdd.stockQuantity)){
                exists.cartQuantity = exists.cartQuantity + 1;
                exists.stockQuantity = exists.stockQuantity - 1;
                console.log("exists in if: ",exists);
                return [...existingState];
            }
            else if(exists && exists.cartQuantity === newItemToAdd.stockQuantity){
                console.log("exists in else if: ",exists);
                return [...existingState];
            }
            else{
                newItemToAdd.cartQuantity = newItemToAdd.cartQuantity + 1;
                newItemToAdd.stockQuantity = newItemToAdd.stockQuantity - 1;
                console.log("newItemToAdd in else: ",newItemToAdd);
                return [...existingState, newItemToAdd];
            }

        };

        case DECREMENT:{
            const existingState = [...state];
            const itemToDecrement = action.payload;
            const exists = existingState.find(item => item.id === itemToDecrement.id);

            if(exists && (exists.cartQuantity < itemToDecrement.stockQuantity) && (exists.cartQuantity > 0)){
                exists.cartQuantity = exists.cartQuantity - 1;
                exists.stockQuantity = exists.stockQuantity + 1;
                console.log("exists in if: ",exists);
                return [...existingState];
            }
            else if(exists && exists.cartQuantity === itemToDecrement.stockQuantity){
                console.log("exists in else if: ",exists);
                return [...existingState];
            }
            else{
                if(itemToDecrement.cartQuantity > 0){
                    itemToDecrement.cartQuantity = itemToDecrement.cartQuantity - 1;
                    itemToDecrement.stockQuantity = itemToDecrement.stockQuantity + 1;
                    console.log("itemToDecrement in else: ",itemToDecrement);
                    return [...existingState, itemToDecrement];
                }
                else{
                    return [...existingState];
                }

            }

        }

        default:
            return state;
    }
};

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//         if (state.length === 0){
//             console.log("action.payload: ",action.payload);
//             return [...state, {...action.payload, cartQuantity: action.payload.cartQuantity + 1, stockQuantity: action.payload.stockQuantity - 1}];
//         }
//         else{
//              var newState = state.map((singleProduct) => {
//                 if ((singleProduct.id === action.payload.id) && (singleProduct.cartQuantity < action.payload.stockQuantity)) {
//                     singleProduct.cartQuantity = singleProduct.cartQuantity + 1;
//                     singleProduct.stockQuantity = singleProduct.stockQuantity - 1;
//                     console.log("singleProduct in if:",singleProduct);
//                     return {...singleProduct};
//                 }
//                 else if((singleProduct.id === action.payload.id) && (singleProduct.cartQuantity === action.payload.stockQuantity)){
//                     console.log("singleProduct in else if:",singleProduct);
//                     // return [...state, ...singleProduct];
//                     return {...singleProduct};
//                 }
//                 else {
//                     let newItem = {...action.payload, cartQuantity: action.payload.cartQuantity + 1, stockQuantity: action.payload.stockQuantity - 1};
//                     // state[state.length] = newItem;
//                     console.log("newItem in else:",newItem);
//                     return [...state, {...newItem}];
//                 }
//             });
//             console.log("newState",newState);
//             return newState;
//         };
//
//     case DECREMENT:
//       return state.map((singleProduct) => {
//         if (singleProduct.id !== action.payload.id) {
//           return { ...singleProduct };
//         } else {
//           if (singleProduct.cartQuantity > 0) {
//             return [...state,{cartQuantity: singleProduct.cartQuantity - 1,stockQuantity: singleProduct.stockQuantity - 1}];
//           } else {
//             return state;
//           }
//         }
//       });
//     default:
//       return state;
//   }
// };

export default cartReducer;
