Ext.define('kdApp.store.FlickrStore', {
    extend: 'Ext.data.Store',
    
    config: {
        model: 'kdApp.model.FlickrModel',
        autoLoad: true,
        remoteFilter: true,
        proxy: {
            type: 'flickr',
            query: 'featured',
            reader: {
                type: 'json',
                rootProperty: 'query.results.photo'
            }
        }
    }
});