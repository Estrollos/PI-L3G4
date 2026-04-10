// Model/EventoModel.cs
public class EventModel {
    private readonly EventDAO _eventoDAO;

    public EventModel(DAOFactory factory) {
        _eventoDAO = factory.CreatEventDAO();
    }
    public async Task<List<EventDTO>> GetAll()
    {
       return await _eventoDAO.GetAll();
    } 
    public async Task<EventDTO> GetById(int id){
         var evento = await _eventoDAO.GetById(id);
         if (evento == null)
            throw new Exception("Evento no encontrado");
        return evento;
    }
    public async Task Create(EventDTO dto) => await _eventoDAO.Create(dto);

    public async Task Update(EventDTO dto) {
        var existe = await _eventoDAO.GetById(dto.id);
        if (existe == null)
            throw new Exception("Evento no encontrado");
        await _eventoDAO.Update(dto);
    }

    public async Task Delete(int id) {
        var existe = await _eventoDAO.GetById(id);
        if (existe == null)
            throw new Exception("Evento no encontrado");
        await _eventoDAO.Delete(id);
    }
}