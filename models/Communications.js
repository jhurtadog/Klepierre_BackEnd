import mongoose from "mongoose";
const communicationsSchema = mongoose.Schema(
    {
        reference: {
            type: String,
            trim: true,
            required: true,
        },
        communicationType: {
            type: Number,
            trim: true,
            required: true,
        },
        communicationStatus: {
            type: Number,
            trim: true,
            required: true,
        },
        center: {
            type: String,
            trim: true,
        },
        centerName: {
            type: String,
            trim: true,
        },
        local: {
            type: String,
            trim: true,
        },
        selectedLocal: {
            type: Array,
        },
        buildingName: {
            type: String,
            uppercase: true,
            trim: true,
        },
        floor: {
            type: String,
            trim: true,
        },
        area: {
            type: String,
            trim: true,
        },
        societyId: {
            type: String,
            trim: true,
        },
        societyName: {
            type: String,
            trim: true,
        },
        remarks: {
            type: String,
            trim: true,
        },
        deleted: {
            type: Boolean,
            default: false,
        },
        original: {
            type: Boolean,
            default: false,
        },
        history: {
            type: String,
            trim: true,
        },
        modificationNumber: {
            type: Number,
            default: 0
        },
        originalCommunicationId: {
            type: Number,
            default: 0
        },
        parentCommunicationId: {
            type: Number,
            default: 0
        },
        generationFiles: {
            lastContract: {
                type: String,
                trim: true,
            },
            lastDateContract: {
                type: Date,
            },
            lastAnnex: {
                type: String,
                trim: true,
            },
            lastDateAnnex: {
                type: Date,
            },
            items: [{
                id: {
                    type: Number,
                },
                fileName: {
                    type: String,
                    trim: true,
                },
                model: {
                    type: String,
                    trim: true,
                },
                version: {
                    type: Number,
                    default: 0
                },
                date: {
                    type: Date,
                },
                url: {
                    type: String,
                    trim: true,
                },
                type: {
                    type: Number,
                },
                deleted: {
                    type: Boolean,
                    default: false,
                },
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Usuario",
                },
            }],
        },
        contact: {
            name: {
                type: String,
                trim: true,
            },
            address: {
                type: String,
                trim: true,
            },
            phone: {
                type: String,
                trim: true,
            },
            zipcode: {
                type: String,
                trim: true,
            },
            town: {
                type: String,
                trim: true,
            },
            state: {
                type: String,
                trim: true,
            },
        },
        lastContract: {
            id: {
                type: String,
                trim: true,
            },
            societyNumber: {
                type: String,
                trim: true,
            },
            societyName: {
                type: String,
                trim: true,
            },
            signDate: {
                type: Date,
            },
            endDate: {
                type: Date,
            },
            rentVar: {
                type: Number,
            },
            label: {
                type: String,
                trim: true,
            },
            activity: {
                type: String,
                trim: true,
            },
            group: {
                type: String,
                trim: true,
            },
            bond: {
                type: String,
                trim: true,
            },
            additionalGuarantee: {
                type: String,
                trim: true,
            },
            endorsementAmount: {
                type: String,
                trim: true,
            },
            endorsementDueDate: {
                type: Date,
            },
            geoAmount: {
                type: String,
                trim: true,
            },
            guaranteedMinimumIncome: {
                type: String,
                trim: true,
            },
            extension: {
                type: String,
                trim: true,
            },
            communityFees: {
                type: String,
                trim: true,
            },
            communityFeesRatio: {
                type: String,
                trim: true,
            },
            settlementDate: {
                type: Date,
            },
            endDateRemarks: {
                type: String,
                trim: true,
            },
            percentageOfEquity: {
                type: String,
                trim: true,
            },
            cancellationDate: {
                type: Date,
            },
        },
        lessee: {
            suspensiveCondition: {
                type: Boolean,
            },
            societyType: {
                type: String,
                trim: true,
            },
            peopleType: {
                type: String,
                trim: true,
            },
            documentNumber: {
                type: String,
                trim: true,
            },
            lesseeChangesText: {
                type: String,
                trim: true,
            },
            modifyLesseeChanges: {
                type: Boolean,
                default: false
            },
            subrogationDate: {
                type: Date,
            },
            society: {
                documentNumber: {
                    type: String,
                    trim: true,
                },
                businessName: {
                    type: String,
                    trim: true,
                },
                phone: {
                    type: String,
                    trim: true,
                },
                domicile: {
                    address: {
                        type: String,
                        trim: true,
                    },
                    state: {
                        type: String,
                        trim: true,
                    },
                    town: {
                        type: String,
                        trim: true,
                    },
                    zipCode: {
                        type: String,
                        trim: true,
                    },
                },
                registryData: {
                    book: {
                        type: String,
                        trim: true,
                    },
                    folio: {
                        type: String,
                        trim: true,
                    },
                    inscription: {
                        type: String,
                        trim: true,
                    },
                    section: {
                        type: String,
                        trim: true,
                    },
                    sheet: {
                        type: String,
                        trim: true,
                    },
                    site: {
                        type: String,
                        trim: true,
                    },
                    volume: {
                        type: String,
                        trim: true,
                    },
                },
            },
            cession: {
                clause: {
                    type: Boolean,
                    default: false
                },
                cessionType: {
                    type: String,
                    trim: true,
                },
                businessName: {
                    type: String,
                    trim: true,
                }
            },
            bankAddress: {
                iban: {
                    type: String,
                    trim: true,
                },
                swiftBic: {
                    type: String,
                    trim: true,
                },
            },
            notification: {
                email: {
                    type: String,
                    trim: true,
                },
                domicile: {
                    address: {
                        type: String,
                        trim: true,
                    },
                    state: {
                        type: String,
                        trim: true,
                    },
                    town: {
                        type: String,
                        trim: true,
                    },
                    zipCode: {
                        type: String,
                        trim: true,
                    },
                },
            },
            signatoryPower: {
                date: {
                    type: Date,
                },
                protocol: {
                    type: String,
                    trim: true,
                },
                notary: {
                    type: String,
                    trim: true,
                },
                site: {
                    type: String,
                    trim: true,
                },
            },
            signerGESAL: {
                documentNumber: {
                    type: String,
                    trim: true,
                },
                documentType: {
                    type: String,
                    trim: true,
                },
                name: {
                    type: String,
                    trim: true,
                },
                phone: {
                    type: String,
                    trim: true,
                },
                domicile: {
                    address: {
                        type: String,
                        trim: true,
                    },
                    state: {
                        type: String,
                        trim: true,
                    },
                    town: {
                        type: String,
                        trim: true,
                    },
                    zipCode: {
                        type: String,
                        trim: true,
                    },
                },
            },
            signerExtra: [
                {
                    documentNumber: {
                        type: String,
                        trim: true,
                    },
                    documentType: {
                        type: String,
                        trim: true,
                    },
                    name: {
                        type: String,
                        trim: true,
                    },
                    phone: {
                        type: String,
                        trim: true,
                    },
                    domicile: {
                        address: {
                            type: String,
                            trim: true,
                        },
                        state: {
                            type: String,
                            trim: true,
                        },
                        town: {
                            type: String,
                            trim: true,
                        },
                        zipCode: {
                            type: String,
                            trim: true,
                        },
                    },
                }
            ],
        },
        contract: {
            complementary_agreement_start_date: {
                type: Date,
            },
            modifyContractChanges: {
                type: Boolean,
                default: false
            },
            contractLabel: {
                type: String,
                trim: true,
            },
            contractChangesText: {
                type: String,
                trim: true,
            },
            contractCAgreementChangesText: {
                type: String,
                trim: true,
            },
            otherData: {
                minorWorks: {
                    type: Boolean,
                    default: false
                },
                months: {
                    type: Number,
                    default: 0
                },
                days: {
                    type: Number,
                    default: 0
                },
                entranceFee: {
                    type: Number,
                    default: 0
                },
            },
            rentIncrease: {
                date: {
                    type: Date,
                },
                percentage: {
                    type: Number,
                    default: 0
                },
                occupationalCompensation: {
                    type: Number,
                    default: 0
                },
                invoiceIbi: {
                    type: Boolean,
                    default: false
                },
                amountIbi: {
                    type: String,
                    trim: true,
                },
                amountExpensesFees: {
                    type: Number,
                    default: 0
                },
                equitiesType: {
                    type: String,
                    trim: true,
                },
                equities: [],
                equitiesObservations: {
                    type: String,
                    trim: true,
                },
                accrualRent: {
                    accrualTypeId: {
                        type: Number,
                        default: 0
                    },
                    months: {
                        type: Number,
                        default: 0
                    },
                    date: {
                        type: Date,
                    },
                },
                accrualCommunity: {
                    accrualTypeId: {
                        type: Number,
                        default: 0
                    },
                    months: {
                        type: Number,
                        default: 0
                    },
                    date: {
                        type: Date,
                    },
                },
            },
            guarantee: {
                bondMonths: {
                    type: Number,
                    default: 2
                },
                bondAmount: {
                    type: String,
                    trim: true,
                },
                oldBondAmount: {
                    type: Number,
                    default: 0
                },
                bondDifference: {
                    type: Number,
                    default: 0
                },
                bondPaymentType: {
                    type: Number,
                    default: 1
                },
                additionalGuaranteeMonths: {
                    type: Number,
                    default: 0
                },
                additionalGuaranteeAmount: {
                    type: Number,
                    default: 0
                },
                oldAdditionalGuaranteeAmount: {
                    type: Number,
                    default: 0
                },
                additionalGuaranteeDifference: {
                    type: Number,
                    default: 0
                },
                additionalGuaranteePaymentType: {
                    type: Number,
                    default: 1
                },
                geoMonths: {
                    type: Number,
                    default: 0
                },
                geoAmount: {
                    type: Number,
                    default: 0
                },
                ecopMonths: {
                    type: Number,
                    default: 0
                },
                ecopIVANotIncluded: {
                    type: Number,
                    default: 0
                },
                ecopIVAIncluded: {
                    type: Number,
                    default: 0
                },
                totalOutlay: {
                    type: Number,
                    default: 0
                },
                reserveDeposit: {
                    type: Number,
                    default: 0
                },
                totalPaymentOnFirm: {
                    type: Number,
                    default: 0
                },
                endorsementMonths: {
                    type: Number,
                    default: 0
                },
                endorsementAmount: {
                    type: Number,
                    default: 0
                },
            },
            destiny: {
                label: {
                    type: String,
                    trim: true,
                },
                labelId: {
                    type: String,
                    trim: true,
                },
                group: {
                    type: String,
                    trim: true,
                },
                groupId: {
                    type: String,
                    trim: true,
                },
                activity: {
                    type: String,
                    trim: true,
                },
                activityId: {
                    type: String,
                    trim: true,
                },
                destiny: {
                    type: String,
                    trim: true,
                },
                destinationBusinessTypeId: {
                    type: Number,
                },
            },
            economicData: {
                communityExpensesId: {
                    type: Number,
                    default: 0
                },
                communityExpenses: {
                    type: Boolean,
                    default: false
                },
                coefficient: {
                    type: Number,
                    default: 0
                },
                amount: {
                    type: Number,
                    default: 0
                },
                previous: {
                    type: Number,
                    default: 0
                },
                guaranteedMinimumIncome: {
                    proposal: {
                        type: String,
                        trim: true,
                    },
                    previousNetIncome: {
                        type: Number,
                        default: 0
                    },
                    increasedBudget: {
                        type: Number,
                        default: 0
                    },
                    increase: {
                        type: Number,
                        default: 0
                    },
                    budgeted: {
                        type: Number,
                        default: 0
                    },
                    proposedEurom2: {
                        type: Number,
                        default: 0
                    },
                    previousEurom2: {
                        type: Number,
                        default: 0
                    },
                    terraceSurface: {
                        type: Number,
                        default: 0
                    },
                    terraceAmount: {
                        type: Number,
                        default: 0
                    },
                    terraceEurom2: {
                        type: Number,
                        default: 0
                    },
                },
                IpcByIndex: {
                    firstChecking: {
                        type: String,
                        trim: true,
                    },
                    date: {
                        type: Date,
                    },
                },
            },
            duration: {
                localDeliveryDate: {
                    type: Date,
                    default: Date.now
                },
                localOpeningDate: {
                    type: Date,
                    default: Date.now
                },
                compLocalOpeningDate: {
                    nDays: {
                        type: Number,
                        default: 0
                    },
                    nMonths: {
                        type: Number,
                        default: 0
                    },
                    nYears: {
                        type: Number,
                        default: 0
                    },
                },
                signatureDate: {
                    type: Date,
                    default: Date.now
                },
                endDate: {
                    type: Date,
                    default: Date.now
                },
                compEndDate: {
                    nDays: {
                        type: Number,
                        default: 0
                    },
                    nMonths: {
                        type: Number,
                        default: 0
                    },
                    nYears: {
                        type: Number,
                        default: 0
                    },
                },
                extension: [],
                extensionNotice: {
                    forewarningTypeId: {
                        type: Number,
                        default: 0
                    },
                    date: {
                        nYears: {
                            type: Number,
                            default: 0
                        },
                        nMonths: {
                            type: Number,
                            default: 0
                        },
                        nDays: {
                            type: Number,
                            default: 0
                        },
                    },
                },
                ruptureEnabled: {
                    type: Boolean,
                    default: false
                },
                rupture: [],
                ruptureNotice: {
                    forewarningTypeId: {
                        type: Number,
                        default: 2
                    },
                    date: {
                        nYears: {
                            type: Number,
                            default: 0
                        },
                        nMonths: {
                            type: Number,
                            default: 0
                        },
                        nDays: {
                            type: Number,
                            default: 0
                        },
                    }
                },
                workTypeId: {
                    type: Number,
                    default: 3
                },
                workDate: {
                    type: Date,
                },
            },
        },
        bonification: {
            bonificationTypeId: {
                type: Number,
            },
            items: [
                {
                    rentTypeId: {
                        type: Number,
                    },
                    amountOverMonth: {
                        type: Number,
                    },
                    eurosm2: {
                        type: Number,
                    },
                    budget: {
                        type: Boolean,
                    },
                    reason: {
                        type: String,
                        trim: true,
                    },
                    year: {
                        type: Number,
                    },
                    startDate: {
                        type: Date,
                    },
                    endDate: {
                        type: Date,
                    }
                }
            ],
        },
        bonus: {
            items: [
                {
                    rentTypeId: {
                        type: Number,
                    },
                    amountOverMonth: {
                        type: Number,
                    },
                    eurosm2: {
                        type: Number,
                    },
                    budget: {
                        type: Boolean,
                    },
                    reason: {
                        type: String,
                        trim: true,
                    },
                    year: {
                        type: Number,
                    },
                    startDate: {
                        type: Date,
                    },
                    endDate: {
                        type: Date,
                    }
                }
            ],
            rentTypeId: {
                type: Number,
            },
            bonificationAmount: {
                type: Number,
            },
            amountOverMonth: {
                type: Number,
            },
            amountOverMonthEurosm2: {
                type: Number,
            },
            startDate: {
                type: Date,
            },
            endDate: {
                type: Date,
            },
            budget: {
                type: Boolean,
            },
            budgetAmount: {
                type: Number,
            },
            renewal: {
                type: String,
                trim: true,
            },
            contractalIncome: {
                type: Number,
            },
            contractalIncomeEurosm2: {
                type: Number,
            },
            billedIncome: {
                type: Number,
            },
            billedIncomeEurosm2: {
                type: Number,
            },
            bonusIncome: {
                type: Number,
            },
            bonusIncomeEurosm2: {
                type: Number,
            },
            reason: {
                type: String,
                trim: true,
            },
        },
        debt: {
            nif: {
                type: String,
                trim: true,
            },
            currentContractDebt: {
                type: Number,
            },
            totalDebtMinusGuarantees: {
                type: Number,
            },
            societyLesseeDebt: [],
            totalSocietyLesseeDebt: {
                type: Number,
            },
            rescission: {
                rescissionDate: {
                    type: Date,
                },
                compensatedId: {
                    type: Number,
                },
                handoverOf: {
                    type: Array,
                },
                reason: {
                    type: String,
                    trim: true,
                },
            },
        },
        creatorBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
        },
    },
    {
        timestamps: true,
    }
);

const Communications = mongoose.model("Communications", communicationsSchema);
export default Communications;
