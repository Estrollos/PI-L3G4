using Microsoft.EntityFrameworkCore;
using subsonicApi.Models.DAO.Interfaces;

public class EventDAO : IEventDAO {
    private readonly AppDbContext _context;

    public EventDAO(AppDbContext context) {
        _context = context;
    }

    public async Task<List<EventDTO>> GetAll() {
        return await _context.Events.Include(x => x.Artistas).ToListAsync();
    }

    public async Task<EventDTO> GetById(int id) {
        return await _context.Events.Include(x => x.Artistas).AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task Update(EventDTO dto) {
        _context.Events.Update(dto);
        await _context.SaveChangesAsync();
    }
}