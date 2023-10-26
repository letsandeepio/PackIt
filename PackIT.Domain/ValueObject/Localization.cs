namespace PackIT.Domain.ValueObjects;

public record Localization(string City, string Country)
{
  public static Localization Create(string value)
  {
    var splitLocalizaton = value.Split(separator: ",");
    return new Localization(splitLocalizaton.First(), splitLocalizaton.Last());
  }

  public override string ToString() => $"{City}, {Country}";
}
