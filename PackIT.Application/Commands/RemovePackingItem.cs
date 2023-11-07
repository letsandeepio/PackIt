
using PackIT.Shared.Abstractions.Commands;

namespace PackIT.Application.Commands;

public record class RemovePackingItem(Guid PackingListId, string name) : ICommand;

