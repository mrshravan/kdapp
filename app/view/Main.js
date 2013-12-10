Ext.define('kdApp.view.Main', {
				extend: 'Ext.Panel',
				views: ['MainHomeTab'],
				xtype: 'main',
				config: {
						items : [{
										xtype : 'titlebar',
										items :[{
													align : 'left',
													name : 'nav_btn',
													iconCls : 'list',
													ui : 'plain'
												},{
													xtype : 'label',
													html : 'Kids Diary',	
												}]
										},
										{
											xtype: 'mainhometab',
										}]
				}
});
