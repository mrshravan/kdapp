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
									//style: 'background:url(http://farm6.staticflickr.com/5546/12455400163_6011f3b513.jpg);',
									
									
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
				},
				initialize: function() {
        			this.callParent();
        			console.log("Initialize in Maincard.js");
        			var comp = Ext.ComponentQuery.query('maincard')[0];
        			console.log("comp:"+comp);
        			Ext.getStore("FlickrStore").load(function(pictures){
        				console.log(Object.prototype.toString.call(comp));
        				var photoURL = pictures[0].get('photo_url');
        				console.log("Initialize in photoURL.js:"+photoURL);
        				//console.log("html:"+comp.getHtml());
        				//comp.setHtml('<img src='+photoURL+'/>');
        				Ext.select('maincard').setStyle('background-image', 'url(./resources/images/raj_son.jpg)');
						// comp.setStyle('background-image','url("./resources/images/raj_son.jpg")');
// 						comp.setStyle('background-image','url('+photoURL+')');
						
						
						//"background:url("+photoURL+");background-repeat:no-repeat;background-size:100% 100%;");
        				console.log(photoURL.constructor);
        				console.log(pictures.constructor);
        			});
        		},
				
				
});
