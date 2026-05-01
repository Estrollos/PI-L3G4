using subsonicApi.Models.DAO.Interfaces;

public class ProductModel
{
    private readonly IProductDAO _productDAO;

    public ProductModel(IDAOFactory factory) {
        _productDAO = factory.CreateProductDAO();
    }
    public async Task<List<ProductDTO>> GetAll()
    {
       return await _productDAO.GetAll();
    } 
    public async Task<ProductDTO> GetById(int id){
         var product = await _productDAO.GetById(id);
         if (product == null)
            throw new Exception("Producto no encontrado");
        return product;
    }
    public async Task Update(ProductDTO dto) {
        var existe = await _productDAO.GetById(dto.Id);
        if (existe == null)
            throw new Exception("Producto no encontrado");
        await _productDAO.Update(dto);
    }
}
