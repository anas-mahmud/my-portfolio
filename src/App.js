import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Route';

function App() {
  return (
    <div className="App">
      <div className=''>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
