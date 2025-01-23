FROM node:20-alpine AS build

WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build

FROM node:20-alpine AS prod

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY ./package*.json ./
COPY ./prisma ./prisma
RUN npm ci --only=production

EXPOSE 9002

CMD ["npm", "run", "start:prod"]