import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import SearchBox from '../components/Search';
import L from 'leaflet';
import '../styles/Map.css';

// Componente para mover el mapa a la nueva ubicación
const MoveMap = ({ lat, lon }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon], 12); // Ajusta el mapa a la nueva ubicación
    map.invalidateSize(); // Asegura que el mapa se redibuje correctamente
  }, [lat, lon, map]);

  return null;
};

// Función para crear un ícono personalizado con FontAwesome
const createIcon = (iconClass) => {
  return new L.DivIcon({
    className: 'custom-icon',
    html: `<i class="${iconClass}" style="font-size: 24px; color: #fff; background-color: #007bff; border-radius: 50%; padding: 8px;"></i>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

const Map = () => {
  const [position, setPosition] = useState([-31.4201, -64.1888]);
  const [label, setLabel] = useState("Ubicación: Córdoba");
  const [markers, setMarkers] = useState([]);
 
  const centers = [
    {
      lat: -31.408262254678935, lon:-64.21911982842065,
      nombre: "COPRIN",
      direccion: "Av. Duarte Quiros 5307, B° Lomas del Suquía",
      telefono: "4647828",
      categoria: "REHAB-INTEG",
      iconClass: 'fas fa-hospital', // Icono de FontAwesome
    },
    {
      lat: -31.410316502161578, lon:-64.16745285373158,
      nombre: "CEIN",
      direccion: "Sarmiento 1283, B° Gral Paz",
      telefono: "4524350",
      categoria: "REHAB-INTEG",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.402871878950954, lon:-64.1834249878973,
      nombre: "FARFALINA",
      direccion: "Tucumán 1195, B° Cofico",
      telefono: "3514718065 / 3512026473",
      categoria: "REHAB-INTEG",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.473815436629064, lon:-64.23334094799495,
      nombre: "CENEIN",
      direccion: "Cleveland 5372, B° Sta Isabel, Zona Sur",
      telefono: "4940347 / 153056237",
      categoria: "REHAB-INTEG",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.47190250571849, lon:-64.16126678909106,
      nombre: "DESCUBRIR",
      direccion: "Rotary Internacional 2865, B° Villa Eucarística, Zona Sur",
      telefono: "4834401",
      categoria: "REHAB-INTEG",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.416506551430757, lon:-64.17862500031637,
      nombre: "CIEP",
      direccion: "25 de Mayo 376, B° Centro",
      telefono: "4215313 / 3513560883",
      categoria: "REHAB (CATEG-HASTA LOS 12 AÑOS)",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.43624637385564, lon:-64.17814994094337,
      nombre: "GOSPA",
      direccion: "Felix Olmedo 2158, B° Rogelio Martínez, Zona Sur",
      telefono: "4822150",
      categoria: "NO INTEGRACION",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.410489040987343, lon:-64.17545604634367,
      nombre: "KIRON",
      direccion: "Bv. Guzmán 625, B° Centro",
      telefono: "153181923",
      categoria: "CAT INT ESC - REHA INDEP",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.439044954605183, lon:-64.17653679750167,
      nombre: "INENI",
      direccion: "Av. Richieri 2378, B° Jardín",
      telefono: "4825826",
      categoria: "REHAB-INTEG (NIÑOS)",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.4206,
      lon: -64.1875,
      nombre: "*****",
      direccion: "Av. Gral Paz 1450, B° Alta Córdoba",
      telefono: "4715701",
      categoria: "REHAB ADULTOS",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.43759249383845, lon:-64.12792912332255,
      nombre: "INSERIR",
      direccion: "Carnerillo 2173, B° Empalme, Zona Sur",
      telefono: "4569032 / 3513571517",
      categoria: "REHAB-INTEG (NIÑOS)",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.43423485289416, lon:-64.1307642663444,
      nombre: "INSERIR",
      direccion: "Jachal 4304, B° Empalme, Zona Sur",
      telefono: "4574515 / 3517148493",
      categoria: "REHAB-INTEG ADULTO",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.447995796755613, lon:-64.1768856208685,
      nombre: "SAN CAMILO",
      direccion: "Av. Richieri 3182, B° Jardín, Zona Sur",
      telefono: "4647297",
      categoria: "REHAB-INTEG",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.372101147920418, lon:-64.23269806347213,
      nombre: "CTRO NEUROCIENCIA Y REHAB",
      direccion: "Zona Norte, Juan Bautista Daniel 1981, B° Cerro de las Rosas",
      telefono: "3516165836",
      categoria: "INTEG (CATEG)",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.37026846433709, lon:-64.24076104710235,
      nombre: "ROBERT Y ROSINE LEFORT",
      direccion: "Amelia Earhart 4547, X5009 Córdoba,Zona Norte frente al Chateau, B° Valle Cerro",
      telefono: "4817100 / 3514354583 / 351816262",
      categoria: "CENTRO CATEGORIZADO (REH)",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.4199,
      lon: -64.1842,
      nombre: "****",
      direccion: "Jose Artigas 318, B° Alberdi, Centro",
      telefono: "3518729605 / 156183280",
      categoria: "CENTRO CATEGORIZADO SOLO INTEG ESCOLAR",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.4240,
      lon: -64.1870,
      nombre: "FUNDACION ARKO",
      direccion: "Colon 1642, Centro",
      telefono: "3517019726",
      categoria: "CENTRO CATEGORIZADO (INTEG ESCOLAR)",
      iconClass: 'fas fa-hospital',
    },
    {
      lat: -31.4260,
      lon: -64.1820,
      nombre: "CENTRO VIDA PLENA",
      direccion: "Av. Raymundo Montenegro 7175, Argüello",
      telefono: "3516995825 / 3512238211",
      categoria: "CENTRO CATEGORIZADO (REHAB E INTEGRACION)",
      iconClass: 'fas fa-hospital',
    },
  

    // Aquí puedes seguir agregando más centros si es necesario
  ];

  const schools = [
 
    {
      lat:-31.39464631667617, lon:-64.19516086277133,
      nombre: "El Sol",
      direccion: "Colombres 938 Bº San Martin (fte a la plaza de Los Burros)",
      telefono: "0351-4715548 / 155949435",
      contacto: "Vanesa",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.380847047068883, lon:-64.24417232545775,
      nombre: "Divina Providencia",
      direccion: "Gob. José E Bustos 873",
      telefono: "4821017",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.387917933553243, lon:-64.21162828482314,
      nombre: "Centro Educativo Mater Privada",
      direccion: "Juan Argarañas 1756 Bº Villa Cabrera",
      telefono: "4809139",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.440952909430912, lon:-64.19355560476978,
      nombre: "Escuela N° 19. Beatriz Martínez Allio",
      direccion: "Maestro López S/N. Ciudad Universitaria",
      telefono: "4343536",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.407461809434515, lon:-64.23491654894987,
      nombre: "Escuela Especial Blanca Feit Pública",
      direccion: "Av. Don Bosco 3950 Bº Las Palmas",
      telefono: "4347857",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.427512076001992, lon:-64.19376609127761,
      nombre: "Escuela Especial Carolina Mosca Pública",
      direccion: "Brasil y Belgrano. Nueva Córdoba",
      telefono: "4333445",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.423133556794546, lon:-64.22916950477071,
      nombre: "Escuela Especial Ckary Cay",
      direccion: "Comechingones 1359, Bº Los Platanos",
      telefono: "4883462",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.431945340005807, lon:-64.17102716803484,
      nombre: "Escuela Especial Dr. Domingo Cabred (Taller de Computación)",
      direccion: "Av. Deodoro Roca S/N. Parque Sarmiento",
      telefono: "4585590 int. 17",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.44959386637952, lon:-64.15658336244071,
      nombre: "Escuela Especial Dr. Domingo de Moragas",
      direccion: "Pampayasta y Matanza, Bº Ampl. San Carlos",
      telefono: "4334220",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.39491855661871, lon:-64.1978721908783,
      nombre: "Escuela Especial El Puente (discapacitados más severos)",
      direccion: "General Guido 1027 Bº San Martin",
      telefono: "4722377",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.356179528617528, lon:-64.24278160218734,
      nombre: "Escuela Especial Julian Baquero",
      direccion: "Rafael Nuñez 5187, Argüello",
      telefono: "(03543) 449080",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.408567059375027, lon:-64.16773117512618,
      nombre: "Escuela Especial Lydia Coriat",
      direccion: "Jacinto Rios Esq. Libertad, Bº Gral Paz",
      telefono: "4339131 / 4520087",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.42451884564329, lon:-64.21172962505936,
      nombre: "Escuela Especial María Montessori Privada",
      direccion: "Perú 1751 Esq. Sol de mayo, Bº San Fco",
      telefono: "4347842",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.378873844914995, lon:-64.22896642395824,
      nombre: "IBIS. Instituto Bilingüe de Sordos",
      direccion: "Adrián Conejo 1817, Cerro de las Rosas",
      telefono: "4348388",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.440296608277272, lon: -64.19342994894808,
      nombre: "ILAC. Instituto del Lenguaje y la Audición",
      direccion: "Maestro López S/N. Ciudad Universitaria",
      telefono: "4334523",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.370259303830846, lon:-64.24078250477369,
      nombre: "Fundación Robert Rosine Lefort",
      direccion: "Amelia Echart 4547",
      telefono: "152208643 (Liliana) / 153816263 (Joaquín)",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.43942218430408, lon:-64.19274679127685,
      nombre: "Instituto Hellen Keller",
      direccion: "Maestro López S/N. Ciudad Universitaria",
      telefono: "4334547",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.380565741147382, lon: -64.1438338324712,
      nombre: "Escuela Enrique Moras",
      direccion: "Diez Gomez 2441 Bº Vivero Norte",
      telefono: "4349720",
      contacto: "",
      iconClass: 'fas fa-school',
    },
    {
      lat:-31.47479052059548, lon: -64.23603677524143,
      nombre: "Escuela Don Orione",
      direccion: "Cottolengo 1955 Bº Santa Isabel",
      telefono: "3516838221",
      contacto: "",
      iconClass: 'fas fa-school',
    }
  ]  

  const handleSearch = ({ lat, lng, label }) => {
    setPosition([lat, lng]);
    setLabel(label);
    setMarkers((prevMarkers) => [
      ...prevMarkers,
      { lat, lng, label, iconClass: 'fas fa-map-marker-alt' },
    ]);
  };

  

  const handleReset = () => {
    setPosition([-31.4201, -64.1888]);
    setLabel("Ubicación: Córdoba");
    setMarkers([]);
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <SearchBox onSearch={handleSearch} onReset={handleReset} />



      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true} // Asegura que los controles de zoom estén habilitados
        zoomControlPosition="bottomleft" // Cambia la posición de los controles de zoom
      >
        <MoveMap lat={position[0]} lon={position[1]} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marcadores de centros */}
        {centers.map((center, index) => (
          <Marker key={index} position={[center.lat, center.lon]} icon={createIcon(center.iconClass)}>
            <Popup>
              <strong>{center.nombre}</strong><br />
              Dirección: {center.direccion}<br />
              Teléfono: {center.telefono}<br />
              Categoría: {center.categoria}
            </Popup>
          </Marker>
        ))}

        {schools.map((schools, index) => (
          <Marker key={index} position={[schools.lat, schools.lon]} icon={createIcon(schools.iconClass)}>
            <Popup>
              <strong>{schools.nombre}</strong><br />
              Dirección: {schools.direccion}<br />
              Teléfono: {schools.telefono}<br />
              Contacto: {schools.contacto}
            </Popup>
          </Marker>
        ))}




        {/* Marcadores dinámicos */}
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]} icon={createIcon(marker.iconClass)}>
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
