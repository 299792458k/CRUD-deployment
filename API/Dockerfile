# =====================
# Stage 1: Build
# =====================
# Dùng image có .NET SDK để compile code
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Đặt thư mục làm việc bên trong container
WORKDIR /src

# Copy file project trước để tận dụng Docker layer cache
# (chỉ restore lại khi .csproj thay đổi, không phải mỗi lần build)
COPY API.csproj .
RUN dotnet restore

# Copy toàn bộ source code
COPY . .

# Compile và publish ra thư mục /app/publish
# Chỉ định API.csproj để tránh dotnet pick up API.sln file
RUN dotnet publish API.csproj -c Release -o /app/publish

# =====================
# Stage 2: Runtime
# =====================
# Dùng image nhỏ hơn, chỉ có ASP.NET runtime (không có SDK)
# Giúp image cuối nhỏ hơn ~3x so với dùng sdk image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app

# Copy output từ stage build vào stage runtime
COPY --from=build /app/publish .

# .NET 8 mặc định lắng nghe port 8080 (không phải 5000)
EXPOSE 8080

# Lệnh khởi động ứng dụng
ENTRYPOINT ["dotnet", "API.dll"]
