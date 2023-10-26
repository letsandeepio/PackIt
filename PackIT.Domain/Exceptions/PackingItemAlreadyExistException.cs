using PackIT.Shared.Abstractions.Exceptions;

namespace PackIT.Domain.Exceptions;

public class PackingItemAlreadyExistException : PackItException
{
  public string Listname { get; private set; }
  public string ItemName { get; private set; }

  public PackingItemAlreadyExistException(string listName, string itemName) : base(message: $"Packing list: '${listName}' already defined item '${itemName}'")
  {
    Listname = listName;
    ItemName = itemName;
  }

}
