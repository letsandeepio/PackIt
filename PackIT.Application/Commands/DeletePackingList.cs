using PackIT.Shared.Abstractions.Commands;

namespace PackIT.Application.Commands;

public record class DeletePackingList(Guid Id) : ICommand;



