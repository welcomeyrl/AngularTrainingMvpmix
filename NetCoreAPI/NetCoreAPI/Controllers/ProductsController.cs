using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.XPath;
using Microsoft.AspNetCore.Mvc;
using NetCoreAPI.Interfaces;
using NetCoreAPI.Models;
using NetCoreAPI.Models.Data;

namespace NetCoreAPI.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductsManager _productsManager;

        public ProductsController(IProductsManager productsManager)
        {
            _productsManager = productsManager;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_productsManager.Get());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_productsManager.Get(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            _productsManager.Create(product);
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Product product)
        {
            _productsManager.Update(id, product);
            return NoContent();            
        }
    }
}