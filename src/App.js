// import logo from './logo.svg';
// import './App.css';
import Greetings from './components/greetings';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </>
  );
}

export default App;
