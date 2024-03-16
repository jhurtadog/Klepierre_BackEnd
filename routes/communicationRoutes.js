import express from "express";
import {
    getCommunications, getCommunication, getCommunicationsByReference, getRegisterData, getCommunicationsMainList, getContractsMainList,
    newCommunication, updateCommunication, deleteCommunication
} from "../controllers/communicationController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
    .route("/")
    .get(getCommunications)
    .post(checkAuth, newCommunication);

router
    .route("/list")
    .get(getCommunicationsMainList)

router
    .route("/contract")
    .get(getContractsMainList)

router
    .route("/:id")
    .get(checkAuth, getCommunication)
    .put(checkAuth, updateCommunication)
    .delete(checkAuth, deleteCommunication);

router
    .route("/reference/:id")
    .get(getCommunicationsByReference)

router
    .route("/registredata/:id")
    .get(getRegisterData)

export default router;