using PackIT.Shared.Abstractions.Exceptions;

namespace PackIT.Domain.Exceptions;

public class EmptyPackingListNameException : PackItException
{
  public EmptyPackingListNameException() : base(message: "packing list name cannot be empty")
  {
  }
}
