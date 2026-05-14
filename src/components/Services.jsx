import ScrollReveal from "./ScrollReveal";

const Services = () => {
  const serviceItems = [
    {
      name: 'Landing Pages',
      description: 'Sitios de una sola página, ultrarrápidos y optimizados para convertir visitas en clientes.',
      icon: 'L',
    },
    {
      name: 'Webs Institucionales',
      description: 'Sitios corporativos o portfolios profesionales con diseño personalizado y alto rendimiento.',
      icon: 'W',
    },
    {
      name: 'Optimización',
      description: 'Mejora de velocidad, Core Web Vitals y SEO técnico para que tu web actual vuele.',
      icon: 'O',
    },
  ];

  return (
    <section id="servicios" className="py-24 px-6 md:px-12">
      <ScrollReveal>
        {/* Título alineado a la izquierda */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-left">
          Servicios
        </h2>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {serviceItems.map((service, index) => (
          <ScrollReveal key={index}>
            <div className="group bg-black/40 border border-gray-800 rounded-2xl p-8 hover:border-gray-500 transition-all duration-300 h-full flex flex-col">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                <span className="text-xl font-bold text-gray-300">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
              <p className="text-gray-400 leading-relaxed flex-1">{service.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Services; 