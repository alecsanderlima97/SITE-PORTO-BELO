'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const gallery = [
  {
    src: '/frota-completa-porto-belo.png',
    alt: 'Frota completa da Porto Belo Transportes reunida em um pátio',
    headline: 'Uma frota pronta para carregar',
    description: 'Veículos preparados para coletas e entregas em diferentes rotas.',
  },
  {
    src: '/frota-vw-amanhecer-adesivada.png',
    alt: 'Caminhão baú da frota viajando ao amanhecer',
    headline: 'Rotas que conectam negócios',
    description: 'Atendimento local, regional e interestadual sob consulta.',
  },
  {
    src: '/frota-hr-urbana-adesivada.png',
    alt: 'Caminhão leve da frota preparado para uma coleta urbana',
    headline: 'Agilidade para cargas menores',
    description: 'Veículo leve para coletas e entregas do dia a dia.',
  },
  {
    src: '/frota-azul-adesivada.png',
    alt: 'Caminhão azul da Porto Belo Transportes em frente a um centro logístico',
    headline: 'Mais um veículo da frota',
    description: 'Pronto para apoiar coletas e entregas da sua operação.',
  },
  {
    src: '/fiorino-adesivada.png',
    alt: 'Imagem ilustrativa de uma Fiorino branca representando um veículo da frota',
    headline: 'Agilidade nas coletas',
    description: 'Fiorino para apoiar entregas leves e urbanas.',
    note: 'Imagem ilustrativa',
  },
  {
    src: '/slide-retirada-entrega.png',
    alt: 'Da retirada da carga até a entrega no destino',
    campaign: true,
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
                {!('campaign' in item) && (
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#07152d]/90 via-[#07152d]/45 to-transparent px-4 pb-12 pt-12 text-white sm:px-6 sm:pb-14">
                    <div>
                      <h3 className="text-base font-black sm:text-xl">{item.headline}</h3>
                      <p className="mt-1 hidden text-sm text-white/80 sm:block">{item.description}</p>
                    </div>
                    {'note' in item && (
                      <span className="shrink-0 rounded bg-black/45 px-2 py-1 text-[10px] font-bold text-white/90 sm:text-xs">
                        {item.note}
                      </span>
                    )}
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
