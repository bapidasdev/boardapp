// import React from 'react';
// import  ReactDOM  from 'react';
// import App from './App';
// import './index.css';

// ReactDOM.render(<App/>, document.getElementsByClassName('root'));

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

// -----------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);