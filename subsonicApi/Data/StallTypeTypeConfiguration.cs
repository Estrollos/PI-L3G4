using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace subsonicApi.Data
{
    public class StallTypeTypeConfiguration : IEntityTypeConfiguration<StallTypeDTO>
    {
        public void Configure(EntityTypeBuilder<StallTypeDTO> builder)
        {
            builder.ToTable("puesto_tipo").HasKey(x => new {x.EspacioId, x.Tipo});

            builder.Property(x => x.EspacioId).HasColumnName("espacio_id");
            builder.Property(x => x.Tipo).HasColumnName("tipo");

            builder.HasOne(x => x.Espacio).WithMany(x => x.Tipos).HasForeignKey(x => x.EspacioId);
        }
    }
}