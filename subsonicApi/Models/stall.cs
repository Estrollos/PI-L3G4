public class Stall{
    public int id { get; set; }
    public int espacio_id { get; set; }
    public int cliente_id { get; set; }
    public string nombre { get; set; }
    public string info { get; set; }
    public Space espacio { get; set; }
    public Client cliente { get; set; }
    public List<stallType> tipos { get; set; }
}