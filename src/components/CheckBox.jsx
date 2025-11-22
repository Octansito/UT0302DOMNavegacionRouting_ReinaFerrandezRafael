/**
 * Checkbox reutilizable para filtros.
 * Propiedades:
 * - label: Texto visible del checkbox de interés
 * - checked: Estado del checkbox (true/false)
 * - onChange: Función que se llama al cambiar
 * - ...rest: Otros props
 */

function Checkbox({ label, checked, onChange, ...rest }) {
  const id = `checkbox-${label.replace(/\s+/g, "").toLowerCase()}`;

  return (
    <label
      htmlFor={id}
      className="flex items-center mb-2 font-poppins text-lg cursor-pointer "
    >
      <input
        id={id}
        type="checkbox"
        className="accent-[#0C3C34] w-5 h-5 rounded mr-2 border-2 border-[#0C3C34] bg-[#B1E9DE]"
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      {label}
    </label>
  );
}

export default Checkbox;
