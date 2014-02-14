Ext.define('kdApp.view.ReadDiary', {
    extend: 'Ext.List',
    xtype: 'readdiaryview',
    requires: ['kdApp.store.FlickrStore'],
    config: {
        
        //itemTpl: '<img src="http://src.sencha.io/{[Ext.Viewport.getOrientation()]}/{photo_url}" />',
        itemTpl: Ext.create('Ext.XTemplate',
		 '<div><center><img src="{photo_url}" height="200" width="250"/></center><br></div>'
		 ),
        title: 'Featured',
        store: 'FlickrStore',

    }
    	
			
});