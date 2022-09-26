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
                return [...existingState];
            }
            else if(exists && exists.cartQuantity === newItemToAdd.stockQuantity){
                return [...existingState];
            }
            else{
                newItemToAdd.cartQuantity = newItemToAdd.cartQuantity + 1;
                newItemToAdd.stockQuantity = newItemToAdd.stockQuantity - 1;
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
                return [...existingState];
            }
            else if(exists && exists.cartQuantity === itemToDecrement.stockQuantity){
                return [...existingState];
            }
            else{
                if(itemToDecrement.cartQuantity > 0){
                    itemToDecrement.cartQuantity = itemToDecrement.cartQuantity - 1;
                    itemToDecrement.stockQuantity = itemToDecrement.stockQuantity + 1;
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

export default cartReducer;
