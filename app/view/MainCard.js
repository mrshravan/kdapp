Ext.define('kdApp.view.MainCard', {
				extend: 'Ext.Panel',
				xtype: 'maincard',
				requires: [
				'Ext.TitleBar',
				],
				id: 'maincard',
				config: {
								fullscreen: true,
								layout: 'hbox',
								
								items : [
								{
									xtype : 'panel',
									id: 'maincardpanel',
									cls: 'slide',
									width: '100%',
									layout: 'vbox',
									items : [
												{
													xtype : 'titlebar',
													items :[{
																align : 'left',
																name : 'nav_btn',
																iconCls : 'list',
																ui : 'plain'
															}
															]
												},
												{
													xtype: 'mainhometab',
												}
											]//itm
								}, 
								{
									xtype : 'navigation',
									width : 250
								}
								]
				}
});
