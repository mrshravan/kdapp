Ext.define('kdApp.view.ReadDiary', {
    extend: 'Ext.List',
    xtype: 'readdiaryview',
    requires: ['kdApp.store.FlickrStore'],
     config: {
        itemTpl: Ext.create('Ext.XTemplate',
		 '<div><center><img src="{photo_url}" height="200" width="250"/></center><br></div>'
		 ),
        store: 'FlickrStore',
    }
    			
});

