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
									height: '100%',
									layout: 'vbox',
									scrollable: {
										direction: 'vertical',
										directionLock: false
									},
									
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
																align: 'right',
																iconCls:'more',
																
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
