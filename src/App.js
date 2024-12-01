import logo from './logo.svg';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Intro } from './Pages/Intro/Intro';
import { ConsentForm } from './Pages/ConsentForm/ConsentForm';
import { Demographics } from './Pages/Demographics/Demographics';
import { Gateway } from './Pages/Gateway/Gateway';
import { SecondPart } from './Pages/SecondPart/SecondPart';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/intro' element={<Intro/>}></Route>
        <Route path='/ConsentForm' element={<ConsentForm/>}></Route>
        <Route path='/Demographics' element={<Demographics></Demographics>}></Route>
        <Route path='/testGateway' element={<Gateway/>}></Route>
        <Route path='/SecondPart/:id/:uid/:spf'element={<SecondPart/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
