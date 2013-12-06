Ext.define('kdApp.view.Main', {
				extend: 'Ext.TabPanel',
				views: ['Login'],
				xtype: 'main',
				
				config: {
								tabBarPosition : 'bottom',
								items : [{
												title : 'Home',
												iconCls : 'home',
												xtype : 'formpanel',
												html : '<Center> <br/><br/><br/><br/><br/>Sign in <br/><br/><br/><i class="fa fa-facebook-square fa-3x"/> &nbsp<i class="fa fa-twitter fa-lg"/>',
												
												items : [{
																xtype : 'titlebar',
																//title : 'Slide Nav',
																docked : 'top',
																items :[{
																				align : 'left',
																				name : 'nav_btn',
																				iconCls : 'list',
																				ui : 'plain'
																},{
																		xtype : 'label',
																		html : 'Kids Diary',	
																		
																}
																]
														}]
														
								}
								,
																
								
								]
				}
});
