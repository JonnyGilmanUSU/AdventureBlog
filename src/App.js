import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import CanyoneeringPage from './pages/CanyoneeringPage/CanyoneeringPage';
import ClimbingPage from './pages/ClimbingPage/ClimbingPage';
import AboutPage from './pages/AboutPage/AboutPage';
import BackpackingPage from './pages/BackpackingPage/BackpackingPage';
import HikingPage from './pages/HikingPage/HikingPage';
import AdventuresPage from './pages/AdventuresPage/AdventuresPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';





function App() {

  const router = createBrowserRouter([
    {path: '/', element: <Layout />, errorElement: <Layout><ErrorPage/></Layout>, children: [
      {index: true, element: <HomePage/>},
      {path: 'adventures/canyoneering', element: <CanyoneeringPage/>},
      {path: 'adventures/climbing', element: <ClimbingPage/>},
      {path: 'adventures/backpacking', element: <BackpackingPage/>},
      {path: 'adventures/hiking', element: <HikingPage/>},
      {path: 'adventures', element: <AdventuresPage/>},
      {path: 'login', element: <LoginPage/>},
      {path: 'signup', element: <SignupPage/>},
      {path: 'about', element: <AboutPage/>}

    ]}
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
