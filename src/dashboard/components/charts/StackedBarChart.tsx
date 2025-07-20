import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

/* Paleta original de azules */
const COLOR = {
  text:    '#001D39', // deep-night
  display: '#7BBDE8', // ice-blue
  video:   '#4E8EA2', // teal-sea
};

type Row = { nombre: string; tipo: string; impresiones: number };

export default function StackedBarChart({ data }: { data: Row[] }) {
  if (!data.length) return <p className="text-center">Sin datos</p>;

  /* 1- Agregamos impresiones por marca & tipo  */
  const agg: Record<string, { nombre: string; text: number; display: number; video: number }> = {};
  data.forEach(r => {
    agg[r.nombre] ??= { nombre: r.nombre, text: 0, display: 0, video: 0 };
    agg[r.nombre][r.tipo as 'text' | 'display' | 'video'] += r.impresiones;
  });

  /* 2- Convertimos a porcentaje */
  const chartData = Object.values(agg).map(b => {
    const total = b.text + b.display + b.video;
    return {
      nombre: b.nombre,
      text:    (b.text    / total) * 100,
      display: (b.display / total) * 100,
      video:   (b.video   / total) * 100,
    };
  });

  const pct = (v: number) => `${v.toFixed(0)} %`;

  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#BDD8E9" opacity={0.25} />
        <XAxis dataKey="nombre" tick={{ fill: '#001D39' }} axisLine={false} />
        <YAxis
          domain={[0, 120]}
          tickFormatter={pct}
          tick={{ fill: '#001D39' }}
          axisLine={false}
        />
        <Tooltip
          formatter={(v: number) => pct(v)}
          labelFormatter={(l) => l.charAt(0).toUpperCase() + l.slice(1)}
        />
        <Legend />
        <Bar dataKey="video"   stackId="a" fill={COLOR.video}   />
        <Bar dataKey="text"    stackId="a" fill={COLOR.text}    />
        <Bar dataKey="display" stackId="a" fill={COLOR.display} />
      </BarChart>
    </ResponsiveContainer>
  );
} 