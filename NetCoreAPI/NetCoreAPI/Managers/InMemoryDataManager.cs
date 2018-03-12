using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetCoreAPI.Interfaces;
using NetCoreAPI.Models;
using NetCoreAPI.Models.Data;

namespace NetCoreAPI.Managers
{
    public class InMemoryDataManager : IInMemoryDataManager
    {
        public IList<ProductData> Products { get; } = new List<ProductData>
        {
            new ProductData { Id = 1, Name = "Twix", Description = "Left or Right?", Price = 10.99 },
            new ProductData { Id = 2, Name = "Snickers", Description = "Peanuts & Caramel", Price = 1.99 },
            new ProductData { Id = 3, Name = "M&Ms", Description = "Melt in your mouth", Price = 0.99 },
            new ProductData { Id = 4, Name = "Gum", Description = "For Chewing & Bubbles", Price = 4.99 }
        };

        public IList<CartData> Carts { get; } = new List<CartData>
        {
            new CartData { Id = 1 }
        };

        public Product MapToProduct(ProductData productData)
        {
            if (productData == null)
                return null;

            return new Product
            {
                Id = productData.Id,
                Name = productData.Name,
                Description = productData.Description,
                Price = productData.Price
            };
        }

        public CartItem MapToCartItem(CartItemData cartItemData)
        {
            if (cartItemData == null)
                return null;

            var productData = Products.FirstOrDefault(product => product.Id == cartItemData.ProductId);

            return new CartItem
            {
                ProductId = cartItemData.ProductId,
                ProductName = productData?.Name,
                ProductDescription = productData?.Description,
                ProductPrice = productData?.Price ?? 0,
                Quantity = cartItemData.Quantity
            };
        }
    }
}
