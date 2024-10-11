import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import Contact from './pages/Contact'; // Import directly
import WhatWeDo from './Pages/WhatWeDo'; // Import directly
import Home from './pages/Home'; // Import directly
import Services from './pages/Services'; // Import directly

// Routes configuration
const routes = [
   { path: '/', element: <Home /> },
   { path: '/whatwedo', element: <WhatWeDo /> },
   { path: '/services', element: <Services /> },
   { path: '/contact', element: <Contact /> },
];

const router = createBrowserRouter([
   {
      element: (
         <header className="header-section">
            <Header />
            <main className="appMain">
               <Outlet />
            </main>
         </header>
      ),
      children: routes.map(({ path, element }) => ({
         path,
         element,
      })),
   },
]);

function App() {
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;


