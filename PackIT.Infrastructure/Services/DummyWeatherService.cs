using PackIT.Application;
using PackIT.Application.DTO.External;
using PackIT.Domain.ValueObjects;

namespace PackIT.Infrastructure;

public sealed class DummyWeatherService : IWeatherService
{
  public Task<WeatherDto> GetWeatherAsync(Localization localization) => Task.FromResult(new WeatherDto(new Random().Next(5, 30)));
}
