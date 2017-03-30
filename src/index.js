import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todo from './reducers'
import { addTodo, toggleTodo, setVisibleFilter } from './actions'
import App from './components/App'

let store = createStore(todo)

store.dispatch(setVisibleFilter('SHOW_COMPLETED'))
render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)
