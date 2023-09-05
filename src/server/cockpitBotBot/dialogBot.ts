import {
    ConversationState,
    UserState,
    TeamsActivityHandler,
    TurnContext
} from "botbuilder";
import { MainDialog } from "./dialogs/mainDialog";

export class DialogBot extends TeamsActivityHandler {
    public dialogState: any;

    constructor(public conversationState: ConversationState, public userState: UserState, public dialog: MainDialog) {
        super();
        this.conversationState = conversationState;
        this.userState = userState;
        this.dialog = dialog;
        this.dialogState = this.conversationState.createProperty("DialogState");

        this.onMessage(async (context, next) => {
            // Run the MainDialog with the new message Activity.
            await this.dialog.run(context, this.dialogState);
            await next();
        });

        this.onMessageReaction(async (context, next) => {
            const added = context.activity.reactionsAdded;
            if (added && added[0]) {
                await context.sendActivity({
                    textFormat: "xml",
                    text: `Thanks for reacting to my message (${added[0].type})`
                });
            }
        });
    }

    public async run(context: TurnContext) {
        await super.run(context);
        // Save any state changes. The load happened during the execution of the Dialog.
        await this.conversationState.saveChanges(context, false);
        await this.userState.saveChanges(context, false);
    }
}
