using PackIT.Shared.Abstractions.Exceptions;

namespace PackIT.Domain.Exceptions;

public class EmptyPackingListIdException : PackItException
{
  public EmptyPackingListIdException() : base(message: "Packing list ID cannot be empty.") { }
}
