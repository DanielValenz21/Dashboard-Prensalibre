import { LineChart as RLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLOR = { claro: '#7BBDE8', tigo: '#4E8EA2' };

type ChartData = { date: string; claro?: number; tigo?: number };

export default function LineChart(
  { data }: { data: { nombre: string; date: string; impresiones: number }[] },
) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full h-80 flex items-center justify-center">
        <p className="text-gray-500 text-lg">No hay datos disponibles</p>
      </div>
    );
  }

  const merged: Record<string, ChartData> = {};
  data.forEach((d) => {
    merged[d.date] ??= { date: d.date };
    merged[d.date][d.nombre as 'claro' | 'tigo'] = d.impresiones;
  });
  const chartData: ChartData[] = Object.values(merged).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('es-GT', { day: '2-digit', month: 'short' });

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RLineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#BDD8E9" opacity={0.3} />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#001D39', fontSize: 12 }}
            tickFormatter={formatDate}
            axisLine={{ stroke: '#001D39', strokeWidth: 2 }}
          />
          <YAxis 
            tick={{ fill: '#001D39', fontSize: 12 }}
            axisLine={{ stroke: '#001D39', strokeWidth: 2 }}
          />
          <Tooltip 
            formatter={(v: number) => v.toLocaleString('es-GT')} 
            labelFormatter={formatDate}
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
          <Line 
            type="monotone" 
            dataKey="claro" 
            stroke={COLOR.claro} 
            strokeWidth={4} 
            dot={{ r: 6, fill: COLOR.claro, stroke: '#fff', strokeWidth: 2 }}
            activeDot={{ r: 8, stroke: COLOR.claro, strokeWidth: 2, fill: '#fff' }}
          />
          <Line 
            type="monotone" 
            dataKey="tigo" 
            stroke={COLOR.tigo} 
            strokeWidth={4} 
            dot={{ r: 6, fill: COLOR.tigo, stroke: '#fff', strokeWidth: 2 }}
            activeDot={{ r: 8, stroke: COLOR.tigo, strokeWidth: 2, fill: '#fff' }}
          />
        </RLineChart>
      </ResponsiveContainer>
    </div>
  );
} 