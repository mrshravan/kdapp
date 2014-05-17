Ext.define('kdApp.view.ShareDiary', {
    extend: 'Ext.List',
    xtype: 'sharediaryview',
	requires: ['kdApp.store.Stories'],				
	config: {
		layout:'fit',
		title: 'Share Diary',

		itemTpl: Ext.create('Ext.XTemplate',
//		'<div class="x-container x-unsized x-form-fieldset" id="ext-fieldset-1x">',
		 '  <div class="x-inner x-form-fieldset-inner" id="ext-element-134x">',
			  '<div class="x-container x-unsized x-form-fieldset" id="ext-fieldset-2x">',
				'<div class="x-inner x-form-fieldset-inner" id="ext-label-5y">',
					 '<div class="x-innerhtml" id="ext-element-136y">',
					 	'<img src="http://farm8.staticflickr.com/7433/12540787595_f255c2f146.jpg" height="50" width="50" style="float:left;margin:0px 0px 1px 2px;">',
					 	'&nbsp;<font align="top">Mark Gibson</font>',
					 	
					 '</div>',
				  '</div>',
			  	  //'<br/>',	
				 '<div class="x-inner x-form-fieldset-inner" id="ext-element-135x">',
					'<div class="x-unsized x-img x-img-image x-img-background x-paint-monitored x-size-monitored" id="ext-image-1x" style="width: 300px; height: 200px; margin: auto; background-image: url({imgPath}/profileID-{profileID}/stories/{storyID}/{photoURL});">',
					   '<div class="x-paint-monitor overflowchange" />',
					   '<div class="x-size-monitors overflowchanged">',
						  '<div class="expand">',
							 '<div style="width: 301px; height: 210px;" />',
						  '</div>',
						  '<div class="shrink">',
							 '<div style="width: 300px; height: 210px;" />',
						  '</div>',
					   '</div>',
					'</div>',
					'<div class="x-unsized x-label x-has-height" id="ext-label-4x" style="height: 20% !important;" />',
				 '</div>',
			  '</div>',
		   '</div>',
		'</div>',
		'<div style="width: 98%; margin: auto;">',		
				'<h10>{comments}&nbsp;</h10><br>',
		'</div>',
// 		'<div class="x-inner x-form-fieldset-inner" id="ext-label-5y">',
// 			 '<div class="x-innerhtml" id="ext-element-136y">',
// 				'temp',
// 			 '</div>',
// 		  '</div>',
		
			   '<div align="right">',
					//'<input type="button" style="fa fa-facebook" value="share">',
						'<center>',
						'<input type="button" style="width:33%;height:200%;margin:auto;" value="share">',
						'<input type="button" style="width:33%;height:200%;margin:auto" value="comment">',
						'<input type="button" style="width:33%;height:200%;margin:auto" value="like">',
						
						'</center>'	,				
				'</div>',
			'</div>',
			//'<br/>',			
			'<div class="x-inner x-form-fieldset-inner" id="ext-label-5y">',
				 '<div class="x-innerhtml" id="ext-element-136y">',
					 	'<img src="http://farm4.staticflickr.com/3704/12536827894_7d2931b3c7.jpg" height="50" width="50" style="float:left;margin:0px 0px 1px 2px;">',
					 	'&nbsp;<font align="top">This is awesome</font>',
				 '</div>',
			  '</div>'
			
		 ),
	
		store: 'Stories',
		
		
	},
    
});