export interface ArtistModel {
  id: number;
  eventoId: number;
  nombre: string;
}

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
  artistas: ArtistModel[];
}
