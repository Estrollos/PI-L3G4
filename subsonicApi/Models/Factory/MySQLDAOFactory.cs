public class MySQLDAOFactory : DAOFactory {
    private readonly AppDbContext _context;

    public MySQLDAOFactory(AppDbContext context) {
        _context = context;
    }

    public EventDAO CreateEventoDAO() => new EventDAOMySQL(_context);
    public ClientDAO CreateClienteDAO() => new ClientDAOMySQL(_context);
    public ProductDAO CreateProductoDAO() => new ProductDAOMySQL(_context);
}