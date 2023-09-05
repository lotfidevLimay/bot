import {
    ComponentDialog,
    DialogSet,
    DialogState,
    DialogTurnResult,
    DialogTurnStatus,
    TextPrompt,
    WaterfallDialog,
    WaterfallStepContext
} from "botbuilder-dialogs";
import {
    ActivityTypes,
    CardFactory,
    MessageFactory,
    StatePropertyAccessor,
    TurnContext
} from "botbuilder";

import HelpCard from "../cards/helpCard";

const HELP_DIALOG_ID = "helpDialog";
const HELP_WATERFALL_DIALOG_ID = "helpWaterfallDialog";

export class HelpDialog extends ComponentDialog {
    constructor() {
        super(HELP_DIALOG_ID);
        this.addDialog(new TextPrompt("TextPrompt"))
            .addDialog(new WaterfallDialog(HELP_WATERFALL_DIALOG_ID, [
                this.introStep.bind(this)
            ]));
        this.initialDialogId = HELP_WATERFALL_DIALOG_ID;
    }

    public async run(context: TurnContext, accessor: StatePropertyAccessor<DialogState>) {
        const dialogSet = new DialogSet(accessor);
        dialogSet.add(this);
        const dialogContext = await dialogSet.createContext(context);
        const results = await dialogContext.continueDialog();
        if (results.status === DialogTurnStatus.empty) {
            await dialogContext.beginDialog(this.id);
        }
    }

    private async introStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const card = CardFactory.adaptiveCard(
            HelpCard
        );
        const replyActivity = { type: ActivityTypes.Message, attachments: [card] };
        await stepContext.context.sendActivity(replyActivity);
        return await stepContext.endDialog();

    }
}
