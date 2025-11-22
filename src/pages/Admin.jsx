import Contenedor from "../components/Contenedor";

function Admin() {
  return (
    <Contenedor>
      <main aria-label="Panel de administración" className="py-10">
        <h1 className="text-3xl font-bold text-[#0C3C34] mb-6">
          Página de Administración
        </h1>

        <section className="text-lg text-[#333]">
          <p>Aquí podrás gestionar los datos de la aplicación.</p>
        </section>
      </main>
    </Contenedor>
  );
}

export default Admin;
