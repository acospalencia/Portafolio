import { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { NavContext } from '../Context/NavContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { setSelected } = useContext(NavContext);

  const handleClick = (value) => {
    setSelected(value);
    setOpen(false); // cerrar menú en móvil
  };

  return (
    <nav className="w-full bg-[#0F0F0F] border-b border-gray-800 text-[#E5E5E5]">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#6EE7B7]">Portafolio</h1>

        {/* Links escritorio */}
        <div className="hidden md:flex space-x-6 text-[#B3B3B3]">
          <button onClick={() => handleClick("proyectos")} className="hover:text-[#6EE7B7] transition">Proyectos</button>
          <button onClick={() => handleClick("cv")} className="hover:text-[#6EE7B7] transition">Mi CV</button>
          <button onClick={() => handleClick("certificaciones")} className="hover:text-[#6EE7B7] transition">Certificaciones</button>
          <button onClick={() => handleClick("contacto")} className="hover:text-[#6EE7B7] transition">Contacto</button>
        </div>

        {/* Botón móvil */}
        <button
          className="md:hidden text-[#E5E5E5]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu móvil */}
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-gray-800">
          <div className="flex flex-col px-6 py-4 space-y-4 text-[#E5E5E5]">
            <button onClick={() => handleClick("proyectos")} className="hover:text-[#6EE7B7] transition">Proyectos</button>
            <button onClick={() => handleClick("cv")} className="hover:text-[#6EE7B7] transition">Mi CV</button>
            <button onClick={() => handleClick("certificaciones")} className="hover:text-[#6EE7B7] transition">Certificaciones</button>
            <button onClick={() => handleClick("contacto")} className="hover:text-[#6EE7B7] transition">Contacto</button>
          </div>
        </div>
      )}
    </nav>
  );
}
