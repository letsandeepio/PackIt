﻿using PackIT.Domain.Exceptions;

namespace PackIT.Domain;

public record PackingItem
{
  public string Name { get; }
  public uint Quantity { get; }
  public bool IsPacked { get; set; }

  public PackingItem(string name, uint quantity, bool isPacked = false)
  {
    if (string.IsNullOrWhiteSpace(name))
    {
      throw new EmptyPackingListItemNameException();
    }

    Name = name;
    Quantity = quantity;
    IsPacked = isPacked;
  }
}
