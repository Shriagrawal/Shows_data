
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import FormGroupExample from './Form';

const appRouter = createBrowserRouter(
  {
    path: '/Form',
    element: <FormGroupExample />,
  },
  {
    path: '',
    element: <App />,
  }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
App.js