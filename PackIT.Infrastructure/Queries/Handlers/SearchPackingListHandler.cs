using Microsoft.EntityFrameworkCore;
using PackIT.Application.DTO;
using PackIT.Application.Queries;
using PackIT.Infrastructure.EF.Contexts;
using PackIT.Infrastructure.EF.Models;
using PackIT.Shared.Abstractions.Queries;

namespace PackIT.Infrastructure.Queries.Handlers;

internal sealed class SearchPackingListHandler : IQueryHandler<SearchPackingLists, IEnumerable<PackingListDto>>
{

  private readonly DbSet<PackingListReadModel> _packingLists;

  public SearchPackingListHandler(ReadDbContext context)
  {
    _packingLists = context.PackingLists;
  }

  public Task<IEnumerable<PackingListDto>> HandleAsync(SearchPackingLists query)
  {
    return null;
  }
}
