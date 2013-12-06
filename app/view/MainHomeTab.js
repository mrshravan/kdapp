Ext.define('kdApp.view.MainHomeTab', {
				extend: 'Ext.Panel',
				
				xtype: 'mainhometab',
				
				config: {
								
							title : 'Home',
							iconCls : 'home',
							xtype : 'formpanel',
					
							html : ['<Center>', 
								'<br/><br/><br/><br/><br/>',
								'Sign in', 
								'<br/><br/><br/>',
								//'<div href="google.com">',
									'<i class="fa fa-facebook-square fa-3x"/> &nbsp',
								//'</div>',
								'<i class="fa fa-twitter fa-lg"/>',
								].join(''),
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
										xtype: 'panel',
										src: 'Read Diary',
									}
									]
														
								
				}
});
