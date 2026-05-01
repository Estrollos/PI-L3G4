using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProductVariantController : ControllerBase {
    private readonly ProductVariantModel _model;

    public ProductVariantController(IDAOFactory factory) {
        _model = new ProductVariantModel(factory);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id) {
        var variante = await _model.GetById(id);
        if (variante == null) return NotFound();
        return Ok(variante);
    }
}
