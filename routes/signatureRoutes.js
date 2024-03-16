import express from "express";
import { getSignatures, editSignature } from "../controllers/signatureController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
    .route("/")
    .get(getSignatures)

router
    .route("/:id")
    .put(checkAuth, editSignature);

export default router;