public class ProductDTO{
    public int id { get; set; }
    public int precio { get; set; }
    public string nombre { get; set; }
    public string info { get; set; }
    public List<productVariantDTO> variantes { get; set; }
    public List<productImageDTO> imagenes { get; set; }
}