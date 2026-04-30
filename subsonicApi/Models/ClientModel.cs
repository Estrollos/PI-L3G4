using subsonicApi.Models.DAO.Interfaces;
public class ClientModel {
    private readonly IClientDAO _clientDAO;

    public ClientModel(IDAOFactory factory) {
        _clientDAO = factory.CreateClientDAO();
    }
    public async Task<List<ClientDTO>> GetAll(){
       return await _clientDAO.GetAll();
    } 
    public async Task<ClientDTO> GetById(int id){
         var cliente = await _clientDAO.GetById(id);
         if (cliente == null)
            throw new Exception("Cliente no encontrado");
        return cliente;
    }
    public async Task<ClientDTO> GetByEmail(string email){
         var cliente = await _clientDAO.GetByEmail(email);
         if (cliente == null)
            throw new Exception("Cliente no encontrado");
        return cliente;
    }
    public async Task Create(ClientDTO dto) => await _clientDAO.Create(dto);

    public async Task Update(ClientDTO dto) {
        var existe = await _clientDAO.GetById(dto.Id);
        if (existe == null)
            throw new Exception("Cliente no encontrado");
        await _clientDAO.Update(dto);
    }
}