import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import '../src/assets/style.css'
import '../src/assets/modalDelete.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App'
import './assets/sass/custom.scss'
import reportWebVitals from './reportWebVitals'


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
