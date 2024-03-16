import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import v1WorkoutRouter from "./routes/workoutRoutes.js";
import v1communicationRoutes from "./routes/communicationRoutes.js";
import v1signatureRoutes from "./routes/signatureRoutes.js";
import createError from "http-errors";
import errorHandler from "./middleware/checkError.js";

dotenv.config();

conectarDB();

const configuracionApi = (app) => {
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
    })
  );
};

const configuracionRouter = (app) => {
  app.use("/api/usuarios", usuarioRoutes);
  app.use("/api/v1/or", v1WorkoutRouter);
  app.use("/api/v1/communications", v1communicationRoutes);
  app.use("/api/v1/signatures", v1signatureRoutes);
  app.use(function (req, res, next) {
    next(createError(404));
  });
  app.use(errorHandler);
};

const init = () => {
  const app = express();
  configuracionApi(app);
  configuracionRouter(app);
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
};

init();
