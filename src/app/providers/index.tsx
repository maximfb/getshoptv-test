import { createBrowserRouter } from "react-router-dom";
import Home from '../../pages/Home';
import Promo from '../../pages/Promo';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/promo",
    element: <Promo />,
  }
]);