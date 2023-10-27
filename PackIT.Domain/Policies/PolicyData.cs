using PackIT.Domain.Consts;
using PackIT.Domain.ValueObjects;

namespace PackIT.Domain;

public record PolicyData(TravelDays days, Gender gender, Temperature temperature, Localization localization);

