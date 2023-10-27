using PackIT.Domain.Policies;

namespace PackIT.Domain;

internal class FemaleGenderPolicy : IPackingItemsPolicy
{
  public IEnumerable<PackingItem> GenerateItems(PolicyData data) => new List<PackingItem> {
    new(name: "Lipstick", quantity: 1),
    new(name: "Powder", quantity: 2),
    new(name: "Eyeliner", quantity: 3),
  };

  public bool isApplicable(PolicyData data) => data.gender is Consts.Gender.Female;
}
