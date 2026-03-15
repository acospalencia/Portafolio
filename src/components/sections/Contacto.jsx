import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Contacto = () => {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-lg shadow-black/40">
      
      <h2 className="text-2xl font-semibold text-[#6EE7B7] mb-4">
        Información de contacto
      </h2>

      <p className="text-gray-300 mb-6">
        Si deseas ponerte en contacto conmigo, puedes hacerlo a través de los siguientes medios:
      </p>

      <div className="space-y-4">

        {/* Correo */}
        <div className="flex items-center gap-3">
          <Mail className="text-[#6EE7B7]" />
          <a
            href="mailto:carlosacostacecsa@gmail.com"
            className="text-gray-300 hover:text-[#6EE7B7] transition"
          >
            carlosacostacecsa@gmail.com
          </a>
        </div>

        {/* Teléfono */}
        <div className="flex items-center gap-3">
          <Phone className="text-[#6EE7B7]" />
          <p className="text-gray-300">+503 7057-6618</p>
        </div>

        {/* Ubicación */}
        <div className="flex items-center gap-3">
          <MapPin className="text-[#6EE7B7]" />
          <p className="text-gray-300">Sonsonate centro, El Salvador</p>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3">
          <Github className="text-[#6EE7B7]" />
          <a
            href="https://github.com/acospalencia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#6EE7B7] transition"
          >
            github.com/acospalencia
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3">
          <Linkedin className="text-[#6EE7B7]" />
          <a
            href="https://www.linkedin.com/in/carlos-acos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#6EE7B7] transition"
          >
            linkedin.com/in/carlos-acos
          </a>
        </div>

      </div>
    </div>
  );
};
