import { User, Calendar, MapPin, Heart, Code, GraduationCap, CheckCircle, Database, Github, SquareCode } from "lucide-react";

export const Sidebar = () => {
    return (
        <aside>

            {/* FOTO */}
            <div className="flex justify-center w-full">
                <img className="w-50" src="/fotoformal.png" alt="Foto" />
            </div>

            {/* DATOS */}
            <div className="mt-6 space-y-4 text-center md:text-left 2xl:text-center">

                <div className="flex items-center gap-2 justify-center md:justify-start 2xl:justify-center">
                    <User size={18} className="text-[#6EE7B7]" />
                    <p className="text-base">
                        <strong>Nombre:</strong> Carlos Alexander Acosta Palencia
                    </p>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start 2xl:justify-center">
                    <Calendar size={18} className="text-[#6EE7B7]" />
                    <p className="text-base">
                        <strong>Edad:</strong> 20 años
                    </p>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start 2xl:justify-center">
                    <MapPin size={18} className="text-[#6EE7B7]" />
                    <p className="text-base">
                        <strong>Ubicación:</strong> Sonsonate centro, El Salvador
                    </p>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start 2xl:justify-center">
                    <Heart size={18} className="text-[#6EE7B7]" />
                    <p className="text-base">
                        <strong>Intereses:</strong> Desarrollo web, IA, Videojuegos
                    </p>
                </div>

            </div>

            {/* SECCIÓN DE ESTADÍSTICAS */}
            <div className="mt-10 p-4 rounded-xl bg-[#1e1e1e] text-white space-y-4 shadow-md">

                <h2 className="text-lg font-semibold flex items-center gap-2 justify-center md:justify-start 2xl:justify-center">
                    <CheckCircle className="w-5 h-5 text-[#6EE7B7]" />
                    Estadísticas
                </h2>

                {/* STATS */}
                <div className="space-y-2 text-sm">
                    <p className="flex justify-between md:justify-start md:gap-4 2xl:justify-between">
                        <span>Proyectos terminados:</span>
                        <span className="font-semibold">3</span>
                    </p>

                    <p className="flex justify-between md:justify-start md:gap-4 2xl:justify-between">
                        <span>Experiencia:</span>
                        <span className="font-semibold">Recién egresado</span>
                    </p>
                </div>

                {/* TECNOLOGÍAS */}
                <div>
                    <h3 className="text-sm font-semibold mb-2 text-center md:text-left 2xl:text-center">Tecnologías</h3>

                    <div className="grid grid-cols-2 gap-3 text-sm">

                        <div className="flex items-center gap-2">
                            <SquareCode className="w-4 h-4 text-[#6EE7B7]" />
                            C#
                        </div>

                        <div className="flex items-center gap-2">
                            <SquareCode className="w-4 h-4 text-[#6EE7B7]" />
                            .NET
                        </div>

                        <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-[#6EE7B7]" />
                            React 
                        </div>

                        <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-[#6EE7B7]" />
                            Javascript
                        </div>

                        <div className="flex items-center gap-2">
                            <Database className="w-4 h-4 text-[#6EE7B7]" />
                            Base de datos
                        </div>

                        <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-[#6EE7B7]" />
                            Laravel
                        </div>

                        <div className="flex items-center gap-2">
                            <Github className="w-4 h-4 text-[#6EE7B7]" />
                            GitHub
                        </div>

                        <div className="flex items-center gap-2">
                            <Code className="w-4 h-4 text-[#6EE7B7]" />
                            PHP
                        </div>

                    </div>
                </div>
            </div>

        </aside>
    );
};
