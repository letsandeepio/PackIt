﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using PackIT.Application;
using PackIT.Infrastructure.EF;
using PackIT.Shared.Queries;

namespace PackIT.Infrastructure;

public static class Extensions
{
  public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
  {

    services.AddPostgres(configuration);
    services.AddQueries();

    services.AddSingleton<IWeatherService, DummyWeatherService>();

    return services;
  }

}
