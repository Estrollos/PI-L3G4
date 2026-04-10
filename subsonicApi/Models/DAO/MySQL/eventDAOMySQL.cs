// Model/DAO/MySQL/EventoDAOMySQL.cs
using Microsoft.EntityFrameworkCore;

public class EventDAOMySQL : EventDAO {
    private readonly AppDbContext _context;

    public EventDAOMySQL(AppDbContext context) {
        _context = context;
    }

    public async Task<List<EventDTO>> GetAll() {
        return await _context.Events.ToListAsync();
    }

    public async Task<EventDTO> GetById(int id) {
        return await _context.Events.FindAsync(id);
    }

    public async Task Create(EventDTO dto) {
        _context.Events.Add(dto);
        await _context.SaveChangesAsync();
    }

     public async Task Update(EventDTO dto) {
        _context.Events.Update(dto);
        await _context.SaveChangesAsync();
    }

    public async Task Delete(int id) {
        var evento = await _context.Events.FindAsync(id);
        if (evento != null) {
            _context.Events.Remove(evento);
            await _context.SaveChangesAsync();
        }
    }
}