using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NetCoreAPI.Interfaces;
using NetCoreAPI.Models;
using NetCoreAPI.Models.Data;

namespace NetCoreAPI.Controllers
{
    [Route("api")]
    public class CartItemsController : Controller
    {
        private readonly ICartItemsManager _cartItemsManager;

        public CartItemsController(ICartItemsManager cartItemsManager)
        {
            _cartItemsManager = cartItemsManager;
        }

        [HttpGet("cart/{id}/Items")]
        public IActionResult Get(int id)
        {
            return Ok(_cartItemsManager.GetItems(id));
        }

        [HttpPut("cart/{id}/Item")]
        public IActionResult Put(int id, [FromBody]ProductData product)
        {
            _cartItemsManager.AddProduct(id, product.Id);
            return NoContent();
        }
    }
}