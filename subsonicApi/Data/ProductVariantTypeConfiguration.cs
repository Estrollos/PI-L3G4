using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace subsonicApi.Data
{
    public class ProductVariantTypeConfiguration : IEntityTypeConfiguration<ProductVariantDTO>
    {
        public void Configure(EntityTypeBuilder<ProductVariantDTO> builder)
        {
            builder.ToTable("producto_variante").HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.ProductoId).HasColumnName("producto_id");
            builder.Property(x => x.Color).HasColumnName("color");
            builder.Property(x => x.Talla).HasColumnName("talla");
            builder.Property(x => x.Stock).HasColumnName("stock");

            builder.HasOne(x => x.Producto).WithMany(x => x.Variantes).HasForeignKey(x => x.ProductoId);
        }
    }
}