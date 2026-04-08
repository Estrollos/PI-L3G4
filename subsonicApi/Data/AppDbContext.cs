using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

    public DbSet<Artist> Artists { get; set; }
    public DbSet<Client> Clients { get; set; }
    public DbSet<Event> Events { get; set; }
    public DbSet<Music> Musics { get; set; }
    public DbSet<News> News { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<productImage> productImages { get; set; }
    public DbSet<productVariant> productVariants { get; set; }
    public DbSet<Space> Spaces { get; set; }
    public DbSet<Stall> Stalls { get; set; }
    public DbSet<stallType> stallTypes { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<stallType>()
            .HasKey(pt => new { pt.puesto_id, pt.tipo }); // clave primaria compuesta
    }
}