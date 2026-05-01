using subsonicApi.Models.DAO.Interfaces;

public class ProductVariantModel {
    private readonly IProductVariantDAO _productVariantDAO;

    public ProductVariantModel(IDAOFactory factory) {
        _productVariantDAO = factory.CreateProductVariantDAO();
    }
    public async Task<ProductVariantDTO> GetById(int id){
         var variante = await _productVariantDAO.GetById(id);
         if (variante == null)
            throw new Exception("Variante no encontrada");
        return variante;
    }
}