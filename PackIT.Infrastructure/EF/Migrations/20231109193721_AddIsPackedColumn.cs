using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PackIT.Infrastructure.EF.Migrations
{
    /// <inheritdoc />
    public partial class AddIsPackedColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "isPacked",
                schema: "packing",
                table: "PackingItems",
                newName: "IsPacked");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsPacked",
                schema: "packing",
                table: "PackingItems",
                newName: "isPacked");
        }
    }
}
