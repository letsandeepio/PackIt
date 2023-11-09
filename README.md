## How to Run Migrations

1. `cd PackIT.Infrastructure`
2. `dotnet ef migrations add Init_Read --context ReadDbContext --startup-project ../PackIT.Api -o EF/Migrations`
