using PackIT.Application.DTO.External;
using PackIT.Domain.ValueObjects;

namespace PackIT.Application;

public interface IWeatherService
{
  Task<WeatherDto> GetWeatherAsync(Localization localization);
}
