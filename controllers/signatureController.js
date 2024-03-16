import Signatures from "../models/Signatures.js";

const getSignatures = async (req, res, next) => {
    const signatures = await Signatures.find()
    res.status(200).json(signatures);
};

const editSignature = async (req, res, next) => {
    const { id } = req.params;
    const signature = await Signatures.findById(id);

    if (!signature) {
        const error = new Error("No encontrado");
        return res.status(404).json({ msg: error.message });
    }

    signature.signerText = req.body.signerText || signature.signerText;

    try {
        const signatureSave = await signature.save();
        res.json(signatureSave);
    } catch (error) {
        return next({ code: 400, message: error.message });
    }
};

export {
    getSignatures,
    editSignature
};
