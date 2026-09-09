import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Package,
  PackageCheck,
  Phone,
  ShoppingCart,
  Truck,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { QuoteForm } from './QuoteForm';
import { ServiceMap } from './ServiceMap';

const whatsappUrl =
  'https://wa.me/5515996098202?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Porto%20Belo%20Transportes%20e%20quero%20solicitar%20um%20or%C3%A7amento.';

const gallery = [
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

const services = [
  'Fretes comerciais e residenciais',
  'Transporte de cargas até 5 toneladas',
  'Rotas locais, regionais e interestaduais',
  'Apoio para mudanças pequenas e médias',
];

export default function Home() {
  return (
    <main className="freight-page min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92vh] bg-[#07152d] text-white">
        <img
          src="/slide-entrega-segura.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,45,.96)_0%,rgba(7,21,45,.78)_46%,rgba(7,21,45,.42)_78%,rgba(7,21,45,.62)_100%)]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <span className="cart-float left-[7%] top-[34%]">
            <ShoppingCart className="size-6" />
          </span>
          <span className="cart-float cart-float-delay right-[8%] top-[28%]">
            <ShoppingCart className="size-5" />
          </span>
          <span className="cart-float cart-float-slow right-[28%] bottom-[16%]">
            <Package className="size-5" />
          </span>
        </div>

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg bg-white text-[#0a54ad] shadow-lg">
              <Truck className="size-6" />
            </span>
            <span className="leading-tight">
              <strong className="block text-lg font-black uppercase">
                Porto Belo
              </strong>
              <span className="block text-sm font-semibold text-[#ff3845]">
                Transportes
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-white/82 md:flex">
            <a href="#servicos" className="hover:text-white">
              Serviços
            </a>
            <a href="#frota" className="hover:text-white">
              Frota
            </a>
            <a href="#mapa" className="hover:text-white">
              Mapa
            </a>
            <a href="#pre-cadastro" className="hover:text-white">
              Orçamento
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>

          <a
            href={whatsappUrl}
            className={cn(
              buttonVariants(),
              'h-10 rounded-lg bg-[#19b55b] px-4 text-white hover:bg-[#15994d]',
            )}
          >
            <Phone className="size-4" />
            WhatsApp
          </a>
        </header>

        <div
          id="inicio"
          className="relative z-10 mx-auto grid min-h-[calc(92vh-84px)] w-full max-w-7xl items-center gap-10 px-5 pb-10 pt-8 sm:px-8 lg:grid-cols-[minmax(0,.85fr)_minmax(540px,660px)] xl:gap-14"
        >
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/18 bg-white/10 px-3 py-2 text-sm font-bold text-white/88 backdrop-blur">
              <MapPin className="size-4 text-[#ff3845]" />
              Base em Sorocaba/SP
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl">
              Frete rápido, direto e com frota pronta para carregar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Porto Belo Transportes atende empresas, obras, lojas e clientes
              particulares com transporte de cargas de até 5 toneladas. A rota
              é avaliada conforme local de coleta, destino e disponibilidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pre-cadastro"
                className={cn(
                  buttonVariants(),
                  'h-12 rounded-lg bg-[#e41f32] px-5 text-base font-extrabold text-white hover:bg-[#c9182a]',
                )}
              >
                Fazer orçamento rápido
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#frota"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-12 rounded-lg border-white/22 bg-white/8 px-5 text-base text-white hover:bg-white/14 hover:text-white',
                )}
              >
                Ver estrutura
              </a>
            </div>
          </div>

          <div className="relative rounded-lg border border-white/20 bg-white/12 p-3 shadow-[0_34px_90px_rgba(0,0,0,.42)] backdrop-blur-md">
            <div className="pointer-events-none absolute -inset-1 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,.34),rgba(10,84,173,.24),rgba(228,31,50,.26))] opacity-60 blur-xl" />
            <div className="relative overflow-hidden rounded-md border border-white/14 bg-[#061226]">
              <div className="absolute inset-x-0 top-0 z-10 h-px bg-white/50" />
              <div className="relative aspect-[16/10] min-h-[390px]">
                <div className="carousel-track flex h-full w-[400%]">
                  {gallery.map((item) => (
                    <figure key={item.src} className="relative h-full w-1/4">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-contain"
                      />
                      <figcaption className="absolute bottom-5 left-5 rounded-lg border border-white/12 bg-[#07152d]/82 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur">
                        {item.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteForm />

      <ServiceMap />

      <section className="relative overflow-hidden bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            ['5t', 'capacidade de frete'],
            ['Rotas', 'locais e interestaduais'],
            ['Base', 'operacional em Sorocaba/SP'],
            ['100%', 'contato direto'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg border border-slate-200 p-5">
              <strong className="block text-3xl font-black text-[#0a54ad]">
                {value}
              </strong>
              <span className="mt-1 block text-sm font-semibold text-slate-600">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="servicos"
        className="relative overflow-hidden bg-[#f4f7fb] px-5 py-16 sm:px-8"
      >
        <Package
          className="pointer-events-none absolute left-[5%] bottom-10 size-20 rotate-[-12deg] text-[#e41f32]/10"
          aria-hidden="true"
        />
        <Package
          className="pointer-events-none absolute right-[6%] top-12 size-16 rotate-12 text-[#0a54ad]/10"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#e41f32]">
              Serviços
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#07152d]">
              Frete sob medida para quem precisa resolver hoje.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Atendimento com o responsável, combinando horário, local de
              retirada, destino e necessidade da carga sem burocracia.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <PackageCheck className="mb-4 size-8 text-[#0a54ad]" />
                <h3 className="text-lg font-black text-[#07152d]">
                  {service}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="frota" className="bg-[#07152d] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div className="overflow-hidden rounded-lg border border-white/14">
            <img
              src="/frota-branca-arte-porto-belo.png"
              alt="Arte comercial da frota da Porto Belo Transportes em Sorocaba"
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-[#ff3845]">
              Estrutura
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal">
              Veículos certos para fretes locais, leves e médios.
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                ['Até 5 toneladas', 'Capacidade para cargas comerciais.'],
                ['Rotas sob consulta', 'Fretes locais, regionais e interestaduais.'],
                ['Base operacional', 'Atendimento definido conforme coleta e destino.'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="flex gap-3 rounded-lg border border-white/12 bg-white/8 p-4"
                >
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#19b55b]" />
                  <div>
                    <strong className="block text-lg">{title}</strong>
                    <span className="text-sm text-white/68">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#e41f32]">
              Orçamento
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#07152d]">
              Fale com o responsável e envie os detalhes da sua carga.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Informe origem, destino, tipo de carga e melhor horário. O contato
              vai direto para quem organiza o frete.
            </p>
            <a
              href={whatsappUrl}
              className={cn(
                buttonVariants(),
                'mt-7 h-12 rounded-lg bg-[#19b55b] px-5 text-base text-white hover:bg-[#15994d]',
              )}
            >
              Chamar no WhatsApp
              <ArrowRight className="size-5" />
            </a>
          </div>

          <div className="grid gap-4">
            {[
              [Phone, '(15) 99609-8202'],
              [Mail, 'nelsonvyeyra@gmail.com'],
              [MapPin, 'Alameda das Violetas, 308 - Jardim Simus, Sorocaba/SP'],
              [Clock3, 'Atendimento direto para combinar horário e rota'],
            ].map(([Icon, text]) => (
              <div
                key={String(text)}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-[#f8fafc] p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#0a54ad] text-white">
                  <Icon className="size-5" />
                </span>
                <span className="text-base font-bold text-[#07152d]">
                  {String(text)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#07152d] px-5 py-7 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/68 md:flex-row md:items-center md:justify-between">
          <span>Porto Belo Transportes - base em Sorocaba/SP</span>
          <span>Contato e suporte comercial: nelsonvyeyra@gmail.com</span>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-2 rounded-lg bg-[#19b55b] px-5 text-base font-black text-white shadow-2xl shadow-green-900/30 transition hover:bg-[#15994d]"
      >
        <Phone className="size-5" />
        Orçamento
      </a>
    </main>
  );
}
