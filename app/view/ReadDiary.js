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
    
    // requires: ['kdApp.store.Kidiography'],
//     config: {
//         itemTpl: Ext.create('Ext.XTemplate',
// 		 '<div><center><img src="{profileName}" height="200" width="250"/>{profileName}</center><br></div>'
// 		 ),
//         store: 'Kidiography',
//     }			
});