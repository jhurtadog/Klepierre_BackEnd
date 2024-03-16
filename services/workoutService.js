import Workout from "../database/Workout.js";

const getAllBuildings = () => {
  try {
    const allBuildings = Workout.getAllBuildings();
    return allBuildings;
  } catch (error) {
    throw error;
  }
};

const getBuildingName = (galleryId, societyId, buildingId) => {
  try {
    const building = Workout.getBuildingName(galleryId, societyId, buildingId);
    return building;
  } catch (error) {
    throw error;
  }
};

const getAllBonifications = () => {
  try {
    const allBonifications = Workout.getAllBonifications();
    return allBonifications;
  } catch (error) {
    throw error;
  }
};

const getAllLastContracts = () => {
  try {
    const allLastContracts = Workout.getAllLastContracts();
    return allLastContracts;
  } catch (error) {
    throw error;
  }
};

const getAllCentersContract = () => {
  try {
    const allCentersContract = Workout.getAllCentersContract();
    return allCentersContract;
  } catch (error) {
    throw error;
  }
};

const getAllLocalsAssociated = () => {
  try {
    const allLocalsAssociated = Workout.getAllLocalsAssociated();
    return allLocalsAssociated;
  } catch (error) {
    throw error;
  }
};

const getAllSocieties = () => {
  try {
    const allSocieties = Workout.getAllSocieties();
    return allSocieties;
  } catch (error) {
    throw error;
  }
};

const getAllLocals = () => {
  try {
    const allLocals = Workout.getAllLocals();
    return allLocals;
  } catch (error) {
    throw error;
  }
};

const getAllLessees = () => {
  try {
    const allLessees = Workout.getAllLessees();
    return allLessees;
  } catch (error) {
    throw error;
  }
};

const getAllLesseeDebts = () => {
  try {
    const allLesseeDebts = Workout.getAllLesseeDebts();
    return allLesseeDebts;
  } catch (error) {
    throw error;
  }
};

const getAllSigners = () => {
  try {
    const allSigner = Workout.getAllSigners();
    return allSigner;
  } catch (error) {
    throw error;
  }
};

const getAllStates = () => {
  try {
    const allStates = Workout.getAllStates();
    return allStates;
  } catch (error) {
    throw error;
  }
};

const getAllLabels = () => {
  try {
    const allLabels = Workout.getAllLabels();
    return allLabels;
  } catch (error) {
    throw error;
  }
};

const getAllLesseeGroups = () => {
  try {
    const allLesseeGroups = Workout.getAllLesseeGroups();
    return allLesseeGroups;
  } catch (error) {
    throw error;
  }
};

const getAllActivities = () => {
  try {
    const allActivities = Workout.getAllActivities();
    return allActivities;
  } catch (error) {
    throw error;
  }
};

const getAllContractDebts = () => {
  try {
    const allContractDebts = Workout.getAllContractDebts();
    return allContractDebts;
  } catch (error) {
    throw error;
  }
};

const getBalanceContract = (idSociety, idGallery, idContract) => {
  try {
    const balanceContract = Workout.getBalanceContract(idSociety, idGallery, idContract);
    return balanceContract;
  } catch (error) {
    throw error;
  }
};

const getUMODLocalsAssociated = (idGallery, idSociety, idContract) => {
  try {
    const UMODLocalsAssociated = Workout.getUMODLocalsAssociated(idGallery, idSociety, idContract);
    return UMODLocalsAssociated;
  } catch (error) {
    throw error;
  }
};

const getSignerByID = (representanteId) => {
  try {
    const signer = Workout.getSignerByID(representanteId);
    return signer;
  } catch (error) {
    throw error;
  }
};

const getLesseeByID = (lesseeId) => {
  try {
    const lessee = Workout.getLesseeByID(lesseeId);
    return lessee;
  } catch (error) {
    throw error;
  }
};

const getLesseeDebtsByID = (lesseeId) => {
  try {
    const lesseeDebts = Workout.getLesseeDebtsByID(lesseeId);
    return lesseeDebts;
  } catch (error) {
    throw error;
  }
};

const getLastContractsByCenterLocalId = (localN, centerId) => {
  try {
    const lastContract = Workout.getLastContractsByCenterLocalId(localN, centerId);
    return lastContract;
  } catch (error) {
    throw error;
  }
};

const getLastContractByCenterLocalId = (centerId, localId, lastContractNumber) => {
  try {
    const lastContract = Workout.getLastContractByCenterLocalId(centerId, localId, lastContractNumber);
    return lastContract;
  } catch (error) {
    throw error;
  }
};

const getBonificationsByCenterSocietyLastContractId = (centerId, societyId, lastContractId) => {
  try {
    const bonifications = Workout.getBonificationsByCenterSocietyLastContractId(centerId, societyId, lastContractId);
    return bonifications;
  } catch (error) {
    throw error;
  }
};

const getAllLocalsByGaleriaId = (centerId) => {
  try {
    const locals = Workout.getAllLocalsByGaleriaId(centerId);
    return locals;
  } catch (error) {
    throw error;
  }
};

const getAllStatesByProvinciaId = (provinciaId) => {
  try {
    const states = Workout.getAllStatesByProvinciaId(provinciaId);
    return states;
  } catch (error) {
    throw error;
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
  getAllLessees,
  getAllLocals,
  getAllLocalsByGaleriaId,
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
