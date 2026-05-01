using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class SpaceController : ControllerBase {
    private readonly SpaceModel _model;

    public SpaceController(IDAOFactory factory) {
        _model = new SpaceModel(factory);
    }

    [HttpGet]
    public async Task<ActionResult<List<SpaceDTO>>> GetAll() {
        var espacios = await _model.GetAll();
        return Ok(espacios);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<SpaceDTO>> GetById(int id) {
        var espacio = await _model.GetById(id);
        if (espacio == null) 
            return NotFound();
        return Ok(espacio);
    }

    [HttpPut]
    public async Task<IActionResult> Update(SpaceDTO dto) {
        if(dto == null)
            return BadRequest();
        await _model.Update(dto);
        return Ok(dto); 
    }
}