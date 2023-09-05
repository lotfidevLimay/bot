import {
  ComponentDialog,
  DialogSet,
  DialogState,
  DialogTurnResult,
  DialogTurnStatus,
  TextPrompt,
  WaterfallDialog,
  WaterfallStepContext,
} from "botbuilder-dialogs";
import {
  MessageFactory,
  StatePropertyAccessor,
  TurnContext,
  ActionTypes,
  ActivityTypes,
  CardFactory,
} from "botbuilder";
import axios from "axios";

const TEAMS_EXTERNAL_API_ID = "externalApiDialog";
const TTEAMS_EXTERNAL_API_DIALOG_ID = "teamsExternalApiDialog";

export class TeamsExternalApiDialog extends ComponentDialog {
  constructor() {
    super(TEAMS_EXTERNAL_API_ID);
    this.addDialog(new TextPrompt("TextPrompt")).addDialog(
      new WaterfallDialog(TTEAMS_EXTERNAL_API_DIALOG_ID, [
        this.introStep.bind(this),
        this.actStep.bind(this),
        this.finalStep.bind(this),
      ])
    );
    this.initialDialogId = TTEAMS_EXTERNAL_API_DIALOG_ID;
  }

  public async run(
    context: TurnContext,
    accessor: StatePropertyAccessor<DialogState>
  ) {
    const dialogSet = new DialogSet(accessor);
    dialogSet.add(this);
    const dialogContext = await dialogSet.createContext(context);
    const results = await dialogContext.continueDialog();
    if (results.status === DialogTurnStatus.empty) {
      await dialogContext.beginDialog(this.id);
    }
  }

  private setData = (posts) => {
    return posts.slice(0, 3).map((post: { title: any }) => {
      return { type: ActionTypes.ImBack, title: post.title };
    });
  };

  private async displayOptions() {
    const buttons = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const dataMock = [
          {
            title: "ap24563 cockpit itg",
          },
        ];
        return this.setData(dataMock);
      });

    const card = CardFactory.heroCard("", undefined, buttons, {
      text: "Result(s) founded: ",
    });

    const reply = { type: ActivityTypes.Message, attachments: [card] };

    return reply;
  }

  private async introStep(
    stepContext: WaterfallStepContext
  ): Promise<DialogTurnResult> {
    const chgLists = [
      { chgNumber: "", chgType: "Normal", state: "Closed" },
      { chgNumber: "CHG0527925", chgType: "Normal", state: "Closed" },
    ];

    chgLists.forEach(async (e) => {
      const promptMessage = MessageFactory.text(e.chgNumber);
      return await stepContext.prompt("TextPrompt", { prompt: promptMessage });
    });

    return await stepContext.prompt("TextPrompt", { prompt: "CHG0520590" });
  }

  private async actStep(
    stepContext: WaterfallStepContext
  ): Promise<DialogTurnResult> {
    if (stepContext.result) {
      const result = stepContext.result;
      console.log("result", result);
      const replay = await this.displayOptions();
      stepContext.context.sendActivity(replay);
      return await stepContext.next();
    }
    return await stepContext.next();
  }

  private async finalStep(
    stepContext: WaterfallStepContext
  ): Promise<DialogTurnResult> {
    return await stepContext.endDialog();
  }
}
