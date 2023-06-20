import "./App.css";
import React from 'react';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

import Changed from './Changed/Changed';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    var cors = require('cors');
    
    return(
        <div className="App">
            <Router>
                <Routes>
                    
                    <Route index element={<Login/>} />
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>} />
                    {/* <Route path ="/Display" element={<Display/>} /> */}
                    <Route path="/Changed" element={<Changed/>} />
                    
              </Routes>
      </Router>
        </div>
    )
}
export default App