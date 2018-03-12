using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetCoreAPI.Models;
using NetCoreAPI.Models.Data;

namespace NetCoreAPI.Interfaces
{
    public interface IProductsManager
    {
        IList<Product> Get();
        Product Get(int productId);
        void Create(Product product);
        void Update(int productId, Product product);
    }

    public interface ICartManager
    {
        Cart Get(int cartId);
    }

    public interface ICartItemsManager
    {
        IList<CartItem> GetItems(int cartId);
        void AddProduct(int cartId, int productId);
    }

    public interface IInMemoryDataManager
    {
        IList<ProductData> Products { get; }
        IList<CartData> Carts { get; }

        Product MapToProduct(ProductData productData);
        CartItem MapToCartItem(CartItemData cartItemData);
    }
}
