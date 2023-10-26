using PackIT.Domain.Exceptions;
using PackIT.Domain.ValueObjects;
using PackIT.Shared.Abstractions;

namespace PackIT.Domain.Entities;

public class PackingList : AggregateRoot<PackingListId>
{
  public PackingListId Id { get; private set; }
  private string _name;
  private Localization _localization;

  private readonly LinkedList<PackingItem> _items = new();

  internal PackingList(Guid id, string name, Localization localization, LinkedList<PackingItem> items)
  {
    Id = id;
    _name = name;
    _localization = localization;
  }

  public void AddItem(PackingItem item)
  {
    var alreadyExists = _items.Any(i => i.Name == item.Name);

    if (alreadyExists)
    {
      throw new PackingItemAlreadyExistException(_name, item.Name);
    }

    _items.AddLast(item);
  }


}
