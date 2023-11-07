using PackIT.Domain.ValueObjects;
using PackIT.Shared.Abstractions.Exceptions;

namespace PackIT.Application;

public class MissingLocalizationWeatherException : PackItException
{
  public MissingLocalizationWeatherException(Localization localization) : base($"Couldn't fetch the weather date for localization '{localization.Country}/{localization.City}'.")
  {

  }
}
