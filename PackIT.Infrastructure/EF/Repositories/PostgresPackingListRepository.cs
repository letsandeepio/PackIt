using Microsoft.EntityFrameworkCore;
using PackIT.Domain;
using PackIT.Domain.Entities;
using PackIT.Domain.Repositories;
using PackIT.Domain.ValueObjects;
using PackIT.Infrastructure.EF.Contexts;

namespace PackIT.Infrastructure;

internal sealed class PostgresPackingListRepository : IPackingListRepository
{

  private readonly DbSet<PackingList> _packingLists;
  private readonly WriteDbContext _writeDbContext;

  public PostgresPackingListRepository(WriteDbContext writeDbContext)
  {
    _writeDbContext = writeDbContext;
    _packingLists = writeDbContext.PackingLists;
  }

  public async Task AddAsync(PackingList packingList)
  {
    await _packingLists.AddAsync(packingList);
    await _writeDbContext.SaveChangesAsync();
  }

  public async Task DeleteAsync(PackingList packingList)
  {
    _packingLists.Remove(packingList);
    await _writeDbContext.SaveChangesAsync();
  }

  public Task<bool> ExistsAsync(PackingListName name)
  {
    throw new NotImplementedException();
  }

  public Task<PackingList> GetAsync(PackingListId id) => _packingLists.Include("_items").SingleOrDefaultAsync(pl => pl.Id == id);

  public async Task UpdateAsync(PackingList packingList)
  {
    _packingLists.Update(packingList);
    await _writeDbContext.SaveChangesAsync();
  }


}
