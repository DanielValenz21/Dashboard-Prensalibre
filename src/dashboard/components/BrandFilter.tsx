interface Props { brand: string; onChange: (v: string) => void; }

export default function BrandFilter({ brand, onChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <span className="text-white font-semibold">Marca:</span>
      <select
        value={brand}
        onChange={e => onChange(e.target.value)}
        className="w-48 rounded-full px-6 py-2 bg-white/90 text-deep-night font-semibold ring-2 ring-ice-blue/50 focus:ring-ice-blue transition"
      >
        <option value="todos">Todos</option>
        <option value="claro">Claro</option>
        <option value="tigo">Tigo</option>
      </select>
    </div>
  );
} 