import { PieChart as RPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COLOR = { claro: '#7BBDE8', tigo: '#4E8EA2' };

export default function PieChart({ data }: { data: { nombre: string; impresiones: number }[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-80 flex items-center justify-center">
        <p className="text-gray-500 text-lg">No hay datos disponibles</p>
      </div>
    );
  }

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RPieChart>
          <Pie
            data={data}
            dataKey="impresiones"
            nameKey="nombre"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={40}
            label={({ nombre, percent = 0 }) => `${nombre} ${(percent * 100).toFixed(1)}%`}
            labelLine={false}
          >
            {data.map((d, i) => (
              <Cell key={i} fill={COLOR[d.nombre as keyof typeof COLOR]} stroke="#fff" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(v: number) => v.toLocaleString('es-GT')}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            wrapperStyle={{
              paddingTop: '20px'
            }}
          />
        </RPieChart>
      </ResponsiveContainer>
    </div>
  );
} 