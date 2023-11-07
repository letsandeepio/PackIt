using PackIT.Shared.Abstractions.Commands;

namespace PackIT.Application.Commands;

public record class RemovePackingList(Guid Id) : ICommand;



