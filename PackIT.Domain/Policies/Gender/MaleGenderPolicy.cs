
namespace PackIT.Domain.Policies.Gender;

internal class MaleGenderPolicy : IPackingItemsPolicy
{
  public IEnumerable<PackingItem> GenerateItems(PolicyData data) => new List<PackingItem> {
    new(name: "Laptop", quantity: 1),
    new(name: "Beer", quantity: 10),
    new(name: "Book", quantity: (uint) Math.Ceiling(data.days/7m))
  };

  public bool isApplicable(PolicyData data) => data.gender is Consts.Gender.Male;
}
