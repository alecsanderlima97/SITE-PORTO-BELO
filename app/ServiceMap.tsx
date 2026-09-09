import { ArrowRight, Clock, MapPin, Navigation, Route } from 'lucide-react';

const mapUrl =
  'https://www.google.com/maps?q=Alameda%20das%20Violetas%20308%20Jardim%20Simus%20Sorocaba%20SP&output=embed';

const servicePoints = [
  {
    icon: MapPin,
    title: 'Base operacional em Sorocaba/SP',
    text: 'A base fica no Jardim Simus, mas a coleta e a entrega são combinadas conforme a rota.',
  },
  {
    icon: Route,
    title: 'Rotas sob consulta',
    text: 'Atendimento local, regional e interestadual conforme carga, distância e disponibilidade.',
  },
  {
    icon: Clock,
    title: 'Atendimento direto',
    text: 'O cliente envia a localização e recebe uma orientação objetiva pelo WhatsApp.',
  },
];

export function ServiceMap() {
  return (
    <section id="mapa" className="bg-[#f4f7fb] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-[#e41f32]">
            Área de atendimento
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#07152d]">
            Rotas locais, regionais e interestaduais avaliadas caso a caso.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A Porto Belo Transportes tem base no Jardim Simus, em Sorocaba/SP,
            e organiza fretes de até 5 toneladas conforme ponto de coleta,
            destino, tipo de carga, prazo e disponibilidade da rota.
          </p>

          <div className="mt-6 grid gap-3">
            {servicePoints.map((point) => {
              const Icon = point.icon;

              return (
                <div
                  key={point.title}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#0a54ad] text-white">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <strong className="block text-base text-[#07152d]">
                      {point.title}
                    </strong>
                    <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="#pre-cadastro"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#e41f32] px-5 text-base font-black text-white shadow-lg shadow-red-950/15 transition hover:bg-[#c9182a]"
          >
            Informar rota para orçamento
            <ArrowRight className="size-5" />
          </a>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-blue-950/8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-[#e41f32] text-white">
                <Navigation className="size-5" />
              </span>
              <div>
                <strong className="block text-lg text-[#07152d]">
                  Porto Belo Transportes
                </strong>
                <span className="text-sm font-semibold text-slate-500">
                  Alameda das Violetas, 308 - Jardim Simus
                </span>
              </div>
            </div>
            <span className="rounded-full border border-[#0a54ad]/20 bg-[#0a54ad]/8 px-3 py-2 text-sm font-black text-[#0a54ad]">
              Rotas sob consulta
            </span>
          </div>

          <div className="relative aspect-[16/10] min-h-[320px] bg-slate-200">
            <iframe
              title="Mapa da base da Porto Belo Transportes em Sorocaba"
              src={mapUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
