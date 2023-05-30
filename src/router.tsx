import { createBrowserRouter } from 'react-router-dom';
import ListNavi from './templates/ListNavi';
import MemoForm from './templates/MemoForm';
import Main from './templates/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/list',
        element: <ListNavi />,
      },
      {
        path: '/add',
        element: <MemoForm />,
      },
    ],
  },
]);

export default router;
