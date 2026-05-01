using subsonicApi.Models.DAO.Interfaces;

public interface IDAOFactory {
    IBuyProductDAO CreateBuyProductDAO();
    IBuyTicketDAO CreateBuyTicketDAO();
    IClientDAO CreateClientDAO();
    IEventDAO CreateEventDAO();
    IMusicDAO CreateMusicDAO();
    INewDAO CreateNewDAO();
    IProductDAO CreateProductDAO();
    ISpaceDAO CreateSpaceDAO();
    IProductVariantDAO CreateProductVariantDAO();
}