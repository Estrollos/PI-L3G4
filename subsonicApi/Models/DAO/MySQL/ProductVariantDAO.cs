using Microsoft.EntityFrameworkCore;
using subsonicApi.Models.DAO.Interfaces;

public class ProductVariantDAO : IProductVariantDAO
{
    private readonly AppDbContext _context;

    public ProductVariantDAO(AppDbContext context) {
        _context = context;
    }

    public async Task<ProductVariantDTO> GetById(int id) {
        return await _context.ProductVariants.FirstOrDefaultAsync(x => x.Id == id);
    }
}