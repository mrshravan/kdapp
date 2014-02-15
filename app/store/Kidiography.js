Ext.define('kdApp.store.Kidiography', {
    extend: 'Ext.data.Store',    
    config: {
        model: 'kdApp.model.Kidiography',
        autoLoad: true,
    },
});