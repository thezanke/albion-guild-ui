FROM node:12.8 AS builder
WORKDIR /app
COPY package* ./
RUN npm install
COPY tsconfig* ./
COPY src ./src
COPY public ./public
RUN npm run build

FROM nginx:latest
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html