using PackIT.Application.DTO;
using PackIT.Shared.Abstractions.Queries;

namespace PackIT.Application;

public class GetPackingList : IQuery<PackingListDto>
{
  public Guid Id { get; set; }
}
