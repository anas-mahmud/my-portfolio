import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Route';

function App() {
  return (
    <div className="bg-slate-700 ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
