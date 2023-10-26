using PackIT.Shared.Abstractions.Exceptions;

namespace PackIT.Domain.Exceptions;

public class EmptyPackingListItemNameException : PackItException
{
  public EmptyPackingListItemNameException() : base(message: "Packing list name cannot be empty")
  {
  }
}
