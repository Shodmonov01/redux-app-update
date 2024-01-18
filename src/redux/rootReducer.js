import {combineReducers} from 'redux'
import { likesReducer } from './likeReducer'
import { textReducer } from './textReducer'


 export const rootReducer = combineReducers({

   likesReducer,
   textReducer,
 })