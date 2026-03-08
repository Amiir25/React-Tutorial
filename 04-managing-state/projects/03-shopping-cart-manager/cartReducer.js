export const initialState = {
    itemsOnCart: [],
}

export const cartReducer = (state, action) => {
    switch(action.type) {
        case "add_item": {
            return {
                itemsOnCart: [
                    ...state.itemsOnCart,
                    action.item,
                ]
            }
        };

        case "delete_item": {
            const index = state.itemsOnCart.findIndex(item => item.id === action.itemId);
            
            if (index !== -1) return state    

            return {
                itemsOnCart: [
                    ...state.itemsOnCart.slice(0, index),
                    ...state.itemsOnCart.slice(index + 1)
                ],
            }
        };

        case "remove_item": {

            return {
                itemsOnCart: state.itemsOnCart.filter(
                    item => item.id !== action.itemId
                ),
            }
        }

        case "clear_cart": 
            return  initialState

        default:
            return state;
    }
}