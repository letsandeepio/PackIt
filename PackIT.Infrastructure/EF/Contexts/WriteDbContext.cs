﻿using Microsoft.EntityFrameworkCore;
using PackIT.Domain;
using PackIT.Domain.Entities;

namespace PackIT.Infrastructure.EF.Contexts;

internal sealed class WriteDbContext : DbContext
{
  public DbSet<PackingList> PackingLists { get; set; }

  public WriteDbContext(DbContextOptions<WriteDbContext> options) : base(options)
  {
  }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.HasDefaultSchema("packing");

    var configuration = new WriteConfiguration();

    modelBuilder.ApplyConfiguration<PackingList>(configuration);
    modelBuilder.ApplyConfiguration<PackingItem>(configuration);

    base.OnModelCreating(modelBuilder);
  }
}
