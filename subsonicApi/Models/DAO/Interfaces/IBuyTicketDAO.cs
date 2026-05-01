namespace subsonicApi.Models.DAO.Interfaces
{
    public interface IBuyTicketDAO
    {
        Task<List<BuyTicketDTO>> GetAll();
        Task<BuyTicketDTO> GetById(int id);
        Task<List<BuyTicketDTO>> GetByClienteId(int clienteId);
        Task Create(BuyTicketDTO dto);
        Task Update(BuyTicketDTO dto);
    }
}