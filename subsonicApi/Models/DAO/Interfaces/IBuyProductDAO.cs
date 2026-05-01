namespace subsonicApi.Models.DAO.Interfaces
{
    public interface IBuyProductDAO
    {
        Task<List<BuyProductDTO>> GetAll();
        Task<BuyProductDTO> GetById(int id);
        Task<List<BuyProductDTO>> GetByClienteId(int clienteId);
        Task Create(BuyProductDTO dto);
        Task Update(BuyProductDTO dto);
        Task Delete(int id);
    }
}