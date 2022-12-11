import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Route';

function App() {
  return (
    <div className="bg-gray-900">
      <div className='max-w-screen-2xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
