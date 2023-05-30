import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import router from './router';
import './App.css';

function App() {
  return (
    <>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </>
  );
}

export default App;
