using Microsoft.EntityFrameworkCore;
using subsonicApi.Models.DAO.Interfaces;

public class ClientDAO : IClientDAO
{
    private readonly AppDbContext _context;

    public ClientDAO(AppDbContext context) {
        _context = context;
    }

    public async Task<List<ClientDTO>> GetAll() {
        return await _context.Clients.Include(x => x.ComprasProductos).Include(x => x.ComprasEventos).ToListAsync();
    }

    public async Task<ClientDTO> GetById(int id) {
        return await _context.Clients.Include(x => x.ComprasProductos).Include(x => x.ComprasEventos).FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task<ClientDTO> GetByEmail(string email) {
        return await _context.Clients.Include(x => x.ComprasProductos).Include(x => x.ComprasEventos).FirstOrDefaultAsync(x => x.Email == email);
    }
    public async Task Create(ClientDTO dto) {
        _context.Clients.Add(dto);
        await _context.SaveChangesAsync();
    }

    public async Task Update(ClientDTO dto) {
        _context.Clients.Update(dto);
        await _context.SaveChangesAsync();
    }
}