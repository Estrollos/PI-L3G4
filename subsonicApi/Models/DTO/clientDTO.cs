using subsonicApi.Enums;

public class ClientDTO{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Apellido { get; set; }
    public string Email { get; set; }
    public string Contrasena { get; set; }
    public string Direccion { get; set; }
    public string Tlf { get; set; }
    public RoleEnum Rol { get; set; }
    public virtual List<BuyProductDTO>? ComprasProductos { get; set; }
    public virtual List<BuyTicketDTO>? ComprasEventos { get; set; }
}