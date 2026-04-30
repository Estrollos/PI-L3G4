using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using subsonicApi;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class ClientController : ControllerBase {
    private readonly ClientModel _model;
    private readonly PasswordHasher _passwordHasher;
    private readonly Jwt _jwt;

    public ClientController(IDAOFactory factory, PasswordHasher passwordHasher, Jwt jwt) {
        _model = new ClientModel(factory);
        _passwordHasher = passwordHasher;
        _jwt = jwt;
    }

    [HttpGet]
    public async Task<ActionResult<List<ClientDTO>>> GetAll() {
        var clientes = await _model.GetAll();
        return Ok(clientes);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ClientDTO>> GetById(int id) {
        var cliente = await _model.GetById(id);
        if (cliente == null) 
            return NotFound();
        return Ok(cliente);
    }

    [HttpGet("email/{email}")]
    [AllowAnonymous]
    public async Task<ActionResult<ClientDTO>> GetByEmail(string email) {
        var cliente = await _model.GetByEmail(email);
        if (cliente == null) 
            return NotFound();
        return Ok(cliente);
    }
    
    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register(ClientDTO client)
    {
        client.Contrasena = _passwordHasher.HashPassword(client, client.Contrasena);
        await _model.Create(client);
        return Ok(client.Id);
    }

    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login (LoginDTO request)
    {
        var client = await _model.GetByEmail(request.Email);
        if(client is null)
            return Unauthorized("invalid credentials");
        var isPasswordValid = _passwordHasher.VerifyPassword(client, request.Contrasena);
        if(!isPasswordValid)
            return Unauthorized("invalid credentials");
        var accessToken = _jwt.CreateAccessToken(client);
        return Ok(new { AccessToken = accessToken, Nombre = client.Nombre, Id = client.Id});
    }

    [HttpPut]
    [AllowAnonymous]
    public async Task<IActionResult> Update(ClientDTO dto) {
        if(dto == null)
            return BadRequest();
        if(!string.IsNullOrEmpty(dto.Contrasena))
            dto.Contrasena = _passwordHasher.HashPassword(dto, dto.Contrasena);
        await _model.Update(dto);
        return Ok(dto); 
    }
}