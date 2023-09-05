import {
    CardFactory,
    AttachmentLayoutTypes
} from "botbuilder";

export const textCommands = [
    "get info \"ap24563\"",
    "get inc \"ap24563\"",
    "get inc last \"ap24563\"",
    "get info \"inc (p2)\"",
    "get info \"inc (p3)\"",
    "get info \"inc (p4)\"",
    "get chg \"ap24563\"",
    "get chg last \"ap24563\"",
    "get info \"chg (chg0537386)\"",
    "get info \"chg (chg0537387)\"",
    "get info \"chg (chg0537388)\"",
    "get info \"chg (chg0537388)\"",
    "get info \"server (srv001)\""
];

const getApplication = (data) => {
    return {
        msteams: { width: "Full" },
        type: "AdaptiveCard",
        body: [
            {
                type: "Container",
                items: [
                    {
                        type: "ColumnSet",
                        columns: [
                            {
                                type: "Column",
                                width: "100px",
                                items: [
                                    {
                                        type: "TextBlock",
                                        text: "Label",
                                        wrap: true,
                                        weight: "Bolder"
                                    },
                                    {
                                        type: "TextBlock",
                                        text: "Owner",
                                        wrap: true,
                                        weight: "Bolder"
                                    },
                                    {
                                        type: "TextBlock",
                                        text: "IT Responsible",
                                        wrap: true,
                                        weight: "Bolder"
                                    },
                                    {
                                        type: "TextBlock",
                                        text: "Group",
                                        wrap: true,
                                        weight: "Bolder"
                                    },
                                    {
                                        type: "TextBlock",
                                        text: "Description",
                                        wrap: true,
                                        weight: "Bolder"
                                    }
                                ]
                            },
                            {
                                type: "Column",
                                items: [
                                    {
                                        type: "TextBlock",
                                        text: data.label
                                    },
                                    {
                                        type: "TextBlock",
                                        text: data.owner,
                                        wrap: true
                                    },
                                    {
                                        type: "TextBlock",
                                        text: data.responsible
                                    },
                                    {
                                        type: "TextBlock",
                                        text: data.group,
                                        wrap: true
                                    },
                                    {
                                        type: "TextBlock",
                                        text: data.description,
                                        wrap: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        version: "1.6",
        fallbackText: "This card requires Adaptive Cards v1.5 support to be rendered properly."
    };
};

const getServer = (data) => {
    return {
        msteams: { width: "Full" },
        type: "AdaptiveCard",
        body: [
            {
                type: "Container",
                items: [
                    {
                        type: "FactSet",
                        spacing: "Padding",
                        facts: [
                            {
                                title: "Server Id",
                                value: data.id
                            },
                            {
                                title: "Code AP",
                                value: data.code
                            },
                            {
                                title: "Host Name",
                                value: data.hostname
                            },
                            {
                                title: "Infra",
                                value: data.infra
                            },
                            {
                                title: "Hyper Visor Provider",
                                value: data.provisor
                            },
                            {
                                title: "Processor",
                                value: data.processor
                            },
                            {
                                title: "Owner OU Name",
                                value: data.ownertype
                            },
                            {
                                title: "OS Domaine",
                                value: data.osdomaine
                            },
                            {
                                title: "OS Version",
                                value: data.osversion
                            },
                            {
                                title: "Operating Systeme",
                                value: data.operatingsys
                            },
                            {
                                title: "label",
                                value: data.label
                            },
                            {
                                title: "Group",
                                value: data.group
                            },
                            {
                                title: "Up Time",
                                value: data.time
                            }
                        ]
                    }
                ]
            }
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        version: "1.6",
        fallbackText: "This card requires Adaptive Cards v1.5 support to be rendered properly."
    };
};

const getProiorityImageById = (id) => {
    switch (id) {
        case "P1": {
            return "https://img.icons8.com/?size=2x&id=21181&format=png";
        }
        case "P2": {
            return "https://img.icons8.com/?size=2x&id=21181&format=png";
        }
        case "P3": {
            return "https://img.icons8.com/?size=2x&id=12368&format=png";
        }
        case "P4": {
            return "https://img.icons8.com/?size=2x&id=21193&format=png";
        }

    }
};

const getStateImageById = (id) => {
    switch (id) {
        case "New": {
            return "https://img.icons8.com/?size=2x&id=21517&format=png";
        }
        case "Implement": {
            return "https://img.icons8.com/?size=2x&id=81438&format=png";
        }
        case "Closed": {
            return "https://img.icons8.com/?size=2x&id=38006&format=png";
        }
    }
};

const getIncident = (data, withDetails) => {
    return {
        type: "AdaptiveCard",
        body: [
            {
                type: "Container",
                style: "emphasis",
                items: [
                    {
                        type: "ColumnSet",
                        columns: [
                            {
                                type: "Column",
                                items: [
                                    {
                                        type: "TextBlock",
                                        size: "Default",
                                        weight: "Default",
                                        text: data.openedAt,
                                        style: "default",
                                        wrap: true,
                                        fontType: "Default"
                                    },
                                    {
                                        type: "TextBlock",
                                        size: "Default",
                                        weight: "Bolder",
                                        text: data.id,
                                        style: "default",
                                        wrap: true,
                                        fontType: "Default",
                                        spacing: "Small"
                                    }
                                ],
                                width: "stretch"
                            },
                            {
                                type: "Column",
                                items: [
                                    {
                                        type: "ActionSet",
                                        actions: [
                                            {
                                                iconUrl: getProiorityImageById(data.priority),
                                                type: "Action.Submit",
                                                title: data.priority
                                            }
                                        ],
                                        size: "Stretch"
                                    }
                                ],
                                width: "auto"
                            }
                        ]
                    }
                ],
                bleed: true
            },
            {
                type: "Container",
                items: [
                    {
                        type: "FactSet",
                        spacing: "Padding",
                        facts: withDetails
                            ? [
                                {
                                    title: "Group",
                                    value: data.group
                                },
                                {
                                    title: "Service",
                                    value: data.service
                                },
                                {
                                    title: "Short description",
                                    value: data.shortDescription
                                }
                            ]
                            : [
                                {
                                    title: "Group",
                                    value: data.group
                                },
                                {
                                    title: "Service",
                                    value: data.service
                                }
                            ]
                    }
                ]
            }
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        version: "1.6",
        fallbackText: "This card requires Adaptive Cards v1.5 support to be rendered properly."
    };
};

const getChange = (data, withDetails) => {
    return {
        type: "AdaptiveCard",
        body: [
            {
                type: "Container",
                style: "emphasis",
                items: [
                    {
                        type: "ColumnSet",
                        columns: [
                            {
                                type: "Column",
                                items: [
                                    {
                                        type: "TextBlock",
                                        size: "Default",
                                        weight: "Default",
                                        text: data.openedAt,
                                        style: "default",
                                        wrap: true,
                                        fontType: "Default"
                                    },
                                    {
                                        type: "TextBlock",
                                        size: "Default",
                                        weight: "Bolder",
                                        text: data.id,
                                        style: "default",
                                        wrap: true,
                                        fontType: "Default",
                                        spacing: "Small"
                                    }
                                ],
                                width: "stretch"
                            },
                            {
                                type: "Column",
                                items: [
                                    {
                                        type: "ActionSet",
                                        actions: [
                                            {
                                                iconUrl: getStateImageById(data.state),
                                                type: "Action.Submit",
                                                title: data.state
                                            }
                                        ],
                                        size: "Stretch"
                                    }
                                ],
                                width: "auto"
                            }
                        ]
                    }
                ],
                bleed: true
            },
            {
                type: "Container",
                items: [
                    {
                        type: "FactSet",
                        spacing: "Padding",
                        facts: withDetails
                            ? [
                                {
                                    title: "Group",
                                    value: data.group
                                },
                                {
                                    title: "Service",
                                    value: data.service
                                },
                                {
                                    title: "Short description",
                                    value: data.shortDescription
                                }
                            ]
                            : [
                                {
                                    title: "Group",
                                    value: data.group
                                },
                                {
                                    title: "Service",
                                    value: data.service
                                },
                            ]
                    }
                ]
            }
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        version: "1.6",
        fallbackText: "This card requires Adaptive Cards v1.5 support to be rendered properly."
    };
};

export const getCard = (response, command) => {
    const type = response.type;
    const mode = response.mode;
    const data = response.data;
    const withDetails = command.includes("info");
    let attachment;
    if (type === "incident") {
        if (mode === "one") {
            attachment = {
                attachments: [CardFactory.adaptiveCard(getIncident(data, withDetails))]
            };
        } else {
            const cards = [];
            data.forEach(item => {
                cards.push(CardFactory.adaptiveCard(getIncident(item, withDetails)));
            });
            attachment = {
                attachments: cards,
                attachmentLayout: AttachmentLayoutTypes.Carousel
            };
        }
    }
    if (type === "change") {
        if (mode === "one") {
            attachment = {
                attachments: [CardFactory.adaptiveCard(getChange(data, withDetails))]
            };
        } else {
            const cards = [];
            data.forEach(item => {
                cards.push(CardFactory.adaptiveCard(getChange(item, withDetails)));
            });
            attachment = {
                attachments: cards,
                attachmentLayout: AttachmentLayoutTypes.Carousel
            };
        }
    }
    if (type === "application") {
        attachment = {
            attachments: [CardFactory.adaptiveCard(getApplication(data))]
        };
    }
    if (type === "server") {
        attachment = {
            attachments: [CardFactory.adaptiveCard(getServer(data))]
        };
    }
    return attachment;

};
