using subsonicApi.Enums;

public class EventDTO{
    public int Id { get; set; }
	public StageEnum Escenario { get; set; }
	public DateTime Fecha { get; set; }
	public DayEnum Dia { get; set; }
	public HourEnum Hora { get; set; }
	public string Info { get; set; }
	public string UrlImg { get; set; }
	public int NEntradas { get; set; }
	public int PrecioEntradas { get; set; }
	public virtual List<ArtistDTO>? Artistas { get; set; }
}