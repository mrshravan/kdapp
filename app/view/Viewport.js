Ext.define('kdApp.view.Viewport', {
				extend: 'Ext.Panel',
				xtype: 'viewportpage',
				
				config: {
								fullscreen: true,
								layout: 'card',
								items : [
								{
									xtype : 'maincard',	
								},
								{
									xtype: 'readdiarycard'
									
								},
								{
									xtype: 'writediaryview'
								},
								{
									xtype: 'label',
									html: 'Share Diary'
								}
								
								]
				}
});
