/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [

		//{ name: 'basicstyles' },
		//{ name: 'links' },
		{ name: 'insert' }
	];

	config.toolbarStartupExpanded = false;

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	config.removeButtons = 'Bold,Italic,Underline,Strike,Cut,Copy,Paste';

	config.removePlugins = 'flash,image';
	//ciwong.dialogui
	config.extraPlugins = '';//'ciwong.mathType,kity,kui';
	config.allowedContent = true;
        
	config.sharedSpaces = {
	    top: 'ckeditor_top_pos'
	};
	//config.bodyClass = 'fillans';
	//config.codeSnippet_codeClass = 'fillans';
	config.enterMode = CKEDITOR.ENTER_BR;//  屏蔽换行符<br>
	config.shiftEnterMode = CKEDITOR.ENTER_P;//屏蔽段落<p>
};
