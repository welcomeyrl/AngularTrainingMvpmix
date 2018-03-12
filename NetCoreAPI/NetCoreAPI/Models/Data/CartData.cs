using System.Collections.Generic;

namespace NetCoreAPI.Models.Data
{
    public class CartData
    {
        public int Id { get; set; }
        public IList<CartItemData> Items { get; }

        public CartData()
        {
            Items = new List<CartItemData>();
        }
    }
}
