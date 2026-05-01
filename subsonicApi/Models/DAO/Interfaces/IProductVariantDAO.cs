namespace subsonicApi.Models.DAO.Interfaces
{
    public interface IProductVariantDAO
    {
        Task<ProductVariantDTO> GetById(int id);
    }
}