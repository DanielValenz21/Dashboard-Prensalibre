import { useState } from 'react';
import { pieData }     from './data/pieData';
import { stackedData } from './data/stackedData';
import { lineData }    from './data/lineData';
import { useFiltered } from './hooks/useFiltered';

import BrandFilter        from './components/BrandFilter';
import KpiCard            from './components/KpiCard';
import PieChart           from './components/charts/PieChart';
import StackedBarChart    from './components/charts/StackedBarChart';
import LineChart          from './components/charts/LineChart';

export default function Dashboard() {
  const [brand, setBrand] = useState('todos');

  // KPIs calculados del dataset filtrado
  const pie = useFiltered(pieData, brand);
  const totalImp = pie.reduce((s, d) => s + d.impresiones, 0);
  const totalInv = pie.reduce((s, d) => s + d.inversion,    0);
  const totalAlc = pie.reduce((s, d) => s + d.alcance,      0);

  const kpis = [
    { label: 'Total Impresiones', value: totalImp.toLocaleString('es-GT') },
    { label: 'Inversión (Q)',     value: `Q${totalInv.toLocaleString('es-GT')}` },
    { label: 'Alcance',           value: totalAlc.toLocaleString('es-GT') }
  ];

  const stacked = useFiltered(stackedData, brand);
  const line    = useFiltered(lineData,    brand);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cloud-mist via-ice-blue to-deep-night">
      {/* Header */}
      <header className="bg-gradient-to-r from-deep-night to-navy-wave p-8 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center lg:text-left">
            📊 Panel de Impresiones
          </h1>
          <p className="text-cloud-mist text-center lg:text-left mt-2">
            Análisis detallado de campañas publicitarias
          </p>
        </div>
      </header>

      {/* Filtro */}
      <section className="p-6 bg-white/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <BrandFilter brand={brand} onChange={setBrand} />
        </div>
      </section>

      {/* Contenido */}
      <main className="p-6 max-w-7xl mx-auto">
        {/* KPI cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {kpis.map(k => <KpiCard key={k.label} {...k} />)}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Pie Chart */}
          <div className="xl:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 hover:shadow-3xl transition-all duration-300">
              <h2 className="text-deep-night text-xl font-bold mb-6 flex items-center">
                🥧 Impresiones por Marca
              </h2>
              <div className="h-80">
                <PieChart data={pie} />
              </div>
            </div>
          </div>

          {/* Stacked Bar Chart */}
          <div className="xl:col-span-2">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 hover:shadow-3xl transition-all duration-300">
              <h2 className="text-deep-night text-xl font-bold mb-6 flex items-center">
                📊 Impresiones por Tipo y Marca
              </h2>
              <div className="h-80">
                <StackedBarChart data={stacked} />
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="xl:col-span-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 hover:shadow-3xl transition-all duration-300">
              <h2 className="text-deep-night text-xl font-bold mb-6 flex items-center">
                📈 Evolución Diaria de Impresiones
              </h2>
              <div className="h-80">
                <LineChart data={line} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 