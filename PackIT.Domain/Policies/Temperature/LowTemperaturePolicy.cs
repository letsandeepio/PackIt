using PackIT.Domain.Policies;

namespace PackIT.Domain.Policies.Temperature;

internal class LowTemperaturePolicy : IPackingItemsPolicy
{
  public IEnumerable<PackingItem> GenerateItems(PolicyData data) => new List<PackingItem> {
    new(name: "Winter Hat", quantity: 1),
    new(name: "Scarf", quantity: 2),
    new(name: "Gloves", quantity: 3),
    new(name: "Hoodie", quantity: 3),
    new(name: "Warm Jacket", quantity: 3),
  };

  public bool isApplicable(PolicyData data) => data.temperature < 10D;
}
