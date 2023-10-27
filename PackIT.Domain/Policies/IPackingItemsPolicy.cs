using PackIT.Domain.ValueObjects;

namespace PackIT.Domain.Policies;

public interface IPackingItemsPolicy
{
  bool isApplicable(PolicyData data);
  IEnumerable<PackingItem> GenerateItems(PolicyData data);
}
