import { useState } from 'react';
import { pieData } from './data/pieData';
import { stackedData } from './data/stackedData';
import { lineData } from './data/lineData';
import { useFiltered } from './hooks/useFiltered';

import BrandFilter from './components/BrandFilter';
import KpiCard from './components/KpiCard';
import PieChart from './components/charts/PieChart';
import StackedBarChart from './components/charts/StackedBarChart';
import LineChart from './components/charts/LineChart';

export default function Dashboard() {
  const [brand, setBrand] = useState('todos');
  const pie = useFiltered(pieData, brand);
  const totalImp = pie.reduce((s, d) => s + d.impresiones, 0);
  const totalInv = pie.reduce((s, d) => s + d.inversion, 0);
  const totalAlc = pie.reduce((s, d) => s + d.alcance, 0);

  const KPIS = [
    { label: 'Total Impresiones', value: totalImp.toLocaleString('es-GT') },
    { label: 'Inversión (Q)', value: `Q${totalInv.toLocaleString('es-GT')}` },
    { label: 'Alcance', value: totalAlc.toLocaleString('es-GT') },
  ];

  const stacked = useFiltered(stackedData, brand);
  const line = useFiltered(lineData, brand);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud-mist via-ice-blue to-deep-night">
      <header className="bg-gradient-to-b from-cloud-mist to-deep-night p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">Panel de Impresiones</h1>
      </header>

      <section className="p-6 bg-white/20 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <BrandFilter brand={brand} onChange={setBrand} />
        </div>
      </section>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {KPIS.map(k => <KpiCard key={k.label} {...k} />)}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1 bg-white/90 p-6 rounded-3xl shadow-2xl">
            <h2 className="text-deep-night text-xl font-bold mb-4">Impresiones por Marca</h2>
            <PieChart data={pie} />
          </div>

          <div className="xl:col-span-2 bg-white/90 p-6 rounded-3xl shadow-2xl">
            <h2 className="text-deep-night text-xl font-bold mb-4">Impresiones por Tipo y Marca</h2>
            <StackedBarChart data={stacked} />
          </div>

          <div className="xl:col-span-3 bg-white/90 p-6 rounded-3xl shadow-2xl">
            <h2 className="text-deep-night text-xl font-bold mb-4">Evolución Diaria de Impresiones</h2>
            <LineChart data={line} />
          </div>
        </div>
      </main>
    </div>
  );
} 