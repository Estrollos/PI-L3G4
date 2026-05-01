public class BuyProductDTO
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public int ProductoVarianteId { get; set; }
    public DateTime FechaCompra { get; set; }
    public virtual ClientDTO Cliente { get; set; }
    public virtual ProductVariantDTO ProductoVariante { get; set; }
}
