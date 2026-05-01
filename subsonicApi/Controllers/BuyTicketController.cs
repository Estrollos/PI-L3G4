using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class BuyTicketController : ControllerBase {
    private readonly BuyTicketModel _model;

    public BuyTicketController(IDAOFactory factory) {
        _model = new BuyTicketModel(factory);
    }

    [HttpGet]
    public async Task<ActionResult<List<BuyTicketDTO>>> GetAll() {
        var tickets = await _model.GetAll();
        return Ok(tickets);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BuyTicketDTO>> GetById(int id) {
        var ticket = await _model.GetById(id);
        if (ticket == null) 
            return NotFound();
        return Ok(ticket);
    }

    [HttpGet("cliente/{clienteId}")]
    public async Task<IActionResult> GetByClienteId(int clienteId) {
        var tickets = await _model.GetByClienteId(clienteId);
        return Ok(tickets);
    }

    [HttpPost]
    public async Task<ActionResult<BuyTicketDTO>> Create(BuyTicketDTO dto) {
        if(dto == null)
            return BadRequest();
        await _model.Create(dto);
        return CreatedAtAction(nameof(GetById), new { id = dto.Id }, dto);
    }

    [HttpPut]
    public async Task<IActionResult> Update(BuyTicketDTO dto) {
        if(dto == null)
            return BadRequest();
        await _model.Update(dto);
        return Ok(dto); 
    }
}