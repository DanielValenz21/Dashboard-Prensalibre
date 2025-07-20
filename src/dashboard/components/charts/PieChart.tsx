import {
  PieChart as RPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

// ❶ Paleta nueva
const COLOR = { claro: '#E63946', tigo: '#0A4174' };

export default function PieChart({
  data,
}: {
  data: { nombre: string; inversion: number }[];
}) {
  if (!data.length) return <p className="text-center">Sin datos</p>;

  // ❷ Total para mostrar porcentaje sobre "inversión"
  const total = data.reduce((sum, d) => sum + d.inversion, 0);

  return (
    <ResponsiveContainer width="100%" height={320}>
      <RPieChart>
        {/* ❸ Usamos dataKey="inversion"  */}
        <Pie
          data={data}
          dataKey="inversion"
          nameKey="nombre"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={45}
          stroke="#fff"
          strokeWidth={2}
          label={({ nombre, inversion = 0 }) =>
            `${nombre} ${((inversion / total) * 100).toFixed(1)}%`
          }
          labelLine={false}
        >
          {data.map((d, i) => (
            <Cell key={i} fill={COLOR[d.nombre as 'claro' | 'tigo']} />
          ))}
        </Pie>
        <Tooltip
          formatter={(v: number) =>
            `Q ${v.toLocaleString('es-GT', { minimumFractionDigits: 2 })}`
          }
        />
        <Legend />
      </RPieChart>
    </ResponsiveContainer>
  );
} 