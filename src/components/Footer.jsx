import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
/**
 * Muestra la barra inferior de la aplicación con la información de contacto, enlaces relevantes y redes sociales
 *
 */
function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full bg-[#0C3C34] flex items-center justify-between px-8 py-8"
    >
      {/**Enlaces de Navegación */}
      {/* Enlaces de Navegación */}
      <nav aria-label="Enlaces de ayuda">
        <ul className="flex gap-10">
          <li>
            <a
              href="#"
              className="text-white font-poppins font-semibold text-lg transition hover:scale-105 hover:underline underline-offset-4 focus:scale-105 focus:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34] rounded-lg"
            >
              Contacto
            </a>
          </li>

          <li>
            <a
              href="#"
              className="text-white font-poppins font-semibold text-lg transition hover:scale-105 hover:underline underline-offset-4 focus:scale-105 focus:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34] rounded-lg"
            >
              Ayuda
            </a>
          </li>
        </ul>
      </nav>

      {/**Redes Sociales */}
      <nav aria-label="Redes sociales">
        <ul className="flex gap-3">
          <li>
            <button
              className="p-2 rounded-lg transition hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34]"
              aria-label="Twitter"
              onClick={() => window.open("https://x.com/")}
            >
              <FaTwitter size={36} className="text-white" aria-hidden="true" />
            </button>
          </li>

          <li>
            <button
              onClick={() => window.open("https://www.instagram.com/")}
              className="p-2 rounded-lg transition hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34]"
              aria-label="Instagram"
            >
              <FaInstagram
                size={36}
                className="text-white"
                aria-hidden="true"
              />
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                window.open("https://www.facebook.com/?locale=es_ES")
              }
              className="p-2 rounded-lg transition hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34]"
              aria-label="Facebook"
            >
              <FaFacebook size={36} className="text-white" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
