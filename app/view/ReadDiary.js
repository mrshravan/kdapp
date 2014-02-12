Ext.define('kdApp.view.ReadDiary', {
    // extend: 'Ext.Container',
//     xtype: 'readdiaryview',
// 	fullscreen: true,
// 	
// 	config: {
//         styleHtmlContent: true,
// 		items :[{
// 					xtype : 'label',
// 					html:'Read Diary',
// 				}
// 				]
//     }
    
    
    extend: 'Ext.List',
    xtype: 'readdiaryview',
    requires: ['kdApp.store.FlickrStore'],
    config: {
        
        //itemTpl: '<img src="http://src.sencha.io/{[Ext.Viewport.getOrientation()]}/{photo_url}" />',
        itemTpl: Ext.create('Ext.XTemplate',
		 '<div><img src="{photo_url}" height="200" width="250"/><br></div>'
		 ),
        title: 'Featured',
        store: 'FlickrStore',

    }
    	
			
});