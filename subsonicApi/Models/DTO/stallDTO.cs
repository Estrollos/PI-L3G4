public class StallDTO{
    public int id { get; set; }
    public int espacio_id { get; set; }
    public int cliente_id { get; set; }
    public string nombre { get; set; }
    public string info { get; set; }
    public SpaceDTO espacio { get; set; }
    public ClientDTO cliente { get; set; }
    public List<stallTypeDTO> tipos { get; set; }
}