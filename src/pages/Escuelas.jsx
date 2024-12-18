import React from "react";
import "../styles/Escuelas.css"; // Asegúrate de personalizar este archivo CSS

const Escuela = () => {
  const schools = [
    {
      nombre: "El Sol",
      direccion: "Colombres 938 Bº San Martin (fte a la plaza de Los Burros)",
      telefono: "0351-4715548 / 155949435",
      contacto: "Vanesa",
    },
    {
      nombre: "Divina Providencia",
      direccion: "Gob. José E Bustos 873",
      telefono: "4821017",
      contacto: "",
    },
    {
      nombre: "Centro Educativo Mater Privada",
      direccion: "Juan Argarañas 1756 Bº Villa Cabrera",
      telefono: "4809139",
      contacto: "",
    },
    {
      nombre: "Escuela N° 19. Beatriz Martínez Allio",
      direccion: "Maestro López S/N. Ciudad Universitaria",
      telefono: "4343536",
      contacto: "",
    },
    {
      nombre: "Escuela Especial Blanca Feit Pública",
      direccion: "Av. Don Bosco 3950 Bº Las Palmas",
      telefono: "4347857",
      contacto: "",
    },
    {
      nombre: "Escuela Especial Carolina Mosca Pública",
      direccion: "Brasil y Belgrano. Nueva Córdoba",
      telefono: "4333445",
      contacto: "",
    },
    {
      nombre: "Escuela Especial Ckary Cay",
      direccion: "Comechingones 1359, Bº Los Platanos",
      telefono: "4883462",
      contacto: "",
    },
    {
      nombre: "Escuela Especial Dr. Domingo Cabred (Taller de Computación)",
      direccion: "Av. Deodoro Roca S/N. Parque Sarmiento",
      telefono: "4585590 int. 17",
      contacto: "",
    },
    {
      nombre: "Escuela Especial Dr. Domingo de Moragas",
      direccion: "Pampayasta y Matanza, Bº Ampl. San Carlos",
      telefono: "4334220",
      contacto: "",
    },
    {
      nombre: "Escuela Especial El Puente (discapacitados más severos)",
      direccion: "General Guido 1027 Bº San Martin",
      telefono: "4722377",
      contacto: "",
    },
    {
      nombre: "Escuela Especial Julian Baquero",
      direccion: "Rafael Nuñez 5187, Argüello",
      telefono: "(03543) 449080",
      contacto: "",
    },
    {
      nombre: "Escuela Especial Lydia Coriat",
      direccion: "Jacinto Rios Esq. Libertad, Bº Gral Paz",
      telefono: "4339131 / 4520087",
      contacto: "",
    },
    {
      nombre: "Escuela Especial María Montessori Privada",
      direccion: "Perú 1751 Esq. Sol de mayo, Bº San Fco",
      telefono: "4347842",
      contacto: "",
    },
    {
      nombre: "IBIS. Instituto Bilingüe de Sordos",
      direccion: "Adrián Conejo 1817, Cerro de las Rosas",
      telefono: "4348388",
      contacto: "",
    },
    {
      nombre: "ILAC. Instituto del Lenguaje y la Audición",
      direccion: "Maestro López S/N. Ciudad Universitaria",
      telefono: "4334523",
      contacto: "",
    },
    {
      nombre: "Fundación Robert Rosine Lefort",
      direccion: "Amelia Echart 4547",
      telefono: "152208643 (Liliana) / 153816263 (Joaquín)",
      contacto: "",
    },
    {
      nombre: "Instituto Hellen Keller",
      direccion: "Maestro López S/N. Ciudad Universitaria",
      telefono: "4334547",
      contacto: "",
    },
    {
      nombre: "Escuela Enrique Moras",
      direccion: "Diez Gomez 2441 Bº Vivero Norte",
      telefono: "4349720",
      contacto: "",
    },
    {
      nombre: "Escuela Don Orione",
      direccion: "Cottolengo 1955 – Bº Santa Isabel",
      telefono: "3516838221",
      contacto: "",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className="display-4 text-center">Escuelas Especiales</h1>
          <p className="lead text-center">
            Aquí puedes ver algunos de nuestros datos de contacto y más.
          </p>

          {/* Tarjetas para cada escuela */}
          <div className="row">
            {schools.map((school, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{school.nombre}</h5>
                    <p className="card-text">
                      <strong>Dirección:</strong> {school.direccion}
                    </p>
                    <p className="card-text">
                      <strong>Teléfono:</strong> {school.telefono}
                    </p>
                    <p className="card-text">
                      <strong>Contacto:</strong> {school.contacto || "No disponible"}
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

export default Escuela;
