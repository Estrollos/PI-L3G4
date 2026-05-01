# ---------- Build stage ----------
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

# Copy csproj and restore
COPY ["subsonicApi/subsonicApi.csproj", "subsonicApi/"]
RUN dotnet restore "subsonicApi/subsonicApi.csproj"

# Copy everything
COPY . .
WORKDIR "/src/subsonicApi"

RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# ---------- Runtime stage ----------
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "subsonicApi.dll"]