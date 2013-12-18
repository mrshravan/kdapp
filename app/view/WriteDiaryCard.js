Ext.define('kdApp.view.WriteDiaryCard', {
				extend: 'Ext.Container',
				xtype: 'writediarycard',
				requires: [
				'Ext.TitleBar',
				],
				id: 'writediarycard',

				config: {
								fullscreen: true,
								layout: 'hbox',
								items : [
								{
									xtype : 'panel',
									id: 'writediarycardpanel',
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
													xtype: 'writediaryview',
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
