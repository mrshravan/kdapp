Ext.define('kdApp.view.Viewport', {
				extend: 'Ext.Panel',
				xtype: 'viewportpage',
				requires: [
				'Ext.TitleBar',
				],
				config: {
								fullscreen: true,
								layout: 'hbox',
								items : [
								{
									xtype : 'main',
									cls: 'slide',
									width: '100%'												
								}, 
								{
									xtype : 'navigation',
									width : 250
								}
								]
				}
});
