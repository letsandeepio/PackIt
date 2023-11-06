namespace PackIT.Application;

public interface IPackingListReadService
{
  Task<bool> ExistsByNameAsync(string name);
}
