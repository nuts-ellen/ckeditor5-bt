export default class BudgetThuisButtonUI extends Plugin {
    static get requires(): (typeof ContextualBalloon)[];
    init(): void;
    _balloon: ContextualBalloon | undefined;
    formView: FormView | undefined;
    _createFormView(): FormView;
    _getBalloonPositionData(): {
        target: () => Range;
    };
    _showUI(): void;
    _hideUI(): void;
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import { ContextualBalloon } from "@ckeditor/ckeditor5-ui";
import FormView from "./budgetthuisbuttonview";
