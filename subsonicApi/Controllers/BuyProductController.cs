using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class BuyProductController : ControllerBase {
    private readonly BuyProductModel _model;

    public BuyProductController(IDAOFactory factory) {
        _model = new BuyProductModel(factory);
    }

    [HttpGet]
    public async Task<ActionResult<List<BuyProductDTO>>> GetAll() {
        var productos = await _model.GetAll();
        return Ok(productos);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BuyProductDTO>> GetById(int id) {
        var producto = await _model.GetById(id);
        if (producto == null) 
            return NotFound();
        return Ok(producto);
    }

    [HttpGet("cliente/{clienteId}")]
    public async Task<IActionResult> GetByClienteId(int clienteId) {
        var compras = await _model.GetByClienteId(clienteId);
        return Ok(compras);
    }

    [HttpPost]
    public async Task<ActionResult<BuyProductDTO>> Create(BuyProductDTO dto) {
        if(dto == null)
            return BadRequest();
        await _model.Create(dto);
        return CreatedAtAction(nameof(GetById), new { id = dto.Id }, dto);
    }

    [HttpPut]
    public async Task<IActionResult> Update(BuyProductDTO dto) {
        if(dto == null)
            return BadRequest();
        await _model.Update(dto);
        return Ok(dto); 
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id) {
        await _model.Delete(id);
        return NoContent();
    }
}