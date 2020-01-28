import types from '../actionTypes/restaurant.actionTypes';

export function create(restaurant) {

    return {
        type: types.CREATE,
        restaurant
    }
}

export function update(restaurant) {
    return {
        type: types.UPDATE,
        restaurant
    }
}

export default {
    create, update
}