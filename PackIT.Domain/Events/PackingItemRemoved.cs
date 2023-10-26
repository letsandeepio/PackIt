﻿using PackIT.Domain.Entities;
using PackIT.Shared.Abstractions.Domain;

namespace PackIT.Domain.Events;

public record PackingItemRemoved(PackingList packingList, PackingItem packingItem) : IDomainEvent;

