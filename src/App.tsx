import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Timer from './components/paths/Timer';
import Palette from './components/paths/Palette';
import { Provider } from 'react-redux';
import { catched, store } from './store/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './app.css'
const router = createBrowserRouter([
    {
      path:"/",
      element:<Outlet />,
      children:[
        {
          index:true,
          element:<Timer />
        },
        {
          path:"palette",
          element:<Palette />
        }
      ]
    }
]);

function App(){
   return (
     <Provider store={store}>
       <PersistGate persistor={catched}>
         <RouterProvider router={router} />
       </PersistGate>
     </Provider>
   )
}

export default App