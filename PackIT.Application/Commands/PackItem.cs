using PackIT.Shared.Abstractions.Commands;

namespace PackIT.Application.Commands;

public record class PackItem(Guid PackingListId, string Name) : ICommand;



