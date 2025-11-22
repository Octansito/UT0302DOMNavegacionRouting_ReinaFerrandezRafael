/**
 * Componente que muestra la lista de animales divididos en secciones:
 * "Perros, Gatos y Adoptados". Cada animal se representa con la tarjeta creada en PetCard
 */

import PetCard from "./PetCard";
import animales from "../data/animales";

function PetList() {
  return (
    <main aria-label="Listado de animales" role="main">
      {/* Sección Perros */}
      <section aria-labelledby="titulo-perros" className="mb-12">
        <h2
          id="titulo-perros"
          className="font-poppins font-semibold text-[18px] text-[#555555] underline underline-offset-4 ml-0 mb-4"
        >
          Sección Perros
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-4 w-full mt-8">
          {animales.perros.map((animal, i) => (
            <PetCard key={i} {...animal} />
          ))}
        </div>
      </section>

      {/* Sección Gatos */}
      <section aria-labelledby="titulo-gatos" className="mb-12">
        <h2 className="font-poppins font-semibold text-[18px] text-[#555555] underline underline-offset-4 ml-0 mb-4">
          Sección Gatos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-4 w-full mt-8">
          {animales.gatos.map((animal, i) => (
            <PetCard key={i} {...animal} />
          ))}
        </div>
      </section>

      {/* Sección Adoptados */}
      <section>
        <h2
          aria-labelledby="titulo-adoptados"
          className="font-poppins font-semibold text-[18px] text-[#555555] underline underline-offset-4 ml-0 mb-4"
        >
          Sección Adoptados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-4 w-full mt-8">
          {animales.adoptados.map((animal, i) => (
            <PetCard key={i} {...animal} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default PetList;
