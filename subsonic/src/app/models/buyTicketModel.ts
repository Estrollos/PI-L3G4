export interface BuyTicketModel {
    id?: number;
    clienteId: number;
    eventoId: number;
    cantidad: number;
    fechaCompra: Date;
}
