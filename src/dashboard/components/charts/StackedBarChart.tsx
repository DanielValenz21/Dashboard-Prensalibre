import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = { text: '#001D39', display: '#7BBDE8', video: '#4E8EA2' };

type AggData = { nombre: string; text: number; display: number; video: number };

export default function StackedBarChart(
  { data }: { data: { nombre: string; tipo: string; impresiones: number }[] },
) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-80 flex items-center justify-center">
        <p className="text-gray-500 text-lg">No hay datos disponibles</p>
      </div>
    );
  }

  const aggregate = data.reduce<Record<string, AggData>>((acc, cur) => {
    acc[cur.nombre] ??= { nombre: cur.nombre, text: 0, display: 0, video: 0 };
    acc[cur.nombre][cur.tipo as 'text' | 'display' | 'video'] += cur.impresiones;
    return acc;
  }, {});
  const chartData: AggData[] = Object.values(aggregate);

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#BDD8E9" opacity={0.3} />
          <XAxis 
            dataKey="nombre" 
            tick={{ fill: '#001D39', fontSize: 12, fontWeight: 'bold' }}
            axisLine={{ stroke: '#001D39', strokeWidth: 2 }}
          />
          <YAxis 
            tick={{ fill: '#001D39', fontSize: 12 }}
            axisLine={{ stroke: '#001D39', strokeWidth: 2 }}
          />
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
            wrapperStyle={{
              paddingTop: '20px'
            }}
          />
          <Bar dataKey="text" stackId="a" fill={COLORS.text} radius={[4, 4, 0, 0]} />
          <Bar dataKey="display" stackId="a" fill={COLORS.display} radius={[4, 4, 0, 0]} />
          <Bar dataKey="video" stackId="a" fill={COLORS.video} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 