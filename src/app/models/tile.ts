export interface GridBoundary {
  row: string;
  column: string;
}

export interface PosInArray {
  prevIndex: number | null;
  currIndex: number;
}

export class Tile {
  id: string;
  arrayPosition: PosInArray;
  label: string;
  point: { row: number; col: number };
  boundary: GridBoundary;
  blank: boolean;
  lockAxis: string;
  disabled: boolean;

  constructor(data: Partial<Tile>) {
    if (data !== null) {
      Object.assign(this, data);
    }
  }
}
