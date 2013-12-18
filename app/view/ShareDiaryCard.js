Ext.define('kdApp.view.ShareDiaryCard', {
				extend: 'Ext.Container',
				xtype: 'sharediarycard',
				requires: [
				'Ext.TitleBar',
				],
				id: 'sharediarycard',

				config: {
								fullscreen: true,
								layout: 'hbox',
								items : [
								{
									xtype : 'panel',
									id: 'sharediarycardpanel',
									cls: 'slide',
									width: '100%',
									layout: 'vbox',
									// styleHtmlContent:'true',
// 									scrollable:'false',
// 									style: 'background:url(./resources/images/raj_son.jpg);background-repeat:no-repeat;background-size:100% 100%;',
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
													xtype: 'sharediaryview',
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