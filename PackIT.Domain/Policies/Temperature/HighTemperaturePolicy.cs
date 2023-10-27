using PackIT.Domain.Policies;

namespace PackIT.Domain.Policies.Temperature;

internal class HighTemperaturePolicy : IPackingItemsPolicy
{
  public IEnumerable<PackingItem> GenerateItems(PolicyData data) => new List<PackingItem> {
    new(name: "Hat", quantity: 1),
    new(name: "Sunglass", quantity: 2),
    new(name: "Cream with UV Filter", quantity: 3),
  };

  public bool isApplicable(PolicyData data) => data.temperature > 250;
}
