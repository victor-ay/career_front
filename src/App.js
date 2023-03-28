import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import Jobs from './Jobs/Jobs';
import P404 from './P404/P404';

function App() {
  return (
    <Routes>
      <Route path = '/' element={<Layout />}>
        <Route path='/' element={<Jobs />}/>
          {/* <Route path='settings/' element={<Settings />}/> */}
        <Route path='*' element ={<P404 />}/>
      </Route>
    </Routes>
  );
}

export default App;
