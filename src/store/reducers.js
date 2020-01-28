import { combineReducers } from 'redux';
import orderReducer from './reducers/order.reducer';
import restaurantReducer from './reducers/restaurant.reducer';

const rootReducer = combineReducers({
    order: orderReducer,
    restaurant: restaurantReducer
})

export default rootReducer;