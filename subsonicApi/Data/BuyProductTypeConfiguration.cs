using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace subsonicApi.Data
{
    public class BuyProductTypeConfiguration : IEntityTypeConfiguration<BuyProductDTO>
    {
        public void Configure(EntityTypeBuilder<BuyProductDTO> builder)
        {
            builder.ToTable("compra_producto").HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("id");
            builder.Property(x => x.ClienteId).HasColumnName("cliente_id");
            builder.Property(x => x.ProductoVarianteId).HasColumnName("producto_variante_id");
            builder.Property(x => x.Cantidad).HasColumnName("cantidad");
            builder.Property(x => x.FechaCompra).HasColumnName("fecha_compra");

            builder.HasOne(x => x.Cliente).WithMany(x => x.ComprasProductos).HasForeignKey(x => x.ClienteId);
            builder.HasOne(x => x.ProductoVariante).WithMany().HasForeignKey(x => x.ProductoVarianteId);
        }
    }
}   