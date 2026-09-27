import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutIndex from "./pages/about/AboutIndex";
import ServicesIndex from "./pages/services/ServicesIndex";
import RootLayout from "./components/layouts/RootLayout";
import HomeIndex from "./pages/home/HomeIndex";
import ErrorIndex from "./pages/error/ErrorIndex";
import CounterProvider from "./context/CounterContext";
import AuthProvider from "./context/AuthContext";

const AuthLayout = () => (
  <AuthProvider>
    <Outlet />
  </AuthProvider>
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element = {<AuthLayout/>}>
          <Route index element={<HomeIndex />} />
          <Route path="/about" element={<AboutIndex />} />
        </Route>
        <Route path="/services" element={<ServicesIndex />} />

        <Route path="*" element={<ErrorIndex />} />
      </Route>,
    ),
  );

  return (
    <CounterProvider>
      <RouterProvider router={router} />
    </CounterProvider>
  );
}

export default App;
