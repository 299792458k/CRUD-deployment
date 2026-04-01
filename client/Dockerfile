# =====================
# Stage 1: Build
# =====================
# Dùng Node image nhỏ với Alpine Linux
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build React app (kết quả trong thư mục dist/)
RUN npm run build

# =====================
# Stage 2: Serve
# =====================
# Dùng Nginx để serve static files (nhỏ gọn, nhanh)
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy dist/ từ build stage vào thư mục serve của Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx mặc định chạy port 80
EXPOSE 80

# Nginx tự động start khi container khởi động
CMD ["nginx", "-g", "daemon off;"]
