import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
const Main = () => {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
