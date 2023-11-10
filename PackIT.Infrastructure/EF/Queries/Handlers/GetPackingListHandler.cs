
using Microsoft.EntityFrameworkCore;
using PackIT.Application;
using PackIT.Application.DTO;
using PackIT.Domain.Repositories;
using PackIT.Infrastructure.EF.Contexts;
using PackIT.Infrastructure.EF.Models;
using PackIT.Shared.Abstractions.Queries;

namespace PackIT.Infrastructure.Queries.Handlers;

internal sealed class GetPackingListHandler : IQueryHandler<GetPackingList, PackingListDto>
{
  private readonly DbSet<PackingListReadModel> _packingLists;

  public GetPackingListHandler(ReadDbContext context) => _packingLists = context.PackingLists;

  public async Task<PackingListDto> HandleAsync(GetPackingList query)
  {
    var packingLists = _packingLists?.Include(pl => pl.Items).AsNoTracking();
    var packingList = packingLists?.FirstOrDefault(pl => pl.Id == query.Id);

    if (packingList == null)
    {
      // Log or throw an exception
      throw new Exception($"No PackingList found with Id {query.Id}");
    }

    return packingList.AsDto();

  }

}


