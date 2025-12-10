import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vercel requires exporting a handler for serverless functions
export const config = {
  api: {
    bodyParser: true,
  },
};

async function createApp() {
  const app = express();
  
  // Serve static files from dist/public in production
  // Adjust path for Vercel deployment
  const staticPath =
    process.env.NOW_REGION || process.env.VERCEL_ENV
      ? path.join(__dirname, "public")  // Vercel deployment path
      : process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  return app;
}

// For Vercel serverless deployment
export default async function handler(req: express.Request, res: express.Response) {
  const app = await createApp();
  return app(req, res);
}

// For local development
if (process.env.NODE_ENV !== "production" && !process.env.NOW_REGION && !process.env.VERCEL_ENV) {
  createApp().then(app => {
    const server = createServer(app);
    const port = process.env.PORT || 3000;
    
    server.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
    });
  });
}