export default {
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    version: "1.0",
    type: "AdaptiveCard",
    speak: "Your flight is confirmed for you and 3 other passengers from San Francisco to Amsterdam on Friday, October 10 8:30 AM",
    msteams: { width: "Full" },
    body: [
        {
            type: "TextBlock",
            text: "Command list",
            weight: "bolder",
            isSubtle: false
        },
        {
            type: "ColumnSet",
            spacing: "medium",
            columns: [
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            text: "get info \"ap24563\"",
                            size: "medium",
                            weight: "bolder",
                            isSubtle: true
                        }
                    ]
                },
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            horizontalAlignment: "left",
                            text: "List the features of the app code",
                            size: "default",
                            weight: "lighter"
                        }
                    ]
                }
            ]
        },
        {
            type: "ColumnSet",
            spacing: "medium",
            columns: [
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            text: "get inc \"ap24563\"",
                            size: "medium",
                            weight: "bolder",
                            isSubtle: true
                        }
                    ]
                },
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            horizontalAlignment: "left",
                            text: "List the open incident of the code ap",
                            size: "default",
                            weight: "lighter"
                        }
                    ]
                }
            ]
        },
        {
            type: "ColumnSet",
            spacing: "medium",
            columns: [
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            text: "get inc last \"ap24563\"",
                            size: "medium",
                            weight: "bolder",
                            isSubtle: true
                        }
                    ]
                },
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            horizontalAlignment: "left",
                            text: "List the latest incidents in the app code from the last 90 days",
                            size: "default",
                            weight: "lighter"
                        }
                    ]
                }
            ]
        },
        {
            type: "ColumnSet",
            spacing: "medium",
            columns: [
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            text: "get info \"inc (priority: P1)\"",
                            size: "medium",
                            weight: "bolder",
                            isSubtle: true
                        }
                    ]
                },
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            horizontalAlignment: "left",
                            text: "List the details of the incident by priority",
                            size: "default",
                            weight: "lighter"
                        }
                    ]
                }
            ]
        },
        {
            type: "ColumnSet",
            spacing: "medium",
            columns: [
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            text: "get chg \"ap24563\"",
                            size: "medium",
                            weight: "bolder",
                            isSubtle: true
                        }
                    ]
                },
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            horizontalAlignment: "left",
                            text: "List the open change of the code ap",
                            size: "default",
                            weight: "lighter"
                        }
                    ]
                }
            ]
        },
        {
            type: "ColumnSet",
            spacing: "medium",
            columns: [
                {
                    type: "Column",
                    width: "1",
                    items: [
                        {
                            type: "TextBlock",
                            text: "get chg last \"ap24563\"",
                            size: "medium",
                            weight: "bolder",
                            isSubtle: true
                        }
                    ]
                },
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            horizontalAlignment: "left",
                            text: "List the latest changes in the app code from the last 90 days",
                            size: "default",
                            weight: "lighter"
                        }
                    ]
                }
            ]
        },
        {
            type: "ColumnSet",
            spacing: "medium",
            columns: [
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            text: "get info \"chg (Id)\"",
                            size: "medium",
                            weight: "bolder",
                            isSubtle: true
                        }
                    ]
                },
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            horizontalAlignment: "left",
                            text: "List the details of the chnage by id",
                            size: "default",
                            weight: "lighter"
                        }
                    ]
                }
            ]
        },
        {
            type: "ColumnSet",
            spacing: "medium",
            columns: [
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            text: "get info \"server (Id)\"",
                            size: "medium",
                            weight: "bolder",
                            isSubtle: true
                        }
                    ]
                },
                {
                    type: "Column",
                    width: 1,
                    items: [
                        {
                            type: "TextBlock",
                            horizontalAlignment: "left",
                            text: "List the details of the server by id",
                            size: "default",
                            weight: "lighter"
                        }
                    ]
                }
            ]
        }
    ]
};
