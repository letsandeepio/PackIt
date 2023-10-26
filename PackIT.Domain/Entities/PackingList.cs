using PackIT.Domain.ValueObjects;

namespace PackIT.Domain.Entities;

public class PackingList
{
  public Guid Id { get; private set; }
  private string _name;
  private Localization _localization;

  private readonly LinkedList<PackingItem> _items = new();

  internal PackingList(Guid id, string name, Localization localization)
  {
    Id = id;
    _name = name;
    _localization = localization;
  }
}
