Ext.define('kdApp.view.MainCard', {
				extend: 'Ext.Panel',
				xtype: 'maincard',
				requires: [
				'Ext.TitleBar',
				],
				id: 'maincard',
				
			
				config: {
								fullscreen: true,
								layout: 'hbox',
								
								items : [
								{
									xtype : 'panel',
									id: 'maincardpanel',
									cls: 'slide',
									width: '100%',
									layout: 'vbox',
									styleHtmlContent:'true',
									scrollable:'false',
									store: 'FlickrStore',
									style: 'background:url(./resources/images/raj_son.jpg);background-repeat:no-repeat;background-size:100% 100%;',
									//style: 'background:url("http://src.sencha.io/{[Ext.Viewport.getOrientation()]}/{photo_url}");background-repeat:no-repeat;background-size:100% 100%;',
									items : [
												{
													xtype : 'titlebar',
													items :[{
																align : 'left',
																name : 'nav_btn',
																iconCls : 'list',
																ui : 'plain'
															},{
																xtype:'label',
																html:'Kidiography',
															}
															]
												},
												{
													xtype: 'mainhometab',
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
