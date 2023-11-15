using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using PackIT.Shared.Abstractions.Exceptions;

namespace PackIT.Shared;

internal sealed class ExceptionMiddleware : IMiddleware
{
  public async Task InvokeAsync(HttpContext context, RequestDelegate next)
  {
    try
    {
      await next(context);
    }
    catch (PackItException ex)
    {
      context.Response.StatusCode = 400;
      context.Response.Headers.Add("content-type", "application/json");

      var errorCode = ToSnakeCase(ex.GetType().Name.Replace("Exception", string.Empty));

      var json = JsonSerializer.Serialize(new { ErrorCode = errorCode, ex.Message });

      await context.Response.WriteAsync(json);
    }
  }

  public static string ToSnakeCase(string str)
  {
    if (string.IsNullOrEmpty(str))
    {
      return str;
    }

    var stringBuilder = new StringBuilder();
    var previousCharWasUpper = false;

    foreach (var currentChar in str)
    {
      if (char.IsUpper(currentChar))
      {
        if (stringBuilder.Length > 0 && !previousCharWasUpper)
        {
          stringBuilder.Append('_');
        }

        stringBuilder.Append(char.ToLower(currentChar));
        previousCharWasUpper = true;
      }
      else
      {
        stringBuilder.Append(currentChar);
        previousCharWasUpper = false;
      }
    }

    return stringBuilder.ToString();
  }
}
