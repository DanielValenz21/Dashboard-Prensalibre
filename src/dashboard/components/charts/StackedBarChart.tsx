import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const C = { text:'#001D39', display:'#7BBDE8', video:'#4E8EA2' };

type Row = { nombre:string; tipo:string; impresiones:number };
export default function StackedBarChart({ data }:{data:Row[]}) {
  if(!data.length) return <p className="text-center">Sin datos</p>;
  const agg = data.reduce<Record<string, any>>((a,c)=>{
    a[c.nombre]??={nombre:c.nombre,text:0,display:0,video:0};
    a[c.nombre][c.tipo]+=c.impresiones;
    return a;
  },{});
  const chart = Object.values(agg);
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={chart}>
        <CartesianGrid strokeDasharray="3 3" stroke="#BDD8E9" opacity={0.3}/>
        <XAxis dataKey="nombre" tick={{fill:'#001D39'}}/>
        <YAxis tick={{fill:'#001D39'}}/>
        <Tooltip formatter={(v:number)=>v.toLocaleString('es-GT')}/>
        <Legend/>
        <Bar dataKey="text" stackId="a" fill={C.text}/>
        <Bar dataKey="display" stackId="a" fill={C.display}/>
        <Bar dataKey="video" stackId="a" fill={C.video}/>
      </BarChart>
    </ResponsiveContainer>
  );
} 