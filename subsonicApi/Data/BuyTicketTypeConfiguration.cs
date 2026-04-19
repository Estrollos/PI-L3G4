using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace subsonicApi.Data
{
    public class BuyTicketTypeConfiguration : IEntityTypeConfiguration<BuyTicketDTO>
    {
        public void Configure(EntityTypeBuilder<BuyTicketDTO> builder)
        {
            builder.ToTable("compra_entrada").HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.ClienteId).HasColumnName("cliente_id");
            builder.Property(x => x.EventoId).HasColumnName("evento_id");
            builder.Property(x => x.Cantidad).HasColumnName("cantidad");
            builder.Property(x => x.FechaCompra).HasColumnName("fecha_compra");

            builder.HasOne(x => x.Cliente).WithMany(x => x.ComprasEventos).HasForeignKey(x => x.ClienteId);
            builder.HasOne(x => x.Evento).WithMany().HasForeignKey(x => x.EventoId);
        }
    }
}