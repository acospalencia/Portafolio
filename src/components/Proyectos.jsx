export const Proyectos = () => {
  return (
    <section className="mt-6">
      {/* TÍTULO */}
      <h2 className="text-2xl font-semibold text-[#6EE7B7] mb-4 text-center md:text-left">
        Proyectos
      </h2>

      {/* GRID DE PROYECTOS */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

        {/* TARJETA 1 */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-[#6EE7B7] transition">
          <h3 className="text-lg font-semibold text-white">Sistema de Reservaciones</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Pagina web para reservar mesas en línea, con gestión de usuarios y croquis interactivo usando C# y MySQL.
          </p>

          <a
            href="https://github.com/acospalencia/DLauraReservations.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE7B7] text-sm mt-3 inline-block hover:underline"
          >
            Ver proyecto →
          </a>
        </div>

        {/* TARJETA 2 */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-[#6EE7B7] transition">
          <h3 className="text-lg font-semibold text-white">Catalgo Virtual de FabLab</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Proyecto WEB/ESCRITORIO realizado para la institución en la que estudio durante mi primer año de estudio.
          </p>

          <a
            href="https://github.com/acospalencia/FablabCatalagoVirtualCapas.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE7B7] text-sm mt-3 inline-block hover:underline"
          >
            Ver proyecto →
          </a>
        </div>

        {/* TARJETA 3 */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-[#6EE7B7] transition">
          <h3 className="text-lg font-semibold text-white">Api de reservaciones de vuelos</h3>
          <p className="text-gray-400 mt-2 text-sm">
            API Creada en Java basada en reservaciones de vuelos, realizada como proyecto académico.
          </p>

          <a
            href="https://github.com/acospalencia/FlyReservations.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE7B7] text-sm mt-3 inline-block hover:underline"
          >
            Ver proyecto →
          </a>
        </div>

        {/* TARJETA 4 */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-[#6EE7B7] transition">
          <h3 className="text-lg font-semibold text-white">Reservaciones de Hotel</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Proyecto web basado en realizar reservaciones para el hotel california, mediante la seleccion interactiva de habitaciones.
          </p>

          <a
            href="https://github.com/acospalencia/HotelCalifornia.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE7B7] text-sm mt-3 inline-block hover:underline"
          >
            Ver proyecto →
          </a>
        </div>

        {/* TARJETA 5 */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-[#6EE7B7] transition">
          <h3 className="text-lg font-semibold text-white">Lista de TO-DO</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Proyecto web en react junto a firebase con autenticacion y presistencia de datos para realizar listas de tareas.
          </p>

          <a
            href="https://github.com/acospalencia/ToDoListSPA.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE7B7] text-sm mt-3 inline-block hover:underline"
          >
            Ver proyecto →
          </a>
        </div>

        {/* TARJETA 6 */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-[#6EE7B7] transition">
          <h3 className="text-lg font-semibold text-white">Mas Proyectos</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Explora mas proyectos en mi repositorio de GitHub.
          </p>

          <a
            href="https://github.com/acospalencia?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6EE7B7] text-sm mt-3 inline-block hover:underline"
          >
            Ver proyecto →
          </a>
        </div>

      </div>
    </section>
  );
};
