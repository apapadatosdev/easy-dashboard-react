import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TailwindExample from './views/tailwindexample';

function App() {
  return (
    <div className="App">
      <h1>Easy Dashboard</h1>
      <BrowserRouter>
        <Routes>
          {/* <div className="App">
            <header className="-App-header">
            </header>         */}
            
              <Route path="/tailwindcss" element={<TailwindExample></TailwindExample>} />                      
              <Route path="/"  element={<TailwindExample></TailwindExample>} />                                  
          {/* </div> */}
        </Routes>    
      </BrowserRouter>  
    </div>  
  );
}

export default App;
