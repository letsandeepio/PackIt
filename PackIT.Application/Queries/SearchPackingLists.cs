using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;
using PackIT.Application.DTO;
using PackIT.Shared.Abstractions.Queries;

namespace PackIT.Application.Queries;

public class SearchPackingLists : IQuery<IEnumerable<PackingListDto>>
{
  public string? SearchPhrase { get; set; }

}
