using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace subsonicApi.Data
{
    public class ClientTypeConfiguration : IEntityTypeConfiguration<ClientDTO>
    {
        public void Configure(EntityTypeBuilder<ClientDTO> builder)
        {
            builder.ToTable("cliente").HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.Nombre).HasColumnName("nombre");
            builder.Property(x => x.Apellido).HasColumnName("apellido");
            builder.Property(x => x.Email).HasColumnName("email");
            builder.Property(x => x.Contrasena).HasColumnName("contrasena");
            builder.Property(x => x.Direccion).HasColumnName("direccion");
            builder.Property(x => x.Tlf).HasColumnName("tlf");
            builder.Property(x => x.Rol).HasColumnName("rol");

            builder.HasMany(x => x.ComprasProductos).WithOne(x => x.Cliente).HasForeignKey(x => x.ClienteId);
            builder.HasMany(x => x.ComprasEventos).WithOne(x => x.Cliente).HasForeignKey(x => x.ClienteId);
        }   
    }
}