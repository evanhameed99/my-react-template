import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            )
          })

          }
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
