'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const gallery = [
  {
    src: '/frota-industrial.webp',
    alt: 'Caminhão da frota realizando uma entrega industrial',
    headline: 'Carga industrial no destino',
    description: 'Coleta e entrega organizadas para sua operação.',
  },
  {
    src: '/frota-vw-noturna.webp',
    alt: 'Caminhão baú da frota em uma rodovia durante a noite',
    headline: 'Entrega também à noite',
    description: 'Compromisso com prazo e segurança em cada rota.',
  },
  {
    src: '/frota-vw-amanhecer.webp',
    alt: 'Caminhão baú da frota viajando ao amanhecer',
    headline: 'Rotas que conectam negócios',
    description: 'Atendimento local, regional e interestadual sob consulta.',
  },
  {
    src: '/frota-hr-urbana.webp',
    alt: 'Caminhão leve da frota preparado para uma coleta urbana',
    headline: 'Agilidade para cargas menores',
    description: 'Veículo leve para coletas e entregas do dia a dia.',
  },
  {
    src: '/slide-entrega-segura.png',
    alt: 'Entrega segura e rápida com carga protegida',
    label: 'Entrega segura',
  },
  {
    src: '/slide-frete-5t.png',
    alt: 'Caminhão leve entregando carga em uma indústria',
    label: 'Entrega industrial',
  },
  {
    src: '/slide-noite.png',
    alt: 'Carga amarrada com cuidado em rota noturna',
    label: 'Carga protegida',
  },
  {
    src: '/slide-retirada-entrega.png',
    alt: 'Da retirada no local até a entrega',
    label: 'Retirada e entrega',
  },
];

export function FleetCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % gallery.length);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [active]);

  const previous = () => {
    setActive((current) => (current - 1 + gallery.length) % gallery.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % gallery.length);
  };

  return (
    <div className="relative min-w-0 rounded-lg border border-white/20 bg-white/12 p-2 shadow-[0_24px_60px_rgba(0,0,0,.38)] backdrop-blur-md sm:p-3 sm:shadow-[0_34px_90px_rgba(0,0,0,.42)]">
      <div className="pointer-events-none absolute -inset-1 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,.34),rgba(10,84,173,.24),rgba(228,31,50,.26))] opacity-60 blur-xl" />
      <div className="relative overflow-hidden rounded-md border border-white/14 bg-[#061226]">
        <div className="absolute inset-x-0 top-0 z-10 h-px bg-white/50" />
        <div className="relative aspect-[16/10] min-h-0 lg:min-h-[390px]">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {gallery.map((item) => (
              <figure key={item.src} className="relative h-full min-w-full">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-contain"
                />
                {'headline' in item ? (
                  <div className="absolute inset-0 flex items-center bg-[linear-gradient(90deg,rgba(7,21,45,.92)_0%,rgba(7,21,45,.72)_35%,transparent_68%)] p-4 sm:p-8">
                    <div className="max-w-[58%] sm:max-w-[52%]">
                      <p className="text-[10px] font-black uppercase text-[#ff3845] sm:text-xs">
                        Porto Belo Transportes
                      </p>
                      <h3 className="mt-1 text-lg font-black leading-tight text-white sm:mt-2 sm:text-3xl lg:text-4xl">
                        {item.headline}
                      </h3>
                      <p className="mt-2 hidden text-sm font-semibold leading-6 text-white/78 sm:block">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <figcaption className="absolute bottom-3 left-3 rounded-lg border border-white/12 bg-[#07152d]/82 px-3 py-2 text-xs font-bold text-white shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:px-4 sm:text-sm">
                    {item.label}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>

          <button
            type="button"
            onClick={previous}
            aria-label="Foto anterior"
            title="Foto anterior"
            className="absolute left-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-[#07152d]/78 text-white shadow-lg backdrop-blur transition hover:bg-[#07152d] focus-visible:ring-4 focus-visible:ring-white/35 sm:left-3 sm:size-11"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima foto"
            title="Próxima foto"
            className="absolute right-2 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-[#07152d]/78 text-white shadow-lg backdrop-blur transition hover:bg-[#07152d] focus-visible:ring-4 focus-visible:ring-white/35 sm:right-3 sm:size-11"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full bg-[#07152d]/72 px-2.5 py-2 backdrop-blur sm:bottom-4">
            {gallery.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Mostrar foto ${index + 1}`}
                aria-current={index === active ? 'true' : undefined}
                className={`size-2 rounded-full transition ${
                  index === active ? 'bg-[#ff3845]' : 'bg-white/55 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
