public class Product{
    public int id { get; set; }
    public int precio { get; set; }
    public string nombre { get; set; }
    public string info { get; set; }
    public List<productVariant> variantes { get; set; }
    public List<productImage> imagenes { get; set; }
}