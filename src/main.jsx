import ReactDOM from 'react-dom/client';
import React from 'react';
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
import App from './App.jsx';
import store from './store/store';
// import { jsxDEV } from "react/jsx-dev-runtime";
import { Provider } from 'react-redux';


// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
 
// //     <Provider store={store}>
// //         <App/>
// //     </Provider>
  

// //     );






    ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
     <App/>
     </Provider>
  </React.StrictMode>,
)






