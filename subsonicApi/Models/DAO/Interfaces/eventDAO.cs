public interface EventDAO {
    Task<List<EventDTO>> GetAll();
    Task<EventDTO> GetById(int id);
    Task Create(EventDTO dto);
    Task Update(EventDTO dto);
    Task Delete(int id);
}