using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase {
    private readonly ProductModel _model;

    public ProductController(IDAOFactory factory) {
        _model = new ProductModel(factory);
    }

    [HttpGet]
    public async Task<ActionResult<List<ProductDTO>>> GetAll() {
        var productos = await _model.GetAll();
        return Ok(productos);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDTO>> GetById(int id) {
        var product = await _model.GetById(id);
        if (product == null) 
            return NotFound();
        return Ok(product);
    }

    [HttpPut]
    public async Task<IActionResult> Update(ProductDTO dto) {
        if(dto == null)
            return BadRequest();
        await _model.Update(dto);
        return Ok(dto); 
    }
}