public class BuyTicketDTO
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public int EventoId { get; set; }
    public int Cantidad { get; set; }
    public DateTime FechaCompra { get; set; }
    public virtual ClientDTO? Cliente { get; set; }
    public virtual EventDTO? Evento { get; set; }
}
