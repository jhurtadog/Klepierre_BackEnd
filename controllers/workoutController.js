import workoutService from "../services/workoutService.js";

const getAllBuildings = (req, res) => {
  try {
    const allBuildings = workoutService.getAllBuildings();
    res.send({ status: "OK", data: allBuildings });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getBuildingName = (req, res) => {
  const {
    params: { galleryId, societyId, buildingId },
  } = req;
  try {
    const buildingName = workoutService.getBuildingName(galleryId, societyId, buildingId);
    res.send({ status: "OK", data: buildingName });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllBonifications = (req, res) => {
  try {
    const allBonifications = workoutService.getAllBonifications();
    res.send({ status: "OK", data: allBonifications });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getBonificationsByCenterSocietyLastContractId = (req, res) => {
  const {
    params: { centerId, societyId, lastContractId },
  } = req;
  try {
    const bonificationsByCenterSocietyLastContractId = workoutService.getBonificationsByCenterSocietyLastContractId(centerId, societyId, lastContractId);
    res.send({ status: "OK", data: bonificationsByCenterSocietyLastContractId });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllLastContracts = (req, res) => {
  try {
    const allLastContracts = workoutService.getAllLastContracts();
    res.send({ status: "OK", data: allLastContracts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllLocalsAssociated = (req, res) => {
  try {
    const allLocalsAssociated = workoutService.getAllLocalsAssociated();
    res.send({ status: "OK", data: allLocalsAssociated });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllCentersContract = (req, res) => {
  try {
    const allCentersContract = workoutService.getAllCentersContract();
    res.send({ status: "OK", data: allCentersContract });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllLocals = (req, res) => {
  try {
    const allLocals = workoutService.getAllLocals();
    res.send({ status: "OK", data: allLocals });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllSocieties = (req, res) => {
  try {
    const allSocieties = workoutService.getAllSocieties();
    res.send({ status: "OK", data: allSocieties });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllLessees = (req, res) => {
  try {
    const allLessees = workoutService.getAllLessees();
    res.send({ status: "OK", data: allLessees });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllLesseeDebts = (req, res) => {
  try {
    const allLesseeDebts = workoutService.getAllLesseeDebts();
    res.send({ status: "OK", data: allLesseeDebts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllSigners = (req, res) => {
  try {
    const allSigners = workoutService.getAllSigners();
    res.send({ status: "OK", data: allSigners });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllStates = (req, res) => {
  try {
    const allStates = workoutService.getAllStates();
    res.send({ status: "OK", data: allStates });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllLabels = (req, res) => {
  try {
    const allLabels = workoutService.getAllLabels();
    res.send({ status: "OK", data: allLabels });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllLesseeGroups = (req, res) => {
  try {
    const allLesseeGroups = workoutService.getAllLesseeGroups();
    res.send({ status: "OK", data: allLesseeGroups });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllActivities = (req, res) => {
  try {
    const allActivities = workoutService.getAllActivities();
    res.send({ status: "OK", data: allActivities });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllContractDebts = (req, res) => {
  try {
    const allContractDebts = workoutService.getAllContractDebts();
    res.send({ status: "OK", data: allContractDebts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getBalanceContract = (req, res) => {
  const {
    params: { idSociety, idGallery, idContract },
  } = req;
  try {
    const allBalanceContract = workoutService.getBalanceContract(idSociety, idGallery, idContract);
    res.send({ status: "OK", data: allBalanceContract });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getUMODLocalsAssociated = (req, res) => {
  const {
    params: { idGallery, idSociety, idContract },
  } = req;
  try {
    const allUMODLocalsAssociated = workoutService.getUMODLocalsAssociated(idGallery, idSociety, idContract);
    res.send({ status: "OK", data: allUMODLocalsAssociated });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getSignerByID = (req, res) => {
  const {
    params: { representanteId },
  } = req;
  try {
    const signerByID = workoutService.getSignerByID(representanteId);
    res.send({ status: "OK", data: signerByID });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getLesseeByID = (req, res) => {
  const {
    params: { lesseeId },
  } = req;
  try {
    const lesseeByID = workoutService.getLesseeByID(lesseeId);
    res.send({ status: "OK", data: lesseeByID });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getLesseeDebtsByID = (req, res) => {
  const {
    params: { lesseeId },
  } = req;
  try {
    const lesseeDebtsByID = workoutService.getLesseeDebtsByID(lesseeId);
    res.send({ status: "OK", data: lesseeDebtsByID });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getLastContractsByCenterLocalId = (req, res) => {
  const {
    params: { localN, centerId },
  } = req;
  try {
    const lastContractsByCenterLocalId = workoutService.getLastContractsByCenterLocalId(localN, centerId);
    res.send({ status: "OK", data: lastContractsByCenterLocalId });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getLastContractByCenterLocalId = (req, res) => {
  const {
    params: { centerId, localId, lastContractNumber },
  } = req;
  try {
    const lastContractByCenterLocalId = workoutService.getLastContractByCenterLocalId(centerId, localId, lastContractNumber);
    res.send({ status: "OK", data: lastContractByCenterLocalId });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllLocalsByGaleriaId = (req, res) => {
  const {
    params: { centerId },
  } = req;
  try {
    const localsByGaleriaId = workoutService.getAllLocalsByGaleriaId(centerId);
    res.send({ status: "OK", data: localsByGaleriaId });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllStatesByProvinciaId = (req, res) => {
  const {
    params: { provinciaId },
  } = req;
  try {
    const statesByProvinciaId = workoutService.getAllStatesByProvinciaId(provinciaId);
    res.send({ status: "OK", data: statesByProvinciaId });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export default {
  getAllBuildings,
  getBuildingName,
  getAllBonifications,
  getBonificationsByCenterSocietyLastContractId,
  getAllLastContracts,
  getLastContractsByCenterLocalId,
  getLastContractByCenterLocalId,
  getAllCentersContract,
  getAllLocalsAssociated,
  getUMODLocalsAssociated,
  getAllSocieties,
  getAllLocals,
  getAllLocalsByGaleriaId,
  getAllLessees,
  getAllLesseeDebts,
  getLesseeDebtsByID,
  getAllContractDebts,
  getBalanceContract,
  getLesseeByID,
  getAllSigners,
  getSignerByID,
  getAllStates,
  getAllStatesByProvinciaId,
  getAllLabels,
  getAllLesseeGroups,
  getAllActivities,
};
