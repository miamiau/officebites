import actions from '../actions/order.actions';

const INITIAL_STATE = {
    name: 'Thalia',
    address: 'Tineretului',
    area: 'Bucuresti'
}

const restaurantReducer = (state = INITIAL_STATE, action) => {
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

export default restaurantReducer;