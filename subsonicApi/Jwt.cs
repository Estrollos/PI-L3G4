using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace subsonicApi
{
    public class Jwt
    {
        private readonly IConfiguration _configuration;

        public Jwt(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string CreateAccessToken(ClientDTO client)
        {
            var jwt = _configuration.GetSection("jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt["Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new (JwtRegisteredClaimNames.Sub, client.Id.ToString()),
                new (JwtRegisteredClaimNames.Email, client.Email),
                new (ClaimTypes.Name, client.Nombre),
                new (ClaimTypes.Role, client.Rol.ToString())
            };

            var token = new JwtSecurityToken(
                issuer: jwt["Issuer"],
                audience: jwt["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddDays(90),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}