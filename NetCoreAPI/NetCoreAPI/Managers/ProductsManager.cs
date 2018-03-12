using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.FileProviders;
using NetCoreAPI.Interfaces;
using NetCoreAPI.Models;
using NetCoreAPI.Models.Data;

namespace NetCoreAPI.Managers
{
    public class ProductsManager : IProductsManager
    {
        private readonly IInMemoryDataManager _dataManager;

        public ProductsManager(IInMemoryDataManager dataManager)
        {
            _dataManager = dataManager;
        }

        public IList<Product> Get()
        {
            return _dataManager.Products.Select(_dataManager.MapToProduct).ToList();
        }

        public Product Get(int productId)
        {
            return _dataManager.MapToProduct(_dataManager.Products.FirstOrDefault(product => product.Id == productId));
        }

        public void Create(Product product)
        {
            try
            {
                _dataManager.Products.Add(new ProductData
                {
                    Id = _dataManager.Products.Count + 1,
                    Name = product.Name,
                    Description = product.Description,
                    Price = product.Price
                });
            }
            catch
            {
                throw new Exception("Cannot create product");
            }
        }

        public void Update(int productId, Product product)
        {
            try
            {
                var foundProduct = _dataManager.Products.FirstOrDefault(p => p.Id == productId);

                if (foundProduct == null)
                    throw new Exception("Cannot update product as it cannot be found");

                foundProduct.Name = product.Name;
                foundProduct.Description = product.Description;
                foundProduct.Price = product.Price;
            }
            catch
            {
                throw new Exception("Cannot update product");
            }
        }        
    }
}
