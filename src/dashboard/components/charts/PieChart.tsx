import { PieChart as RPieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
const COLOR = { claro:'#7BBDE8', tigo:'#4E8EA2' };

export default function PieChart({ data }:{data:{nombre:string; impresiones:number}[]}) {
  if (!data.length) return <p className="text-center">Sin datos</p>;
  return (
    <ResponsiveContainer width="100%" height={320}>
      <RPieChart>
        <Pie data={data} dataKey="impresiones" nameKey="nombre" cx="50%" cy="50%"
             outerRadius={100} innerRadius={40}
             label={({nombre,percent=0})=>`${nombre} ${(percent*100).toFixed(1)}%`}>
          {data.map((d,i)=><Cell key={i} fill={COLOR[d.nombre as 'claro'|'tigo']} stroke="#fff" strokeWidth={2}/>)}
        </Pie>
        <Tooltip formatter={(v:number)=>v.toLocaleString('es-GT')} />
        <Legend />
      </RPieChart>
    </ResponsiveContainer>
  );
} 