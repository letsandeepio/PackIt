using Microsoft.AspNetCore.Mvc;
using PackIT.Application;
using PackIT.Application.DTO;
using PackIT.Application.Queries;
using PackIT.Shared.Abstractions.Commands;
using PackIT.Shared.Abstractions.Queries;

namespace PackIT.Api.Controllers;


[ApiController]
[Route("api/[controller]")]
public class PackingListController : BaseController
{
  private readonly ICommandDispatcher _commandDispatcher;
  private readonly IQueryDispatcher _queryDispatcher;

  public PackingListController(ICommandDispatcher commandDispatcher, IQueryDispatcher queryDispatcher)
  {
    _commandDispatcher = commandDispatcher;
    _queryDispatcher = queryDispatcher;
  }

  [HttpGet("{id:guid}")]
  public async Task<ActionResult<PackingListDto>> Get([FromRoute] GetPackingList query)
  {
    var result = await _queryDispatcher.QueryAsync(query);
    return OkOrNotFound(result);
  }

  [HttpGet]
  public async Task<ActionResult<IEnumerable<PackingListDto>>> Get([FromRoute] SearchPackingLists query)
  {
    var result = await _queryDispatcher.QueryAsync(query);
    return OkOrNotFound(result);
  }

}
