using PackIT.Shared.Abstractions.Exceptions;

namespace PackIT.Domain;

public class PackingItemNotFoundException : PackItException
{

  public string ItemName { get; private set; }

  public PackingItemNotFoundException(string itemName) : base(message: $"Packing item '{itemName}' was not found") => ItemName = itemName;
}
