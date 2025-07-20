import {
  LineChart as RLineChart,
  Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLOR = { claro: '#E63946', tigo: '#0A4174' };   // rojo / navy

type Row = {
  nombre: string;
  date: string;
  inversion: number;
};

export default function LineChart({ data }: { data: Row[] }) {
  if (!data.length) return <p className="text-center">Sin datos</p>;

  /** 1 · Filtrar desde el 20 de mayo (excluyendo el 19) */
  const filteredData = data.filter(d => {
    const day = new Date(d.date);
    const fromDate = new Date('2025-05-20');
    return day.getTime() >= fromDate.getTime();
  });

  /** 2 · Agrupar por fecha y marca */
  const grouped: Record<string, any> = {};
  
  filteredData.forEach(d => {
    const dateKey = d.date;
    if (!grouped[dateKey]) {
      grouped[dateKey] = { date: dateKey };
    }
    grouped[dateKey][d.nombre] = d.inversion;
  });

  /** 3 · Convertir a array y ordenar cronológicamente */
  const chart = Object.values(grouped)
    .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('es-GT', { day: '2-digit', month: 'short' });

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RLineChart data={chart}>
        <CartesianGrid strokeDasharray="3 3" stroke="#BDD8E9" opacity={0.25} />
        <XAxis dataKey="date" tick={{ fill: '#001D39' }} tickFormatter={fmt} />
        <YAxis
          tick={{ fill: '#001D39' }}
          tickFormatter={(v) => `Q${v.toLocaleString('es-GT')}`}
        />
        <Tooltip
          formatter={(v: number) => `Q ${v.toLocaleString('es-GT', { minimumFractionDigits: 2 })}`}
          labelFormatter={fmt}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="claro"
          stroke={COLOR.claro}
          strokeWidth={3}
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="tigo"
          stroke={COLOR.tigo}
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </RLineChart>
    </ResponsiveContainer>
  );
} 