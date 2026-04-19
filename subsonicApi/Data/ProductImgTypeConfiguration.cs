using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace subsonicApi.Data
{
    public class ProductImgTypeConfiguration : IEntityTypeConfiguration<ProductImageDTO>
    {
        public void Configure(EntityTypeBuilder<ProductImageDTO> builder)
        {
            builder.ToTable("producto_imagen").HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.ProductoId).HasColumnName("producto_id");
            builder.Property(x => x.Url).HasColumnName("url");

            builder.HasOne(x => x.Producto).WithMany(x => x.Imagenes).HasForeignKey(x => x.ProductoId);
        }
    }
}