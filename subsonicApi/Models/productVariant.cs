public class productVariant{
    public int id { get; set; }
    public int producto_id { get; set; }
    public string color { get; set; }
    public string talla { get; set; }
    public int stock { get; set; }
    public Product producto { get; set; }
}