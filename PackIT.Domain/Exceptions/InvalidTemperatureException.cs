using PackIT.Shared.Abstractions.Exceptions;

namespace PackIT.Domain.Exceptions;

public class InvalidTemperatureException : PackItException
{
  public double Days { get; }

  public InvalidTemperatureException(double value) : base(message: $"Value '{value}' is invalid temperature.")
  {
    Days = value;
  }
}
