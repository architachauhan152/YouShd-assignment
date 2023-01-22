import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthorizeSocial } from './pages/AuthorizeSocial';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { NumberPage } from './pages/NumberPage';
import { OtpPage } from './pages/OtpPage';

function App() {
  return (
    <div className="App">
      {/* <======Routing=======> */}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/enter-number' element={<NumberPage />} />
        <Route path='/enter-otp' element={<OtpPage />} />
        <Route path='/authorize-social' element={<AuthorizeSocial />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>      
    </div>
  );
}

export default App;
