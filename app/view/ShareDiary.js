Ext.define('kdApp.view.ShareDiary', {
    extend: 'Ext.List',
    xtype: 'sharediaryview',
	requires: ['kdApp.store.Stories'],				
	config: {
		//layout:'fit',
		title: 'Share Diary',

		itemTpl: Ext.create('Ext.XTemplate',
		 '<div>',
		 	'<center>',
		 				'<img src="{imgPath}/profileID-{profileID}/stories/{storyID}/{photoURL}" height="200" width="250"/><br>',
			 			'{comments}<br/><br/>',
			 			
			 			'<align ="right">Share: </align>',
			 			'<i class="fa fa-facebook"></i>',
			 			'&nbsp;&nbsp;&nbsp;',
			 			'<i class="fa fa-twitter"></i>',
			 			'&nbsp;&nbsp;&nbsp;',			 			
			 			'<i class="fa fa-google-plus"></i>',
		 	'</center>',
		 '</div>'
		 ),
	
		store: 'Stories',
		
	}
    
});