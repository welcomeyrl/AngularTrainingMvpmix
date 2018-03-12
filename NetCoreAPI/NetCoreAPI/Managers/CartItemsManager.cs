using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetCoreAPI.Interfaces;
using NetCoreAPI.Models;
using NetCoreAPI.Models.Data;

namespace NetCoreAPI.Managers
{
    public class CartItemsManager : ICartItemsManager
    {
        private readonly IInMemoryDataManager _dataManager;

        public CartItemsManager(IInMemoryDataManager dataManager)
        {
            _dataManager = dataManager;
        }

        public void AddProduct(int cartId, int productId)
        {
            var cart = _dataManager.Carts.FirstOrDefault(c => c.Id == cartId);

            if (cart == null) throw new Exception("Cart does not exist");

            var productItem = cart.Items.FirstOrDefault(item => item.ProductId == productId);

            if (productItem != null)
            {
                productItem.Quantity = productItem.Quantity + 1;
            }
            else
            {
                cart.Items.Add(new CartItemData { ProductId = productId, Quantity = 1 });
            }
        }

        public IList<CartItem> GetItems(int cartId)
        {
            var productDatas = _dataManager.Products;
            return _dataManager.Carts.FirstOrDefault(cart => cart.Id == cartId)?
                .Items
                .Select(item => _dataManager.MapToCartItem(item))
                .ToList();
        }

        
    }
}
