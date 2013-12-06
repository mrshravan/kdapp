Ext.define('kdApp.view.Viewport', {
				extend: 'Ext.Container',
				xtype: 'viewporttoppage',
				requires: [
				'Ext.TitleBar'
				],
				config: {
								layout: 'vbox',
								items : [{
												xtype : 'main',
												cls: 'slide',
												
												// Needed to fit the whole content
												height : '100%'
								}, {
												xtype : 'navigation',
												height : 250
								}]
				}
});
