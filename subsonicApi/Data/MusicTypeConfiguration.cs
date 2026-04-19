using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace subsonicApi.Data
{
    public class MusicTypeConfiguration : IEntityTypeConfiguration<MusicDTO>
    {
        public void Configure(EntityTypeBuilder<MusicDTO> builder)
        {
            builder.ToTable("musica").HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.Url).HasColumnName("url");
            builder.Property(x => x.UrlImg).HasColumnName("urlImg");
            builder.Property(x => x.Escenario).HasColumnName("escenario");
        }
    }
}