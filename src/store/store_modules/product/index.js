import state from './state'
import * as getter from './getter'
import * as mutation from './mutation'
import * as action from './action'
export default {
    namespaced: true,
    getter,
    mutation,
    action,
    state
}