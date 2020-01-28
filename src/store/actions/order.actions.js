import types from '../actionTypes/order.actionTypes';

export function create(order) {
    return {
        type: types.CREATE,
        order
    }
}

export function update(order) {
    return {
        type: types.UPDATE,
        order
    }
}

export default {
    create, update
}