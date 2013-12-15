Ext.define('kdApp.view.ReadDiaryCard', {
				extend: 'Ext.Container',
				xtype: 'readdiarycard',
				requires: [
				'Ext.TitleBar',
				],
				id: 'readdiarycard',

				config: {
								fullscreen: true,
								layout: 'hbox',
								items : [
								{
									xtype : 'panel',
									id: 'readdiarycardpanel',
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
													xtype: 'readdiaryview',
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
