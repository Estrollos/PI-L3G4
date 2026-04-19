using subsonicApi.Enums;

public class SpaceDTO{
    public int Id { get; set; }
    public int? ClienteId { get; set; }
    public DayEnum Dia { get; set; }
    public StageEnum Escenario { get; set; }
    public int Precio { get; set; }
    public bool Libre { get; set; }
    public string?  NombrePuesto { get; set; }
    public string? InfoPuesto { get; set; }
    public virtual ClientDTO? Cliente { get; set; }
    public virtual List<StallTypeDTO>? Tipos { get; set; }
}