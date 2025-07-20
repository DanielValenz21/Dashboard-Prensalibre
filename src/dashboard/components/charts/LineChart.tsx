import { LineChart as RLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const COLOR={claro:'#7BBDE8',tigo:'#4E8EA2'};
type Row={nombre:string;date:string;impresiones:number};

export default function LineChart({data}:{data:Row[]}) {
  if(!data.length) return <p className="text-center">Sin datos</p>;
  const merged:Record<string,any>={};
  data.forEach(d=>{
    merged[d.date]??={date:d.date};
    merged[d.date][d.nombre]=d.impresiones;
  });
  const chart=Object.values(merged).sort((a:any,b:any)=>new Date(a.date).getTime()-new Date(b.date).getTime());
  const fmt=(d:string)=>new Date(d).toLocaleDateString('es-GT',{day:'2-digit',month:'short'});
  return (
    <ResponsiveContainer width="100%" height={320}>
      <RLineChart data={chart}>
        <CartesianGrid strokeDasharray="3 3" stroke="#BDD8E9" opacity={0.3}/>
        <XAxis dataKey="date" tick={{fill:'#001D39'}} tickFormatter={fmt}/>
        <YAxis tick={{fill:'#001D39'}}/>
        <Tooltip formatter={(v:number)=>v.toLocaleString('es-GT')} labelFormatter={fmt}/>
        <Legend/>
        <Line type="monotone" dataKey="claro" stroke={COLOR.claro} strokeWidth={3} dot={{r:4}}/>
        <Line type="monotone" dataKey="tigo"  stroke={COLOR.tigo}  strokeWidth={3} dot={{r:4}}/>
      </RLineChart>
    </ResponsiveContainer>
  );
} 