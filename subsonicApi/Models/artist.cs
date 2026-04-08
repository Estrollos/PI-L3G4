public class Artist
{
    public int id { get; set; }
    public int evento_id { get; set; }
    public string nombre { get; set; }
    public Event evento { get; set; }
}