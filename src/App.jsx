import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import HomePage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />} />
          <Route path="/components/*" element={<ComponentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
