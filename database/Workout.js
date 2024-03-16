import Buildings from "./SAP_EDIFICIOS.json" assert { type: "json" };
import Societies from "./SAP_SOCIEDADES.json" assert { type: "json" };
import Lessees from "./7.1.2.json" assert { type: "json" };
import Locals from "./5.1.2.json" assert { type: "json" };
import LocalsAssociated from "./5.1.3.json" assert { type: "json" }; 
import Signers from "./5.1.8.json" assert { type: "json" };
import States from "./5.1.6.json" assert { type: "json" };
import Labels from "./5.1.4.json" assert { type: "json" };
import LesseeDebts from "./5.1.14.json" assert { type: "json" };
import LesseeGroups from "./4.json" assert { type: "json" };
import Activities from "./3.json" assert { type: "json" };
import ContractDebts from "./5.1.11.json" assert { type: "json" };
import CentersContract from "./2.2.json" assert { type: "json" };
import LastContracts from "./5.1.5.json" assert { type: "json" };
import Bonifications from "./5.1.9.json" assert { type: "json" };

const getAllBuildings = () => {
  try {
    return Buildings.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getBuildingName = (galleryId, societyId, buildingId) => {
  try {
    const building = Buildings.data.find((building) => building.GALERIA === galleryId && building.SOCIEDAD === societyId && building.EDIFICIO === buildingId);
    if (!building) {
      throw {
        status: 400,
        message: `Can't find building with the galleryId:'${galleryId}', societyId:'${societyId}', buildingId:'${buildingId}' `,
      };
    }
    return building;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getAllBonifications = () => {
  try {
    return Bonifications.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getBonificationsByCenterSocietyLastContractId = (centerId, societyId, lastContractId) => {
  try {
    const bonifications = Bonifications.data.filter((item) => item.GALERIA === centerId && item.SOCIEDAD === societyId && item.CONTRATO === lastContractId);
    if (!bonifications) {
      throw {
        status: 400,
        message: `Can't find Bonifications with the id '${centerId}'`,
      };
    }
    return bonifications;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getAllLastContracts = () => {
  try {
    return LastContracts.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllCentersContract = () => {
  try {
    return CentersContract.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllLocalsAssociated = () => {
  try {
    return LocalsAssociated.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllSocieties = () => {
  try {
    return Societies.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllLesseeDebts = () => {
  try {
    return LesseeDebts.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllLessees = () => {
  try {
    return Lessees.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllLocals = () => {
  try {
    return Locals.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllSigners = () => {
  try {
    return Signers.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllStates = () => {
  try {
    return States.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllLabels = () => {
  try {
    return Labels.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllLesseeGroups = () => {
  try {
    return LesseeGroups.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllActivities = () => {
  try {
    return Activities.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getAllContractDebts = () => {
  try {
    return ContractDebts.data;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getBalanceContract = (idSociety, idGallery, idContract) => {
  try {
    const items = ContractDebts.data.filter((item) => item.SOCIEDAD === idSociety && item.GALERIA === idGallery && item.CONTRATO === idContract);
    if (!items) {
      throw {
        status: 400,
        message: `Can't find Balance Contract with the id '${idGallery}'`,
      };
    }
    return items;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getUMODLocalsAssociated = (idGallery, idSociety, idContract) => {
  try {
    const items = LocalsAssociated.data.filter((item) => item.SOCIEDAD === idSociety && item.GALERIA === idGallery && item.CONTRATO === idContract);
    if (!items) {
      throw {
        status: 400,
        message: `Can't find UMOD Locals Associated with the id '${idGallery}'`,
      };
    }
    return items;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getSignerByID = (representanteId) => {
  try {
    const signer = Signers.data.find((signer) => signer.ID_REPRESENTANTE === representanteId);
    if (!signer) {
      throw {
        status: 400,
        message: `Can't find signer with the id '${representanteId}'`,
      };
    }
    return signer;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getAllLocalsByGaleriaId = (centerId) => {
  try {
    const locals = Locals.data.filter((locals) => locals.GALERIA === centerId);
    if (!locals) {
      throw {
        status: 400,
        message: `Can't find Locals with the id '${centerId}'`,
      };
    }
    return locals;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getLesseeByID = (lesseeId) => {
  try {
    const lessee = Lessees.data.find((lessee) => lessee.ID_ARRENDATARIO === lesseeId);
    if (!lessee) {
      throw {
        status: 400,
        message: `Can't find lesse with the id '${lesseeId}'`,
      };
    }
    return lessee;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getLesseeDebtsByID = (lesseeId) => {
  try {
    const lesseeDebts = LesseeDebts.data.filter((lesseeDebt) => lesseeDebt.ID_ARRENDATARIO === lesseeId);
    if (!lesseeDebts) {
      throw {
        status: 400,
        message: `Can't find lesse debt with the id '${lesseeId}'`,
      };
    }
    return lesseeDebts;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getLastContractsByCenterLocalId = (localN, centerId) => {
  try {
    const lastContract = LastContracts.data.find((item) => item.PRIMER_MODULO === localN && item.GALERIA === centerId);
    if (!lastContract) {
      throw {
        status: 400,
        message: `Can't find last Contract with the id '${localN}'`,
      };
    }
    return lastContract;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getLastContractByCenterLocalId = (centerId, localId, lastContractNumber) => {
  try {
    const lastContract = LastContracts.data.filter((item) => item.GALERIA === centerId && item.PRIMER_MODULO === localId && item.CONTRATO === lastContractNumber);
    if (!lastContract) {
      throw {
        status: 400,
        message: `Can't find last Contract with the id '${centerId}'`,
      };
    }
    return lastContract;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const getAllStatesByProvinciaId = (provinciaId) => {
  try {
    const state = States.data.find((item) => item.PROVINCIA === provinciaId);
    if (!state) {
      throw {
        status: 400,
        message: `Can't find State with the id '${provinciaId}'`,
      };
    }
    return state;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
  getAllContractDebts,
  getLesseeDebtsByID,
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
