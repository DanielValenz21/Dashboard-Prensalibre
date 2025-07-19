interface Props { brand: string; onChange: (v: string) => void; }

export default function BrandFilter({ brand, onChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <span className="text-white font-semibold text-lg flex items-center">
        🏷️ Marca:
      </span>
      <select
        value={brand}
        onChange={(e) => onChange(e.target.value)}
        className="w-48 rounded-full px-6 py-3 bg-white/95 backdrop-blur-sm text-deep-night font-semibold outline-none ring-2 ring-ice-blue/50 focus:ring-4 focus:ring-ice-blue transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
      >
        <option value="todos">🌐 Todos</option>
        <option value="claro">🔵 Claro</option>
        <option value="tigo">🟢 Tigo</option>
      </select>
    </div>
  );
} 