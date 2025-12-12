import React, { useContext } from "react";
import { NavContext } from "../Context/NavContext";

export function Footer() {

    const { setSelected } = useContext(NavContext);
    
      const handleClick = (value) => {
        setSelected(value);
      };

    return (
        <footer className="w-full  bg-[#0F0F0F] border-t border-gray-800 py-6 text-[#B3B3B3]">
            <div className="w-full px-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm">Portafolio</p>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <a href="https://github.com/acospalencia" target="_blank" rel="noopener noreferrer" className="hover:text-[#6EE7B7] transition text-sm">
                    GitHub</a>
                    <a href="https://www.linkedin.com/in/carlos-acos/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6EE7B7] transition text-sm">
                        LinkedIn</a>
                    <button  onClick={() => { handleClick("contacto"); window.scrollTo({ top: 0, behavior: "smooth" }); }} target="_blank" rel="noopener noreferrer" className="hover:text-[#6EE7B7] transition text-sm">
                        Contacto</button>
                </div>
            </div>
        </footer>
    );
}