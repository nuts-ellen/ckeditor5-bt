/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import BudgetThuisButton from './budgetthuisbutton/budgetthuisbutton';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof Essentials | typeof Bold | typeof Italic | typeof Paragraph | typeof Heading | typeof Link | typeof List | typeof PasteFromOffice | typeof Table | typeof TableToolbar | typeof Mention | typeof GeneralHtmlSupport | typeof SourceEditing | typeof BudgetThuisButton)[];
    static defaultConfig: {
        toolbar: {
            items: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}
