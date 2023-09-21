export default class BudgetThuisButton extends Plugin {
    static get requires(): (typeof BudgetThuisButtonEditing | typeof BudgetThuisButtonUI)[];
}
import { Plugin } from "@ckeditor/ckeditor5-core";
import BudgetThuisButtonEditing from "./budgetthuisbuttonediting";
import BudgetThuisButtonUI from "./budgetthuisbuttonui";
