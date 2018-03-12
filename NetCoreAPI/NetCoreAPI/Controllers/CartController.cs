using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NetCoreAPI.Interfaces;
using NetCoreAPI.Models;

namespace NetCoreAPI.Controllers
{
    [Route("api/[controller]")]
    public class CartController : Controller
    {
        private readonly ICartManager _cartManager;

        public CartController(ICartManager cartManager)
        {
            _cartManager = cartManager;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_cartManager.Get(id));
        }
    }
}