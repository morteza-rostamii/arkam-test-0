import { useRoutes } from "react-router";
import { HomePage } from "../pages/HomePage";

const routes = [
  // {
  //   element: <></>,
  //   children: [
  //     {
  //       element: <></>,
  //       children: [
  //         {
  //           path: '/', 
  //           element: <HomePage/>
  //         },
          
  //       ],
  //     },
  //   ]
  // },

  {
    path: '/',
    element: <HomePage/>,
  },

  {
    path: '*', 
    element: <>404</>
  }
];

const Router = () => {
  const router = useRoutes(routes);
  return router;
}

export default Router;