interface Props { label: string; value: string; }

export default function KpiCard({ label, value }: Props) {
  return (
    <div className="p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-deep-night/90 to-navy-wave/90 backdrop-blur-sm border border-ice-blue/30 text-white hover:scale-105 transition-all duration-300 hover:shadow-3xl">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm text-ice-blue mb-3 font-medium tracking-wide uppercase">{label}</p>
        <p className="text-4xl font-bold bg-gradient-to-r from-ice-blue to-cloud-mist bg-clip-text text-transparent">
          {value}
        </p>
      </div>
    </div>
  );
} 