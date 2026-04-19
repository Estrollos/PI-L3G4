using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]

public class NewController : ControllerBase
{
     private readonly NewModel _model;

    public NewController(IDAOFactory factory) {
        _model = new NewModel(factory);
    }

    [HttpGet]
    public async Task<ActionResult<List<NewsDTO>>> GetAll() {
        var news = await _model.GetAll();
        return Ok(news);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<NewsDTO>> GetById(int id) {
        var news = await _model.GetById(id);
        if (news == null) 
            return NotFound();
        return Ok(news);
    }
}