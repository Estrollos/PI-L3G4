using subsonicApi.Models.DAO.Interfaces;

public class DAOFactory : IDAOFactory {
    private readonly AppDbContext _context;

    public DAOFactory(AppDbContext context) {
        _context = context;
    }

    public IBuyProductDAO CreateBuyProductDAO() => new BuyProductDAO(_context);
    public IBuyTicketDAO CreateBuyTicketDAO() => new BuyTicketDAO(_context);
    public IClientDAO CreateClientDAO() => new ClientDAO(_context);
    public IEventDAO CreateEventDAO() => new EventDAO(_context);
    public IMusicDAO CreateMusicDAO() => new MusicDAO(_context);
    public INewDAO CreateNewDAO() => new NewDAO(_context);
    public IProductDAO CreateProductDAO() => new ProductDAO(_context);
    public ISpaceDAO CreateSpaceDAO() => new SpaceDAO(_context);
}