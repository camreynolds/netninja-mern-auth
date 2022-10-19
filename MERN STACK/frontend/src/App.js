import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
	
import {useAuthContext} from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home';
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {
  const {user} = useAuthContext()

  return (
    <div className="App">
    <BrowserRouter>
			<Navbar />	
			<div className="pages">
				<Routes>
					<Route
						path="/"
						// element={<Home/>}
						element={user ? <Home/> : <Navigate to='/login'/>}
					/>
					<Route
						path="/login"
						// element={<Login/>}
						element={!user ? <Login/> : <Navigate to='/'/>}
					/>
					<Route
						path="/signup"
						// element={<Signup/>}
						element={!user ? <Signup/> : <Navigate to='/'/>}
					/>
				</Routes>	
			</div>
		</BrowserRouter> 
    </div>
  );
}

export default App;