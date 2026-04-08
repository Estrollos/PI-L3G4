using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class clientController : ControllerBase
{
    private readonly AppDbContext _context;

    public clientController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Client>>> GetAll()
    {
        var clients = await _context.Clients.ToListAsync();
        return Ok(clients);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Client>> GetById(int id)
    {
        var client = await _context.Clients.FindAsync(id);
        if (client == null)
            return NotFound();
        return Ok(client);
    }

    [HttpPost]
    public async Task<ActionResult<Client>> AddClient(Client newClient)
    {
        if (newClient == null)
            return BadRequest();
        _context.Clients.Add(newClient);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = newClient.id }, newClient);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateClient(int id, Client updatedClient)
    {
        var client = await _context.Clients.FindAsync(id);
        if (client == null)
            return NotFound();

        client.id = updatedClient.id;
        client.nombre = updatedClient.nombre;
        client.apellido = updatedClient.apellido;
        client.email = updatedClient.email;
        client.contrasena = updatedClient.contrasena;
        client.direccion = updatedClient.direccion;
        client.tlf = updatedClient.tlf;
        client.rol = updatedClient.rol;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteClient(int id)
    {
        var client = await _context.Clients.FindAsync(id);
        if (client == null)
            return NotFound();
        _context.Clients.Remove(client);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}