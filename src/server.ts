import { serve } from '@hono/node-server';
import app from './app/index';

serve(app, (info) => {
  console.log(`Server running at http://localhost:${info.port}`);
});