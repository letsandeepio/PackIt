using Microsoft.EntityFrameworkCore;
using PackIT.Application;
using PackIT.Application.DTO;
using PackIT.Infrastructure.EF.Contexts;
using PackIT.Infrastructure.EF.Models;

namespace PackIT.Infrastructure.EF.Services;

internal sealed class PostgresPackingListReadService : IPackingListReadService
{
  private readonly DbSet<PackingListReadModel> _packingList;

  public PostgresPackingListReadService(ReadDbContext readDbContext)
  {
    _packingList = readDbContext.PackingLists;
  }

  public Task<bool> ExistsByNameAsync(string name) => _packingList.AnyAsync(pl => pl.Name == name);

  public Task<IEnumerable<PackingListDto>> SearchAsync(string searchPhrase)
  {
    throw new NotImplementedException();
  }
}
