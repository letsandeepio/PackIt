using System.ComponentModel.DataAnnotations;
using PackIT.Application.DTO;
using PackIT.Shared.Abstractions.Queries;

namespace PackIT.Application.Queries;

public class SearchPackingLists : IQuery<IEnumerable<PackingListDto>>
{
  [Required]
  public required string SearchPhrase { get; set; }

}
