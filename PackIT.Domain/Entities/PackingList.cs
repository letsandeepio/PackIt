using PackIT.Domain.Events;
using PackIT.Domain.Exceptions;
using PackIT.Domain.ValueObjects;
using PackIT.Shared.Abstractions.Domain;

namespace PackIT.Domain.Entities;

public class PackingList : AggregateRoot<PackingListId>
{
  public PackingListId Id { get; private set; }
  private readonly PackingListName _name;
  private readonly Localization _localization;
  private List<PackingItem> _items { get; set; } = new();

  private PackingList(PackingListId id, PackingListName name, Localization localization, List<PackingItem> items) : this(id, name, localization)
  {
    _items = items;
  }

  internal PackingList(PackingListId id, PackingListName name, Localization localization)
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

    _items.Add(item);

    AddEvent(new PackingItemAdded(this, item));
  }

  public void AddItems(IEnumerable<PackingItem> items)
  {
    foreach (var item in items)
    {
      AddItem(item);
    }
  }

  public void PackItem(string itemName)
  {
    var item = GetItem(itemName);

    item.IsPacked = true;

    AddEvent(new PackingItemPacked(this, item));
  }

  private PackingItem GetItem(string itemName)
  {
    var item = _items.SingleOrDefault(i => i.Name == itemName);

    if (item is null)
    {
      throw new PackingItemNotFoundException(itemName);
    }

    return item;
  }

  public void RemoveItem(string itemName)
  {
    var item = GetItem(itemName);
    _items.Remove(item);
    AddEvent(new PackingItemRemoved(this, item));
  }

}
