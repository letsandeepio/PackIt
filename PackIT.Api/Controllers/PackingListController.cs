﻿using Microsoft.AspNetCore.Mvc;
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

  [HttpGet]
  public async Task<ActionResult<IEnumerable<PackingListDto>>> Get([FromQuery] SearchPackingLists query)
  {
    var result = await _queryDispatcher.QueryAsync(query);
    return OkOrNotFound(result);
  }


  [HttpGet("{id:guid}")]
  public async Task<ActionResult<PackingListDto>> Get([FromRoute] GetPackingList query)
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

  [HttpPut("{packingListId:guid}/items")]
  public async Task<IActionResult> Put([FromBody] AddPackingItem command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return Ok();
  }


  [HttpPut("{packingListId:guid}/items/{name}/pack")]
  public async Task<IActionResult> Put([FromRoute] PackItem command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return Ok();
  }


  [HttpDelete("{id:guid}")]
  public async Task<IActionResult> Delete([FromRoute] RemovePackingList command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return Ok();
  }


  [HttpDelete("{packingListId:guid}/items/{name}")]
  public async Task<IActionResult> Delete([FromRoute] RemovePackingItem command)
  {
    await _commandDispatcher.DispatchAsync(command);
    return Ok();
  }


}
