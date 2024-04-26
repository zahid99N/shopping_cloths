import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ShoppingApp from "./pages/ShoppingApp";
import ShoppingWebsite from "./pages/ShoppingWebsite";
import HeroSection from "./pages/HeroSection";
import Fovourite from "./pages/Fovourite";
import Typography from "./pages/Typography";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/shopping-website":
        title = "";
        metaDescription = "";
        break;
      case "/hero-section":
        title = "";
        metaDescription = "";
        break;
      case "/fovourite":
        title = "";
        metaDescription = "";
        break;
      case "/typography":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ShoppingApp />} />
      <Route path="/shopping-website" element={<ShoppingWebsite />} />
      <Route path="/hero-section" element={<HeroSection />} />
      <Route path="/fovourite" element={<Fovourite />} />
      <Route path="/typography" element={<Typography />} />
    </Routes>
  );
}
export default App;
