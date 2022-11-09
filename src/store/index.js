import { legacy_createStore as createStore} from 'redux'

const initialState = ["Keboard","Mouse","Monitor"]

const reducerFn = (state={initialState:initialState},action) =>{
  if(action.type === 'ADD'){
    return {
        initialState:[...action.payLoad]
    }
  }
  return state;
}

const store = createStore(reducerFn);

export default store;