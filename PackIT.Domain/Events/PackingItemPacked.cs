using PackIT.Domain.Entities;
using PackIT.Shared.Abstractions.Domain;

namespace PackIT.Domain.Events;

public record PackingItemPacked(PackingList packingList, PackingItem packingItem) : IDomainEvent;