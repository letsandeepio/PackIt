namespace PackIT.Domain.Policies.Universal;

internal class BasicPolicy : IPackingItemsPolicy
{
  private uint MaximumQuantityOfCloths = 7;

  public IEnumerable<PackingItem> GenerateItems(PolicyData data) => new List<PackingItem> {
    new PackingItem("Underwear", Math.Min(data.days, MaximumQuantityOfCloths)),
    new PackingItem("Socks",  Math.Min(data.days, MaximumQuantityOfCloths)),
    new PackingItem("T-Shirt", Math.Min(data.days, MaximumQuantityOfCloths)),
    new PackingItem("Trousers", 1),
    new PackingItem("Toothbrush", 1),
    new PackingItem("Toothpaste", 1),
    new PackingItem("Shoes", 1),
    new PackingItem("Jacket", 1),
    new PackingItem("Phone", 1),
    new PackingItem("Charger", 1),
    new PackingItem("Wallet", 1),
    new PackingItem("Passport", 1),
    new PackingItem("Keys", 1),
    new PackingItem("Glasses", 1),
    new PackingItem("Medicine", 1),
    new PackingItem("Deodorant", 1),
    new PackingItem("Shampoo", 1),
    new PackingItem("Soap", 1),

  };

  public bool isApplicable(PolicyData data) => true;
}
