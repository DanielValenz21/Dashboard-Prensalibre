interface Props { label: string; value: string; }
export default function KpiCard({ label, value }: Props) {
  return (
    <div className="p-6 rounded-3xl shadow-2xl bg-deep-night/80 backdrop-blur border border-ice-blue/40 text-white">
      <p className="text-sm text-ice-blue mb-2">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
} 