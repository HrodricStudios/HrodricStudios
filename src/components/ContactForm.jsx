import { useState } from 'react';
import { useForm } from '@formspree/react';

export default function ContactForm() {
  const [mode, setMode] = useState('whatsapp');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });

  // Formspree
  const FORMSPREE_ID = 'xgoqwdjj';
  const [emailState, handleEmailSubmit] = useForm(FORMSPREE_ID);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp
  const whatsappMessage = `Hola, soy ${formData.name} de ${formData.company}, quiero hacer una consulta sobre el servicio.`;
  const whatsappLink = `https://wa.me/5493413615056?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold text-white">Contáctanos</h3>

        {/* Toggle plateado con círculo negro */}
        <button
          onClick={() => setMode(mode === 'whatsapp' ? 'email' : 'whatsapp')}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 flex items-center px-1 ${
            mode === 'whatsapp' ? 'bg-gray-400/60' : 'bg-gray-500/60'
          }`}
        >
          {/* Ícono Gmail (izquierda) */}
          <span
            className={`absolute left-2 transition-opacity duration-200 ${
              mode === 'email' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </span>

          {/* Círculo negro deslizante */}
          <span
            className={`absolute w-6 h-6 rounded-full bg-black shadow-md transition-transform duration-300 ${
              mode === 'whatsapp' ? 'translate-x-0' : 'translate-x-7'
            }`}
          />

          {/* Ícono WhatsApp (derecha) */}
          <span
            className={`absolute right-2 transition-opacity duration-200 ${
              mode === 'whatsapp' ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Formularios con altura fija */}
      <div className="relative min-h-[340px]">
        {mode === 'whatsapp' ? (
          <form
            key="whatsapp"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappLink, '_blank');
            }}
            className="space-y-5 fade-in-up"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                placeholder="Empresa"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white border border-white rounded-full py-3 font-semibold relative overflow-hidden group hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">Enviar mensaje</span>
            </button>
          </form>
        ) : (
          <form key="email" onSubmit={handleEmailSubmit} className="space-y-5 fade-in-up">
            <input type="hidden" name="formType" value="email" />
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={emailState.submitting}
              className="w-full bg-black text-white border border-white rounded-full py-3 font-semibold relative overflow-hidden group hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">
                {emailState.submitting ? 'Enviando...' : 'Enviar mensaje'}
              </span>
            </button>
            {emailState.succeeded && (
              <p className="text-green-400 text-sm mt-3">¡Mensaje enviado con éxito!</p>
            )}
            {emailState.errors.length > 0 && (
              <p className="text-red-400 text-sm mt-3">Error al enviar. Intenta de nuevo.</p>
            )}
          </form>
        )}
      </div>
    </>
  );
}