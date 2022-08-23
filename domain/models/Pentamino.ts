export type PentaminoCell = {
  x: number;
  y: number;
};

export type Pentamino = {
  cells: PentaminoCell[];
  color: string;
};
