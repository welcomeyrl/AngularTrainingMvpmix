using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using NetCoreAPI.Interfaces;
using NetCoreAPI.Managers;

namespace NetCoreAPI.IoC
{
    public static class Bindings
    {
        public static void Bind(IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IInMemoryDataManager, InMemoryDataManager>();
            serviceCollection.AddSingleton<IProductsManager, ProductsManager>();
            serviceCollection.AddSingleton<ICartManager, CartManager>();
            serviceCollection.AddSingleton<ICartItemsManager, CartItemsManager>();
        }
    }
}
