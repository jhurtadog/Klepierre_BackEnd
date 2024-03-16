import Communications from "../models/Communications.js"
const populateUpdatedBy = { path: 'updatedBy', select: 'nombre' };
const populateCreatorBy = { path: 'creatorBy', select: 'nombre' };
const populateUser = {
    path: 'generationFiles.items',
    populate: {
        path: 'user',
        select: 'nombre',
    }
};

const getCommunications = async (req, res, next) => {
    const communications = await Communications.find().populate(populateUpdatedBy).populate(populateCreatorBy).populate(populateUser);
    res.status(200).json(communications);
};

const getCommunicationsByReference = async (req, res, next) => {
    const { id } = req.params;
    var query = { reference: new RegExp('^' + id) };
    const communications = await Communications.find(query, { reference: 1, local: 2, center: 3, communicationType: 4 });
    res.status(200).json(communications);
};

const getCommunicationsMainList = async (req, res, next) => {
    const communications = await Communications.find({}, {
        reference: 1, local: 2, center: 3, communicationType: 4,
        communicationStatus: 5, createdAt: 6, updatedAt: 7, buildingName: 8, centerName: 9, 'contract.destiny.label': 10,
        'contract.duration.signatureDate': 11
    }).populate(populateCreatorBy);
    res.status(200).json(communications);
};

const getContractsMainList = async (req, res, next) => {
    const communications = await Communications.find({ communicationType: { "$gte": 1, "$lte": 3 }, communicationStatus: 1 }, {
        reference: 1, local: 2, societyName: 3, communicationType: 4,
        communicationStatus: 5, buildingName: 6, centerName: 7, 'generationFiles.lastContract': 8, 'generationFiles.lastDateContract': 9,
        'generationFiles.lastAnnex': 10, 'generationFiles.lastDateAnnex': 11,
    });
    res.status(200).json(communications);
};

const getRegisterData = async (req, res, next) => {
    const { id } = req.params;
    var query = { 'lessee.documentNumber': new RegExp('^' + id) };
    const communications = await Communications.find(query, { 'lessee.documentNumber': 1, 'lessee.society.registryData': 2, 'lessee.signatoryPower': 3 });
    res.status(200).json(communications);
};

const newCommunication = async (req, res, next) => {
    const communication = new Communications(req.body);
    communication.creatorBy = req.usuario._id;
    communication.updatedBy = req.usuario._id;

    try {
        const communicationSaving = await communication.save();
        res.json(communicationSaving);
    } catch (error) {
        return next({ code: 400, message: error.message });
    }
};

const getCommunication = async (req, res) => {
    const { id } = req.params;

    const communication = await Communications.findById(id).populate(populateUpdatedBy).populate(populateCreatorBy).populate(populateUser);

    if (!communication) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: error.message });
    }

    res.json(communication);
};

const deleteCommunication = async (req, res) => {
    const { id } = req.params;

    const communication = await Communications.findById(id);

    if (!communication) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: error.message });
    }

    try {
        await communication.deleteOne();
        res.json({ msg: "Communication Eliminado" });
    } catch (error) {
        console.log(error);
    }
};

const updateCommunication = async (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };
    const update = req.body;
    update.updatedBy = req.usuario._id;

    const communication = await Communications.findById(id);

    if (!communication) {
        const error = new Error("No Encontrado");
        return res.status(404).json({ msg: error.message });
    };

    try {
        const communicationSaving = await Communications.findOneAndUpdate(filter, update);
        res.json(communicationSaving);
    } catch (error) {
        console.log(error);
    }
};

export {
    getCommunications,
    getCommunication,
    getCommunicationsMainList,
    getCommunicationsByReference,
    getContractsMainList,
    getRegisterData,
    newCommunication,
    updateCommunication,
    deleteCommunication
};
