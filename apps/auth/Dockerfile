# Dockerfile
FROM --platform=$BUILDPLATFORM node:18

WORKDIR /app

COPY . .

RUN npm install

# Expose cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Lệnh để chạy ứng dụng
CMD ["npm", "start"]
