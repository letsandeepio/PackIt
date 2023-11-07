using PackIT.Shared.Abstractions.Commands;

namespace PackIT.Application.Commands;

public record AddPackingItem(Guid PackingListId, string name, uint Quantity) : ICommand;