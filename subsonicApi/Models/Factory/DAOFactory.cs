public interface DAOFactory {
    EventDAO CreatEventDAO();
    ClientDAO CreatClientDAO();
    ProductDAO CreatProductDAO();
    // ... un método por cada DAO
}