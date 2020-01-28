import actions from '../actions/order.actions';

const INITIAL_STATE = {
    number: 12345,
    restaurant: 'Thalia',
    items: [],
    address: 'Splaiul Unirii'
}

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.create: {
            return {
                ...state
            };
        }
        case actions.update: {
            return {
                ...state
            };
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default orderReducer;