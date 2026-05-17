const projects = [
  { src: '/images/projects/thanks.png', alt: 'Thanks 0' },
  { src: '/images/projects/thanks1.png', alt: 'Thanks 1' },
  { src: '/images/projects/thanks2.png', alt: 'Thanks 2' },
  { src: '/images/projects/thanks3.png', alt: 'Thanks 3' },
  { src: '/images/projects/thanks4.png', alt: 'Thanks 4' },
  { src: '/images/projects/thanks5.png', alt: 'Thanks 5' },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
        Proyectos
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-64 object-cover"
            />
            <div className="bg-black/60 p-4">
              <h3 className="text-white font-bold">{project.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}