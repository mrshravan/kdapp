Ext.define('kdApp.view.Main', {
				extend: 'Ext.TabPanel',
				views: ['MainHomeTab'],
				xtype: 'main',
				
				config: {
								tabBarPosition : 'bottom',
								autoDestroy : 'true',
								items : [{
												
													xtype : 'mainhometab',
													title : 'Home',
													iconCls : 'home',
														
									},
									{
										xtype:'carousel',
										iconCls :'star',
										items : [{
												xtype: 'image',
												src:'resources/images/sencha',
											},
											{
												xtype: 'image',
												src:'resources/images/sencha',
											}]
									
								}]
				}
});
