Ext.define('kdApp.view.ReadDiary', {
    extend: 'Ext.Container',
    xtype: 'readdiaryview',
	fullscreen: true,
	
	config: {
        styleHtmlContent: true,
		items :[{
					xtype : 'label',
					html:'Read Diary',
				}
				]
    }	
			
});