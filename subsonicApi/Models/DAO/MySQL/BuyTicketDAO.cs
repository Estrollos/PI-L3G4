using Microsoft.EntityFrameworkCore;
using subsonicApi.Models.DAO.Interfaces;

public class BuyTicketDAO : IBuyTicketDAO
{
    private readonly AppDbContext _context;

    public BuyTicketDAO(AppDbContext context) {
        _context = context;
    }

    public async Task<List<BuyTicketDTO>> GetAll() {
        return await _context.BuyTickets.ToListAsync();
    }

    public async Task<BuyTicketDTO> GetById(int id) {
        return await _context.BuyTickets.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
    }
    
    public async Task Create(BuyTicketDTO dto) {
        _context.BuyTickets.Add(dto);
        await _context.SaveChangesAsync();
    }

    public async Task Update(BuyTicketDTO dto) {
        _context.BuyTickets.Update(dto);
        await _context.SaveChangesAsync();
    }
}