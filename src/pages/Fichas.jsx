import Contenedor from "../components/Contenedor";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import favorito from "../assets/favorito.svg";
import favoritoRed from "../assets/favorito-red.svg";

/**
 *Página de fichas individuales de animales.
 *muestra el detalle completo del animal seleccionado desde el catálogo.
 */
function Fichas() {
  const { state: animal } = useLocation();
  /**
   * Estado de favs
   */
  const [esFavorito, setEsFavorito] = useState(false);

  // Si alguien entra a /fichas sin datos
  if (!animal) {
    return (
      <Contenedor>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-red-600">
            No se encontró la ficha del animal
          </h1>
        </div>
      </Contenedor>
    );
  }
  return (
    <Contenedor>
      <main
        aria-label="Contenido principal"
        className="flex flex-col lg:flex-row gap-10"
      >
        {/**Columna izq --> imagen */}
        <section aria-label="ImagenFicha" className="w-full lg:max-w-[450px]">
          <figure>
            <img
              src={animal.imagen}
              className="w-full h-[350px] object-cover rounded-xl border-4 border-blue-400 shadow-lg"
            />
          </figure>
        </section>
        {/**Columna der --> datos */}
        <section aria-label="InformacionAnimal" className="flex-1">
          <header>
            <h1>Nombre: {animal.nombre}</h1>
            <h2 className="text-2xl font-semibold text-[#0C3C34]">
              Raza: {animal.raza}
            </h2>
          </header>
          {/**Lista de datos */}
          <ul className="text-xl text-[#333] space-y-1">
            <li>
              <b>Edad:</b> {animal.edad}
            </li>
            <li>
              <b>Sexo:</b> {animal.genero}
            </li>
            <li>
              <b>Ubicación:</b> {animal.ubicacion}
            </li>
            <li>
              <b>Tamaño:</b> {animal.tamano}
            </li>
            <li className="flex gap-6">
              <span>
                <b>Chip:</b> {animal.chip}
              </span>
              <span>
                <b>Num:</b> {animal.numChip}
              </span>
            </li>
          </ul>
          {/* Descripción */}
          <article className="border border-[#0C3C34] bg-[#E8F5E9] rounded-xl p-4 mt-6">
            <h3 className="font-poppins font-semibold text-2xl text-[#0C3C34] mb-2">
              Descripción:
            </h3>
            <p className="text-lg text-[#555] leading-relaxed">
              {animal.descripcion}
            </p>
          </article>
          {/** Sección botones */}
          <section
            aria-label="Acciones del animal"
            className="flex items-center gap-4 mt-6"
          >
            <button className="mt-2 inline-block bg-[#FF9800] border border-black rounded-lg px-2 py-[4px] text-black font-semibold hover:bg-[#F57C00]">
              Adoptar
            </button>

            <button
              type="button"
              onClick={() => setEsFavorito(!esFavorito)}
              className="ml-2 bg-transparent border-none p-0"
              aria-label={
                esFavorito ? "Quitar de favoritos" : "Marcar como favorito"
              }
            >
              <img
                src={esFavorito ? favoritoRed : favorito}
                alt=""
                className="w-6 h-6 cursor-pointer transition"
              />
            </button>
          </section>
        </section>
      </main>
    </Contenedor>
  );
}

export default Fichas;
