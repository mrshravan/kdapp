Ext.define('kdApp.view.Viewport', {
				extend: 'Ext.Panel',
				xtype: 'viewportpage',
				
				config: {
								fullscreen: true,
								layout: 'card',
								items : [
								{
									xtype : 'maincard',	
								},
								{
									xtype: 'readdiarycard'
									
								},
								{
									xtype: 'writediarycard'
								},
								{
									xtype: 'label',
									html: 'Share Diary'
								}
								
								]
				},
				listeners:{
					show: function(element, options) {
						//this.callParent();
						var comp = Ext.ComponentQuery.query('maincardpanel')[0];
						console.log("Loading the store:"+comp);
						//var c = Ext.getStore('flickrstore').getAt(0);
						//console.log("flickrstore :"+c);
					}
				}
				
});
