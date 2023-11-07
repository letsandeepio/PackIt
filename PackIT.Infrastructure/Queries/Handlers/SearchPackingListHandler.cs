using PackIT.Application.DTO;
using PackIT.Application.Queries;
using PackIT.Shared.Abstractions.Queries;

namespace PackIT.Infrastructure.Queries.Handlers;

public class SearchPackingListHandler : IQueryHandler<SearchPackingLists, IEnumerable<PackingListDto>>
{
  public Task<IEnumerable<PackingListDto>> HandleAsync(SearchPackingLists query)
  {
    throw new NotImplementedException();
  }
}
