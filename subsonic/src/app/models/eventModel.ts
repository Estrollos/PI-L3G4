import { ArtistModel } from './artistModel';

export interface EventModel {
  id: number;
  escenario: number;
  fecha: Date;
  dia: number;
  hora: number;
  info: string;
  urlImg: string;
  nEntradas: number;
  precioEntradas: number;
  artistas: any;
}
