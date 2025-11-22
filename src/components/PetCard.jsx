import { Link } from "react-router-dom";
import { useState } from "react";
import favorito from "../assets/favorito.svg";
import favoritoRed from "../assets/favorito-red.svg";

/**
 * Componente que conforma la tarjeta individual del catálogo
 */
function PetCard({
  id,
  nombre,
  genero,
  edad,
  imagen,
  ubicacion,
  tamaño,
  chip,
  numChip,
  descripcion,
  raza,
}) {
  /**
   * Estado de favs
   */
  const [esFavorito, setEsFavorito] = useState(false);
  /**
   * Datos que se envían a la ficha
   */
  const animalData = {
    id,
    nombre,
    genero,
    edad,
    imagen,
    raza,
    tamaño,
    chip,
    numChip,
    ubicacion,
    descripcion,
  };
  return (
    <article
      aria-labelledby={`titulo-${id}`}
      className="bg-white rounded-xl shadow-md max-w-[240px] w-full p-2"
    >
      <Link to={`/fichas`} state={animalData}>
        <img
          src={imagen}
          alt={`Foto de ${nombre}`}
          className="w-full h-[140px] object-cover rounded-lg"
        />

        <h3
          id={`titulo-${id}`}
          className="font-poppins font-bold text-[18px] text-[#333] mt-2"
        >
          {nombre}
        </h3>

        <p className="font-nunito text-[16px] text-[#666]">
          {genero} — {edad}
        </p>
      </Link>

      <Link
        to={`/fichas`}
        state={animalData}
        aria-label={`Ver ficha completa de ${nombre}`}
        className="mt-2 inline-block bg-[#FF9800] border border-black rounded-lg px-2 py-[4px] text-black font-semibold hover:bg-[#F57C00]"
      >
        Ver ficha
      </Link>

      {/* Botón Favorito */}
      <button
        type="button"
        aria-pressed={esFavorito}
        onClick={() => setEsFavorito(!esFavorito)}
        className="ml-2 bg-transparent border-none p-0 focus:outline-none"
        aria-label={esFavorito ? "Quitar de favoritos" : "Marcar como favorito"}
      >
        <img
          src={esFavorito ? favoritoRed : favorito}
          alt=""
          aria-hidden="true"
          className="w-6 h-6 cursor-pointer transition"
        />
      </button>
    </article>
  );
}

export default PetCard;
