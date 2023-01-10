import { useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
    },
  ]);

  return routes;
}
