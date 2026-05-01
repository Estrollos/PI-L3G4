export interface StallTypeModel {
  espacioId: number;
  tipo: number;
}
export interface SpaceModel {
  id: number;
  clienteId: number;
  dia: number;
  escenario: number;
  precio: number;
  libre: boolean;
  nombrePuesto: string;
  infoPuesto: string;
  tipos: StallTypeModel[];
}
