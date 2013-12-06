Ext.define('kdApp.view.Viewport', {
				extend: 'Ext.Container',
				xtype: 'viewportpage',
				requires: [
				'Ext.TitleBar',
				'Ext.carousel.Carousel'
				],
				config: {
								fullscreen: true,
								layout: 'hbox',
								items : [{
												xtype : 'main',
												cls: 'slide',
												
												// Needed to fit the whole content
												width: '100%'												
								}, {
												xtype : 'navigation',
												width : 250
								}]
				}
});
