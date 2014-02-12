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
									height:'100%',
									layout: 'vbox',
									items : [
												{
													xtype : 'titlebar',
													items :[{
																align : 'left',
																name : 'nav_btn',
																iconCls : 'list',
																ui : 'plain'
															},
															{
																align: 'center',
																xtype: 'label',
																html : 'Read Diary'
															},
															{
																align: 'right',
																iconCls:'more',
																
															}
															]
												},
												{
													xtype: 'readdiaryview',
													height: '100%',
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
