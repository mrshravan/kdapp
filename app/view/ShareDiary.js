Ext.define('kdApp.view.ShareDiary', {
    extend: 'Ext.List',
    xtype: 'sharediaryview',
	requires: ['kdApp.store.Stories'],				
	config: {
		layout:'fit',
		title: 'Share Diary',

		itemTpl: Ext.create('Ext.XTemplate',
		'<div class="x-container x-unsized x-form-fieldset" id="ext-fieldset-1x">',

		 '  <div class="x-inner x-form-fieldset-inner" id="ext-element-134x">',
		 		'<div align="right">',
					'<button class="fa fa-twitter">',
					'<button class="fa fa-facebook">',

				'</div>',

			  '<div class="x-container x-unsized x-form-fieldset" id="ext-fieldset-2x">',
				 '<div class="x-inner x-form-fieldset-inner" id="ext-element-135x">',
					'<div class="x-unsized x-img x-img-image x-img-background x-paint-monitored x-size-monitored" id="ext-image-1x" style="width: 300px; height: 200px; margin: auto; background-image: url({imgPath}/profileID-{profileID}/stories/{storyID}/{photoURL});">',
					   '<div class="x-paint-monitor overflowchange" />',
					   '<div class="x-size-monitors overflowchanged">',
						  '<div class="expand">',
							 '<div style="width: 301px; height: 201px;" />',
						  '</div>',
						  '<div class="shrink">',
							 '<div style="width: 300px; height: 200px;" />',
						  '</div>',
					   '</div>',
					'</div>',
					'<div class="x-unsized x-label x-has-height" id="ext-label-4x" style="height: 20% !important;" />',
				 '</div>',
			  '</div>',
		   '</div>',
		'</div>',
		'<div>',		
				'<h10>{comments}&nbsp;</h10><br>',
		'</div>',
// 		'<div class="x-inner x-form-fieldset-inner" id="ext-label-5y">',
// 			 '<div class="x-innerhtml" id="ext-element-136y">',
// 				'temp',
// 			 '</div>',
// 		  '</div>',
		'</div>',
		'<div>',
			'<br><align ="left">Share: </align>',
			'<i class="fa fa-facebook"></i>',
			'&nbsp;&nbsp;&nbsp;',
			'<i class="fa fa-twitter"></i>',
			'&nbsp;&nbsp;&nbsp;',			 			
			'<i class="fa fa-google-plus"></i>',
		'</div>'
		 ),
	
		store: 'Stories',
		
		
	},
    
});