using Microsoft.EntityFrameworkCore;
using subsonicApi.Models.DAO.Interfaces;

public class BuyProductDAO : IBuyProductDAO {
    private readonly AppDbContext _context;

    public BuyProductDAO(AppDbContext context) {
        _context = context;
    }

    public async Task<List<BuyProductDTO>> GetAll() {
        return await _context.BuyProducts.ToListAsync();
    }

    public async Task<BuyProductDTO> GetById(int id) {
        return await _context.BuyProducts.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<List<BuyProductDTO>> GetByClienteId(int clienteId) {
        return await _context.BuyProducts.AsNoTracking()
            .Where(c => c.ClienteId == clienteId)
            .ToListAsync();
    }
    
    public async Task Create(BuyProductDTO dto) {
        _context.BuyProducts.Add(dto);
        await _context.SaveChangesAsync();
    }

    public async Task Update(BuyProductDTO dto) {
        _context.BuyProducts.Update(dto);
        await _context.SaveChangesAsync();
    }

    public async Task Delete(int id) {
        var producto = await _context.BuyProducts.FindAsync(id);
        if (producto != null) {
            _context.BuyProducts.Remove(producto);
            await _context.SaveChangesAsync();
        }
    }
}