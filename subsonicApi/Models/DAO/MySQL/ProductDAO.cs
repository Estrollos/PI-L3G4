using Microsoft.EntityFrameworkCore;
using subsonicApi.Models.DAO.Interfaces;

public class ProductDAO : IProductDAO
{
    private readonly AppDbContext _context;

    public ProductDAO(AppDbContext context) {
        _context = context;
    }

    public async Task<List<ProductDTO>> GetAll() {
        return await _context.Products.Include(x => x.Imagenes).Include(x => x.Variantes).ToListAsync();
    }

    public async Task<ProductDTO> GetById(int id) {
        return await _context.Products.Include(x => x.Imagenes).Include(x => x.Variantes).AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task Update(ProductDTO dto) {
        _context.Products.Update(dto);
        await _context.SaveChangesAsync();
    }
}