﻿using Microsoft.EntityFrameworkCore;
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

  public async Task<IEnumerable<PackingListDto>> HandleAsync(SearchPackingLists query)
  {

    var dbQuery = _packingLists
      .Include(pl => pl.Items)
      .AsQueryable();

    if (query.SearchPhrase is not null)
    {
      dbQuery = dbQuery.Where(pl => Microsoft.EntityFrameworkCore.EF.Functions.ILike(pl.Name, $"%{query.SearchPhrase}%"));
    }

    var queryResult = await dbQuery.Select(pl => pl.AsDto()).AsNoTracking().ToListAsync();

    return queryResult;
  }
}
