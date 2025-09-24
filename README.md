📦 Project Dependencies
🔧 Core Dependencies

npm install express cors dotenv helmet morgan
| Package | Description |
| -------------- | -------------------------------------------------- |
| ⚡ **express** | Fast, unopinionated web framework for Node.js |
| 🔄 **cors** | Middleware to enable Cross-Origin Resource Sharing |
| 🔐 **dotenv** | Loads environment variables from `.env` file |
| 🛡️ **helmet** | Secures Express apps by setting HTTP headers |
| 📜 **morgan** | HTTP request logger middleware |

🛠️ Development Dependencies
npm install -D typescript ts-node @types/node @types/express @types/cors @types/morgan nodemon eslint @eslint/config@latest

| Package                       | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| 📝 **typescript**             | TypeScript compiler for static typing           |
| ▶️ **ts-node**                | Run TypeScript files directly without compiling |
| 🧩 **@types/node**            | Type definitions for Node.js                    |
| 🧩 **@types/express**         | Type definitions for Express                    |
| 🧩 **@types/cors**            | Type definitions for CORS                       |
| 🧩 **@types/morgan**          | Type definitions for Morgan                     |
| 🔄 **nodemon**                | Automatically restarts server on code changes   |
| 🧹 **eslint**                 | Linter for identifying and fixing code issues   |
| ⚙️ **@eslint/config\@latest** | Latest ESLint configuration helper              |

✨ With this setup:
Use npm run dev for development (with nodemon + tsx)
Use npm run build && npm start for production

💁🏻 Eslint
npx eslint
npx eslint . --ext .js,.ts

🚀 Prettier
npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
@setting in vs workspace.
{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
}

🎲 Set up Prisma ORM
npm install prisma --save-dev // install prisma on existing project
npx prisma //invoke prisma cli
npx prisma init //setup provider
