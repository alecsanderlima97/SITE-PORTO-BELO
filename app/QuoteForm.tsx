'use client';

import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Loader2,
  LocateFixed,
  MapPinned,
  Package,
  Route,
  Scale,
  UserRound,
} from 'lucide-react';

type LocationState = {
  status: 'idle' | 'loading' | 'success' | 'error' | 'unsupported';
  link: string;
  message: string;
};

const whatsappNumber = '5515996098202';

export function QuoteForm() {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cargo, setCargo] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState<LocationState>({
    status: 'idle',
    link: '',
    message: '',
  });

  const message = useMemo(() => {
    const lines = [
      'Olá! Quero fazer um orçamento de frete pela Porto Belo Transportes.',
      '',
      `Nome: ${name || 'Não informado'}`,
      `Origem: ${origin || 'Não informada'}`,
      `Destino: ${destination || 'Não informado'}`,
      `Carga: ${cargo || 'Não informada'}`,
      `Peso estimado: ${weight || 'Não informado'}`,
      location.link ? `Minha localização atual: ${location.link}` : '',
    ].filter(Boolean);

    return lines.join('\n');
  }, [cargo, destination, location.link, name, origin, weight]);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  function useCurrentLocation() {
    if (!('geolocation' in navigator)) {
      setLocation({
        status: 'unsupported',
        link: '',
        message: 'Seu navegador não permite enviar a localização automática.',
      });
      return;
    }

    setLocation({
      status: 'loading',
      link: '',
      message: 'Buscando sua localização...',
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const link = `https://www.google.com/maps?q=${latitude.toFixed(6)},${longitude.toFixed(6)}`;
        setLocation({
          status: 'success',
          link,
          message: 'Localização adicionada ao WhatsApp.',
        });
      },
      () => {
        setLocation({
          status: 'error',
          link: '',
          message:
            'Não foi possível pegar a localização. Você pode escrever o endereço de origem.',
        });
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }

  return (
    <section id="pre-cadastro" className="bg-white px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#e41f32]">
            Orçamento rápido
          </p>
          <h2 className="mt-3 text-[2rem] font-black leading-tight tracking-normal text-[#07152d] sm:text-4xl">
            Envie origem, destino e carga para receber uma orientação.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            O cliente pode preencher os dados principais e, se quiser, anexar a
            localização atual. Nada fica salvo no site; as informações seguem
            direto para o WhatsApp do responsável.
          </p>
          <div className="mt-6 grid gap-3 text-sm font-bold text-slate-700">
            {[
              [MapPinned, 'Localização opcional pelo celular'],
              [Route, 'Origem e destino no mesmo pedido'],
              [Package, 'Tipo de carga para orientar o atendimento'],
            ].map(([Icon, text]) => (
              <div key={String(text)} className="flex items-center gap-3">
                <Icon className="size-5 text-[#0a54ad]" />
                <span>{String(text)}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="grid min-w-0 gap-4 rounded-lg border border-slate-200 bg-[#f8fafc] p-4 shadow-sm sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[#07152d]">
              Seu nome
              <span className="relative">
                <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ex: Carlos"
                  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-base outline-none transition focus:border-[#0a54ad] focus:ring-4 focus:ring-blue-100"
                />
              </span>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#07152d]">
              Peso aproximado
              <span className="relative">
                <Scale className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  placeholder="Ex: 800 kg"
                  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-10 pr-3 text-base outline-none transition focus:border-[#0a54ad] focus:ring-4 focus:ring-blue-100"
                />
              </span>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-bold text-[#07152d]">
            Endereço de retirada
            <input
              value={origin}
              onChange={(event) => setOrigin(event.target.value)}
              placeholder="Rua, bairro, cidade"
              className="h-12 rounded-lg border border-slate-200 bg-white px-3 text-base outline-none transition focus:border-[#0a54ad] focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-[#07152d]">
            Endereço de entrega
            <input
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="Rua, bairro, cidade"
              className="h-12 rounded-lg border border-slate-200 bg-white px-3 text-base outline-none transition focus:border-[#0a54ad] focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="grid gap-2 text-sm font-bold text-[#07152d]">
            O que será transportado?
            <textarea
              value={cargo}
              onChange={(event) => setCargo(event.target.value)}
              placeholder="Ex: móveis, material de obra, máquinas pequenas, mercadorias"
              className="min-h-24 rounded-lg border border-slate-200 bg-white px-3 py-3 text-base outline-none transition focus:border-[#0a54ad] focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <div className="grid min-w-0 gap-3 sm:grid-cols-[auto_1fr] sm:items-center">
            <button
              type="button"
              onClick={useCurrentLocation}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#0a54ad]/20 bg-white px-3 text-sm font-black text-[#0a54ad] transition hover:bg-blue-50 sm:w-auto sm:px-4"
            >
              {location.status === 'loading' ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <LocateFixed className="size-4" />
              )}
              Usar minha localização
            </button>
            <span className="text-sm font-semibold text-slate-500">
              {location.message ||
                'A localização só será enviada se a pessoa permitir.'}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-[#19b55b] px-4 py-3 text-center text-base font-black leading-5 text-white shadow-lg shadow-green-900/15 transition hover:bg-[#15994d] sm:px-5"
          >
            Enviar orçamento no WhatsApp
            <ArrowRight className="size-5" />
          </a>
        </form>
      </div>
    </section>
  );
}
