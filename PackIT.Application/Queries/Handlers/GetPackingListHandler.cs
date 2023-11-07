using PackIT.Application.DTO;
using PackIT.Domain.Repositories;
using PackIT.Shared.Abstractions.Queries;

namespace PackIT.Application;

public class GetPackingListHandler : IQueryHandler<GetPackingList, PackingListDto>
{
  private readonly IPackingListRepository _repository;

  public GetPackingListHandler(IPackingListRepository repository)
  {
    _repository = repository;
  }
  public async Task<PackingListDto> HandleAsync(GetPackingList query)
  {
    return null;
  }
}
