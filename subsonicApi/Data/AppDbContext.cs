using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

    public DbSet<ArtistDTO> Artists { get; set; }
    public DbSet<ClientDTO> Clients { get; set; }
    public DbSet<EventDTO> Events { get; set; }
    public DbSet<MusicDTO> Musics { get; set; }
    public DbSet<NewsDTO> News { get; set; }
    public DbSet<ProductDTO> Products { get; set; }
    public DbSet<productImageDTO> productImages { get; set; }
    public DbSet<productVariantDTO> productVariants { get; set; }
    public DbSet<SpaceDTO> Spaces { get; set; }
    public DbSet<StallDTO> Stalls { get; set; }
    public DbSet<stallTypeDTO> stallTypes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<EventDTO>().ToTable("evento");
        
        modelBuilder.Entity<stallTypeDTO>()
            .HasKey(pt => new { pt.puesto_id, pt.tipo }); // clave primaria compuesta
    }
}