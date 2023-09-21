export default class FormView extends View<HTMLElement> {
    constructor(locale: any);
    buttonTextView: LabeledInputView;
    buttonUrlView: LabeledInputView;
    buttonWidthView: LabeledInputView;
    saveButtonView: ButtonView;
    cancelButtonView: ButtonView;
    childViews: import("@ckeditor/ckeditor5-ui").ViewCollection<ButtonView | LabeledInputView>;
    focus(): void;
    _createInputTextView(placeholder: any): LabeledInputView;
    _createButton(label: any, icon: any, className: any): ButtonView;
}
import { View } from "@ckeditor/ckeditor5-ui";
import LabeledInputView from "@ckeditor/ckeditor5-ui/src/labeledinput/labeledinputview";
import { ButtonView } from "@ckeditor/ckeditor5-ui";
