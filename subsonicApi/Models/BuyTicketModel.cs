using subsonicApi.Models.DAO.Interfaces;

public class BuyTicketModel {
    private readonly IBuyTicketDAO _buyTicketDAO;

    public BuyTicketModel(IDAOFactory factory) {
        _buyTicketDAO = factory.CreateBuyTicketDAO();
    }
    public async Task<List<BuyTicketDTO>> GetAll()
    {
       return await _buyTicketDAO.GetAll();
    } 
    public async Task<BuyTicketDTO> GetById(int id){
         var ticket = await _buyTicketDAO.GetById(id);
         if (ticket == null)
            throw new Exception("Entrada no encontrado");
        return ticket;
    }

    public async Task<List<BuyTicketDTO>> GetByClienteId(int clienteId) {
        var tickets = await _buyTicketDAO.GetByClienteId(clienteId);
        if (tickets == null)
            throw new Exception("Entradas no encontradas");
        return tickets;
    }
    public async Task Create(BuyTicketDTO dto) => await _buyTicketDAO.Create(dto);

    public async Task Update(BuyTicketDTO dto) {
        var existe = await _buyTicketDAO.GetById(dto.Id);
        if (existe == null)
            throw new Exception("Entrada no encontrado");
        await _buyTicketDAO.Update(dto);
    }
}