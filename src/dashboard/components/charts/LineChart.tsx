import {
  LineChart as RLineChart,
  Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLOR = { claro: '#E63946', tigo: '#0A4174' };

type Row = { nombre: string; date: string; inversion: number };

const formatLabel = (iso: string) => {
  // iso = '2025-05-22'
  const [y, m, d] = iso.split('-');
  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun',
                 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${d}-${meses[+m - 1]}`;
};

export default function LineChart({ data }: { data: Row[] }) {
  if (!data.length) return <p className="text-center">Sin datos</p>;

  /* 1 · Filtrar rango 2025-05-20 → 2025-05-30 */
  const from = '2025-05-20';
  const to = '2025-05-30';
  const inRange = data.filter(d => d.date >= from && d.date <= to);

  /* 2 · fusionar por fecha */
  const byDate: Record<string, any> = {};
  inRange.forEach(d => {
    byDate[d.date] ??= { date: d.date };
    byDate[d.date][d.nombre] = d.inversion;
  });

  /* 3 · ordenar y recortar a 8 fechas */
  const chart = Object.values(byDate)
    .sort((a: any, b: any) => a.date.localeCompare(b.date))
    .slice(0, 8);

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RLineChart data={chart}>
        <CartesianGrid strokeDasharray="3 3" stroke="#BDD8E9" opacity={0.25} />
        <XAxis
          dataKey="date"
          tick={{ fill: '#001D39' }}
          tickFormatter={formatLabel}
          axisLine={false}
        />
        <YAxis
          tick={{ fill: '#001D39' }}
          tickFormatter={v => `Q${(+v).toLocaleString('es-GT')}`}
          axisLine={false}
        />
        <Tooltip
          labelFormatter={formatLabel}
          formatter={(v: number) =>
            `Q ${v.toLocaleString('es-GT', { minimumFractionDigits: 2 })}`
          }
        />
        <Legend />
        <Line type="monotone" dataKey="claro" stroke={COLOR.claro} strokeWidth={3} dot={{ r: 4 }} />
        <Line type="monotone" dataKey="tigo"  stroke={COLOR.tigo}  strokeWidth={3} dot={{ r: 4 }} />
      </RLineChart>
    </ResponsiveContainer>
  );
} 