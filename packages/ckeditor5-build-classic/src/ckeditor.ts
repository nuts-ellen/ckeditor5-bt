/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';

// added for BudgetThuis
import { Mention} from '@ckeditor/ckeditor5-mention';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';

// added our own custom plugin / toolbar item
import BudgetThuisButton from './budgetthuisbutton/budgetthuisbutton';

export default class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Mention,
		Essentials,
		Bold,
		Italic,
		Heading,
		Link,
		List,
		Paragraph,
		PasteFromOffice,
		Table,
		TableToolbar,
		GeneralHtmlSupport,
		SourceEditing,
		BudgetThuisButton
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'heading',
				'|', 'bold', 'italic',
				'|', 'link', 'insertTable',
				'|', 'bulletedList',
				'|', 'sourceEditing', '|', 'budgetthuisButton'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
