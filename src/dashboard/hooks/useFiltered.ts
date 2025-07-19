export function useFiltered<T extends { nombre: string }>(data: T[], brand: string) {
  return brand === 'todos' ? data : data.filter((d) => d.nombre === brand);
} 