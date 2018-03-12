using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NetCoreAPI.Interfaces;
using NetCoreAPI.Models;
using NetCoreAPI.Models.Data;

namespace NetCoreAPI.Managers
{
    public class CartManager : ICartManager
    {
        private readonly IInMemoryDataManager _dataManager;

        public CartManager(IInMemoryDataManager dataManager)
        {
            _dataManager = dataManager;
        }

        public Cart Get(int cartId)
        {
            var cartData = _dataManager.Carts.FirstOrDefault(c => c.Id == cartId);

            if (cartData == null) return null;

            var cartItems = cartData.Items.Select(_dataManager.MapToCartItem).ToList();

            var cart = new Cart
            {
                Id = cartId,                
                SubTotal = cartItems.Aggregate(Convert.ToDouble(0), (result, item) => result + (item.ProductPrice * item.Quantity)),
                Shipping = cartItems.Count > 0 ? 25 : 0,
                Items = cartItems
            };

            cart.Tax = cart.SubTotal * (8.5 / 100);
            cart.Total = cart.SubTotal + cart.Tax + cart.Shipping;

            return cart;
        }
    }
}
