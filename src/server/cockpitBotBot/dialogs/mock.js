const incidents = [
    {
        id: "INC6213608",
        priority: "P2",
        state: "New",
        shortDescription: "Les utilisateurs ne reçoivent plus de notifications dans l'application mobile",
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        openedAt: "24/08/2023 At 11:52",
        closedAt: null,
        cmdbCiId: "401f102f1b24e810704d8055464bcbe3"
    },
    {
        id: "INC6213606",
        priority: "P3",
        state: "New",
        shortDescription: "Le serveur semble down, il est inaccessible (SRV001)",
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        openedAt: "24/08/2023 At 10:20",
        closedAt: null,
        cmdbCiId: "14fcc1fe1be424100e2940c1b24bcb6e"
    },
    {
        id: "INC6213607",
        priority: "P4",
        state: "New",
        shortDescription: "Lenteur serveur, le seuil d'usage du CPU est dépassé",
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        openedAt: "24/08/2023 At 12:00",
        closedAt: null,
        cmdbCiId: "36d9013e1b6424100e2940c1b24bcb8e"
    }
];

const lastIncidents = [
    {
        id: "INC6213607",
        priority: "P4",
        state: "New",
        shortDescription: "Lenteur serveur, le seuil d'usage du CPU est dépassé",
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        openedAt: "24/08/2023 At 12:00",
        closedAt: null,
        cmdbCiId: "36d9013e1b6424100e2940c1b24bcb8e"
    },

    {
        id: "INC6213608",
        priority: "P2",
        state: "New",
        shortDescription: "Les utilisateurs ne reçoivent plus de notifications dans l'application mobile",
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        openedAt: "24/08/2023 At 11:52",
        closedAt: null,
        cmdbCiId: "401f102f1b24e810704d8055464bcbe3"
    },
    {
        id: "INC6213606",
        priority: "P3",
        state: "New",
        shortDescription: "Le serveur semble down, il est inaccessible (SRV001)",
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        openedAt: "24/08/2023 At 10:20",
        closedAt: null,
        cmdbCiId: "14fcc1fe1be424100e2940c1b24bcb6e"
    }
];

const changes = [
    {
        id: "CHG0537388",
        type: "Normal",
        state: "Implement",
        openedAt: "24/08/2023 At 14:00",
        closedAt: null,
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        shortDescription: "Déploiement patch sécurité RHEL-Lot 1-S33 sur le server SRV001",
        cmdbCiId: "2371f55187ecb0d0eb9033fd3fbb352d",
        server: "SRV001"
    },
    {
        id: "CHG0537386",
        type: "Normal",
        state: "Closed",
        openedAt: "24/08/2023 At 18:00",
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        shortDescription: "Déploiement patch sécurité RHEL-Lot 1-S33",
        cmdbCiId: "14fcc1fe1be424100e2940c1b24bcb6e",
        server: "SRV001"

    },
    {
        id: "CHG0537387",
        type: "Normal",
        state: "New",
        openedAt: "24/08/2023 At 16:00",
        closedAt: null,
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        shortDescription: "Déploiement patch sécurité RHEL-Lot 1-S33",
        cmdbCiId: "36d9013e1b6424100e2940c1b24bcb8e",
        server: "SRV001"
    }
];

const lastChanges = [
    {
        id: "CHG0537386",
        type: "Normal",
        state: "Closed",
        openedAt: "24/08/2023 At 18:00",
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        shortDescription: "Déploiement patch sécurité RHEL-Lot 1-S33",
        cmdbCiId: "14fcc1fe1be424100e2940c1b24bcb6e",
        server: "SRV001"
    },
    {
        id: "CHG0537387",
        type: "Normal",
        state: "New",
        openedAt: "24/08/2023 At 16:00",
        closedAt: null,
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        shortDescription: "Déploiement patch sécurité RHEL-Lot 1-S33",
        cmdbCiId: "36d9013e1b6424100e2940c1b24bcb8e",
        server: "SRV001"
    },
    {
        id: "CHG0537388",
        type: "Normal",
        state: "Implement",
        openedAt: "24/08/2023 At 14:00",
        closedAt: null,
        group: "bnpp itgp data cockpit",
        service: "AP24563 -- COCKPIT-ITG",
        shortDescription: "Déploiement patch sécurité RHEL-Lot 1-S33",
        cmdbCiId: "2371f55187ecb0d0eb9033fd3fbb352d",
        server: "SRV001"
    }
];

const getIncidentByPriority = (priority) => {
    const result = priority.trim().toLocaleLowerCase();
    return incidents.find(item => item.priority.trim().toLocaleLowerCase() === result);
};

const getChangeById = (id) => {
    const result = id.trim().toLocaleLowerCase();
    return changes.find(item => item.id.trim().toLocaleLowerCase() === result);
};

export const commands = [
    {
        id: "get info \"ap24563\"",
        data: {
            id: "AP24563",
            name: "AP24563 -- COCKPIT-ITG",
            label: "COCKPIT-ITG",
            owner: "Fabrice LE DEIT",
            responsible: "David ELIASZ",
            group: "BNPP_ITGP_DATA_COCKPIT",
            description: "Cockpit is an IT Operations Analytics product offering an interactive data visualisation tool on incidents to facilitate investigations, It is an advanced reporting offering muli dimensional views: Applications, Metiers, Teams, Time."
        },
        type: "application",
        mode: "one"
    },
    {
        id: "get info \"server (SRV001)\"",
        data: {
            id: "SRV001",
            label: "SRV001 -- SERVER-ITG",
            group: "BNPP_ITGP_DATA_COCKPIT",
            processor: "AMD",
            time: "0 Days, 6 Hours and 43 Minutes",
            hostname: "S01123456789",
            provisor: "BP2I",
            infra: "IBM",
            infratype: "DMZR_IAAS_VMW",
            ownertype: "DAT -ITGP",
            code: "AP24563",
            osdomaine: "linux",
            osversion:'7.9',
            operatingsys:"RHEL",
        },
        type: "server",
        mode: "one"
    },
    {
        id: "get inc \"ap24563\"",
        data: incidents,
        type: "incident"
    },
    {
        id: "get inc last \"ap24563\"",
        data: lastIncidents,
        type: "incident",
        mode: "multiple"
    },
    {
        id: "get info \"inc (P2)\"",
        data: getIncidentByPriority("P2"),
        type: "incident",
        mode: "one"
    },
    {
        id: "get info \"inc (P3)\"",
        data: getIncidentByPriority("P3"),
        type: "incident",
        mode: "one"
    },
    {
        id: "get info \"inc (P4)\"",
        data: getIncidentByPriority("P4"),
        type: "incident",
        mode: "one"
    },
    {
        id: "get chg \"ap24563\"",
        data: changes.filter(item => item.state === "Implement"),
        type: "change",
        mode: "multiple"
    },
    {
        id: "get chg last \"ap24563\"",
        data: lastChanges,
        type: "change",
        mode: "multiple"
    },
    {
        id: "get info \"chg (CHG0537386)\"",
        data: getChangeById("CHG0537386"),
        type: "change",
        mode: "one"
    },
    {
        id: "get info \"chg (CHG0537387)\"",
        data: getChangeById("CHG0537387"),
        type: "change",
        mode: "one"

    },
    {
        id: "get info \"chg (CHG0537388)\"",
        data: getChangeById("CHG0537388"),
        type: "change",
        mode: "one"
    }
];
export const getDataByCommandId = (id) => {
    const result = id.trim().toLocaleLowerCase();
    return commands.find(item => item.id.trim().toLocaleLowerCase() === result);
};
