using subsonicApi.Models.DAO.Interfaces;

public class BuyProductModel {
    private readonly IBuyProductDAO _buyProductDAO;

    public BuyProductModel(IDAOFactory factory) {
        _buyProductDAO = factory.CreateBuyProductDAO();
    }
    public async Task<List<BuyProductDTO>> GetAll()
    {
       return await _buyProductDAO.GetAll();
    } 
    public async Task<BuyProductDTO> GetById(int id){
         var producto = await _buyProductDAO.GetById(id);
         if (producto == null)
            throw new Exception("Producto no encontrado");
        return producto;
    }

    public async Task<List<BuyProductDTO>> GetByClienteId(int clienteId) {
        var compra = await _buyProductDAO.GetByClienteId(clienteId);
        if (compra == null)
            throw new Exception("Compra no encontradas");
        return compra;
    }

    public async Task Create(BuyProductDTO dto) => await _buyProductDAO.Create(dto);

    public async Task Update(BuyProductDTO dto) {
        var existe = await _buyProductDAO.GetById(dto.Id);
        if (existe == null)
            throw new Exception("Producto no encontrado");
        await _buyProductDAO.Update(dto);
    }

    public async Task Delete(int id) {
        var existe = await _buyProductDAO.GetById(id);
        if (existe == null)
            throw new Exception("Producto no encontrado");
        await _buyProductDAO.Delete(id);
    }
}