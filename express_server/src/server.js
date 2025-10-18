import express from 'express';

//* server instance
const app = express();

//* port configuration
const PORT = 8080;

//* importing routes
import userRoutes from './routes/users.route.js';

//* using routes
app.use('/api/users', userRoutes);


// *using express json middlewares
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

