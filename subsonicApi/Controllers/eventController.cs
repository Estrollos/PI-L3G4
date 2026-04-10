using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class eventController : ControllerBase {
    private readonly EventModel _model;

    public eventController(DAOFactory factory) {
        _model = new EventModel(factory);
    }

    [HttpGet]
    public async Task<ActionResult<List<EventDTO>>> GetAll() {
        var eventos = await _model.GetAll();
        return Ok(eventos);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<EventDTO>> GetById(int id) {
        var evento = await _model.GetById(id);
        if (evento == null) 
            return NotFound();
        return Ok(evento);
    }
    
    [HttpPost]
    public async Task<ActionResult<EventDTO>> Create(EventDTO dto) {
        if(dto == null)
            return BadRequest();
        await _model.Create(dto);
        return CreatedAtAction(nameof(GetById), new { id = dto.id }, dto);
    }

    [HttpPut]
    public async Task<IActionResult> Update(EventDTO dto) {
        if(dto == null)
            return BadRequest();
        await _model.Update(dto);
        return NoContent(); 
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id) {
        await _model.Delete(id);
        return NoContent();
    }
}