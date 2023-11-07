using PackIT.Application.DTO;

namespace PackIT.Application;

public interface IPackingListReadService
{
  Task<IEnumerable<PackingListDto>> SearchAsync(string searchPhrase);
  Task<bool> ExistsByNameAsync(string name);
}
