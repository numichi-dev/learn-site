FROM node:22.1
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run docs:build

FROM nginx:stable-alpine3.19
COPY --from=0 /app/.vitepress/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
