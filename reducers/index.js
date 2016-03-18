import * as ActionTypes from '../actions'
import base from './base'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  base
})

export default rootReducer
