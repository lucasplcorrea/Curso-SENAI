import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import {
 Promises,
 Fetch,
 BrowserApi,
 LocalStorage,
 Json
} from "./pages/Javascript";

import {
 ControlledVsUncontrolledComponents,
 Hooks,
 SideEffects
} from "./pages/React";

function App() {
 const router = createBrowserRouter([
  {
   path: "/",
   element: <Home />
  },
  {
   path: "/javascript",
   children: [
    {
     path: "promises",
     element: <Promises />
    },
    {
     path: "fetch",
     element: <Fetch />
    },
    {
     path: "browser-api",
     element: <BrowserApi />
    },
    {
     path: "local-storage",
     element: <LocalStorage />
    },
    {
     path: "json",
     element: <Json />
    }
   ]
  },
  {
   path: "/react",
   children: [
    {
     path: "hooks",
     element: <Hooks />
    },
    {
     path: "componentes-controlados-e-nao-controlados",
     element: <ControlledVsUncontrolledComponents />
    },
    {
     path: "efeito-colateral",
     element: <SideEffects />
    }
   ]
  }
 ]);

 return <RouterProvider router={router} />;
}

export default App;
