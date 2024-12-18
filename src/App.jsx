import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Asegúrate de que el componente Navbar esté bien importado
import Footer from "./components/Footer"; // Asegúrate de que el componente Footer esté bien importado
import Home from "./pages/Home";  // Asegúrate de que la página Home esté bien importada
import Centro from "./pages/Centros";  // Asegúrate de que la página About esté bien importada

import Map from "./pages/Map";  // Asegúrate de que el componente Map esté bien importado
import Escuela from "./pages/Escuelas";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Barra de navegación en todas las páginas */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta a la página principal */}
          <Route path="/centros" element={<Centro />} /> {/* Ruta a la página de About */}
          <Route path="/escuelas" element={<Escuela />} /> {/* Ruta a la página de Contact */}
          <Route path="/map" element={<Map />} />  {/* Ruta a la página de Map */}
        </Routes>
        <Footer /> {/* Pie de página en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;
