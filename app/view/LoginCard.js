Ext.define('kdApp.view.LoginCard', {
				extend: 'Ext.Panel',
				xtype: 'logincard',
				requires: [
				'Ext.TitleBar',
				],
				id: 'logincard',
				config: {
								fullscreen: true,
								layout: 'hbox',
								
								items : [
								{
									xtype : 'panel',
									id: 'logincardpanel',
									cls: 'slide',
									width: '100%',
									layout: 'vbox',
									styleHtmlContent:'true',
									scrollable:'false',
									style: 'background:url(./resources/images/raj_son.jpg);background-repeat:no-repeat;background-size:100% 100%;',
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
													xtype: 'loginview',
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
