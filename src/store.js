import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

import thunk from 'redux-thunk'

// const store = compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(rootReducer, {});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;