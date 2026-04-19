using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace subsonicApi.Data
{
    public class EventTypeConfiguration : IEntityTypeConfiguration<EventDTO>
    {
        public void Configure(EntityTypeBuilder<EventDTO> builder)
        {
            builder.ToTable("evento").HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.Escenario).HasColumnName("escenario");
            builder.Property(x => x.Fecha).HasColumnName("fecha");
            builder.Property(x => x.Dia).HasColumnName("dia");
            builder.Property(x => x.Hora).HasColumnName("hora");
            builder.Property(x => x.Info).HasColumnName("info");
            builder.Property(x => x.UrlImg).HasColumnName("urlImg");
            builder.Property(x => x.NEntradas).HasColumnName("nEntradas");
            builder.Property(x => x.PrecioEntradas).HasColumnName("precioEntradas");

            builder.HasMany(x => x.Artistas).WithOne(x => x.Evento).HasForeignKey(x => x.EventoId);
        }
    }
}