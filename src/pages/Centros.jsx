import React from "react";
import "../styles/Centros.css"; // Asegúrate de personalizar este archivo CSS

const Centro = () => {
  const centers = [
    {
      nombre: "COPRIN",
      direccion: "Av. Duarte Quiros 5307, B° Lomas del Suquía",
      telefono: "4647828",
      categoria: "REHAB-INTEG",
    },
    {
      nombre: "CEIN",
      direccion: "Sarmiento 1283, B° Gral Paz",
      telefono: "4524350",
      categoria: "REHAB-INTEG",
    },
    {
      nombre: "FARFALINA",
      direccion: "Tucumán 1195, B° Cofico",
      telefono: "3514718065 / 3512026473",
      categoria: "REHAB-INTEG",
    },
    {
      nombre: "CENEIN",
      direccion: "Cleveland 5372, B° Sta Isabel, Zona Sur",
      telefono: "4940347 / 153056237",
      categoria: "REHAB-INTEG",
    },
    {
      nombre: "DESCUBRIR",
      direccion: "Rotary Internacional 2865, B° Villa Eucarística, Zona Sur",
      telefono: "4834401",
      categoria: "REHAB-INTEG",
    },
    {
      nombre: "CIEP",
      direccion: "25 de Mayo 376, B° Centro",
      telefono: "4215313 / 3513560883",
      categoria: "REHAB (CATEG-HASTA LOS 12 AÑOS)",
    },
    {
      nombre: "GOSPA",
      direccion: "Felix Olmedo 2158, B° Rogelio Martínez, Zona Sur",
      telefono: "4822150",
      categoria: "NO INTEGRACION",
    },
    {
      nombre: "KIRON",
      direccion: "Bv. Guzmán 625, B° Centro",
      telefono: "153181923",
      categoria: "CAT INT ESC - REHA INDEP",
    },
    {
      nombre: "INENI",
      direccion: "Av. Richieri 2378, B° Jardín",
      telefono: "4825826",
      categoria: "REHAB-INTEG (NIÑOS)",
    },
    {
      nombre: "*****",
      direccion: "Av. Gral Paz 1450, B° Alta Córdoba",
      telefono: "4715701",
      categoria: "REHAB ADULTOS",
    },
    {
      nombre: "INSERIR",
      direccion: "Carnerillo 2173, B° Empalme, Zona Sur",
      telefono: "4569032 / 3513571517",
      categoria: "REHAB-INTEG (NIÑOS)",
    },
    {
      nombre: "INSERIR",
      direccion: "Jachal 4304, B° Empalme, Zona Sur",
      telefono: "4574515 / 3517148493",
      categoria: "REHAB-INTEG ADULTO",
    },
    {
      nombre: "SAN CAMILO",
      direccion: "Av. Richieri 3182, B° Jardín, Zona Sur",
      telefono: "4647297",
      categoria: "REHAB-INTEG",
    },
    {
      nombre: "CTRO NEUROCIENCIA Y REHAB",
      direccion: "Zona Norte, Juan Bautista Daniel 1981, B° Cerro de las Rosas",
      telefono: "3516165836",
      categoria: "INTEG (CATEG)",
    },
    {
      nombre: "ROBERT Y ROSINE LEFORT",
      direccion: "Amelia Earhart 4547, X5009 Córdoba,Zona Norte frente al Chateau, B° Valle Cerro",
      telefono: "4817100 / 3514354583 / 351816262",
      categoria: "CENTRO CATEGORIZADO (REH)",
    },
    {
      nombre: "****",
      direccion: "Jose Artigas 318, B° Alberdi, Centro",
      telefono: "3518729605 / 156183280",
      categoria: "CENTRO CATEGORIZADO SOLO INTEG ESCOLAR",
    },
    {
      nombre: "FUNDACION ARKO",
      direccion: "Colon 1642, Centro",
      telefono: "3517019726",
      categoria: "CENTRO CATEGORIZADO (INTEG ESCOLAR)",
    },
    {
      nombre: "CENTRO VIDA PLENA",
      direccion: "Av. Raymundo Montenegro 7175, Argüello",
      telefono: "3516995825 / 3512238211",
      categoria: "CENTRO CATEGORIZADO (REHAB E INTEGRACION)",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className="display-4 text-center">Centros de Salud</h1>
          <p className="lead text-center">
            Encuentra los datos de contacto y más de nuestros centros de salud.
          </p>

          {/* Tarjetas para cada centro */}
          <div className="row">
            {centers.map((center, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{center.nombre}</h5>
                    <p className="card-text">
                      <strong>Dirección:</strong> {center.direccion}
                    </p>
                    <p className="card-text">
                      <strong>Teléfono:</strong> {center.telefono}
                    </p>
                    <p className="card-text">
                      <strong>Categoría:</strong> {center.categoria}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centro;
