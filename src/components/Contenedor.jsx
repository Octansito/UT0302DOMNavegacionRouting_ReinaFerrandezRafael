/**
 * **
 * Componente de layout principal.
 *
 * Envuelve todo el contenido central de la aplicación para:
 * - Limitar el ancho máximo de la página.
 * - Aplicar el fondo de pantalla y el padding global.
 * - Mantener el diseño centrado en todas las secciones
 *
 *
 */

export default function Contenedor({ children }) {
  return (
    <div
      className="min-h-screen bg-[#E8F5E9]"
      role="main"
      id="contenido"
      aria-label="Contenido principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
