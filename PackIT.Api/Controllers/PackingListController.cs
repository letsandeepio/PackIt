using Microsoft.AspNetCore.Mvc;
using PackIT.Application;
using PackIT.Application.Commands;
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

  [HttpPost]
  public async Task<IActionResult> Post([FromBody] CreatePackingListWithItems command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return CreatedAtAction(nameof(Get), new { id = command.Id });
  }

  [HttpPost("{packingListId}/items")]
  public async Task<IActionResult> Post([FromBody] AddPackingItem command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return Ok();
  }


  [HttpPost("{packingListId}/items/{name}/pack")]
  public async Task<IActionResult> Post([FromBody] PackItem command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return Ok();
  }

  [HttpDelete("{packingListId}/items/{name}/pack")]
  public async Task<IActionResult> Post([FromBody] RemovePackingItem command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return Ok();
  }

  [HttpDelete("{packingListId}")]
  public async Task<IActionResult> Post([FromBody] RemovePackingList command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return Ok();
  }


}
