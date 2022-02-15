import "./App.css";
import Navbar from "./components/Navbar";
import routes from "./helpers/Routes";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function RequireAuth({ children }) {
  let auth = true;
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
function App() {
  return (
    <div className="App">
      <Router history={history} forceRefresh={true}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={<route.element title={route.title} />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
