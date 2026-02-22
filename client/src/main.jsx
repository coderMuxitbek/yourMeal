import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
