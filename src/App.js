import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ROUTES from './router/ROUTES';
const routes=createBrowserRouter(ROUTES)
function App() {
  return (
    <div className="App">
<RouterProvider router={routes}/>
    </div>
  );
}

export default App;
