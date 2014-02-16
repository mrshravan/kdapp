Ext.define('kdApp.model.Kidiography', {
    extend: 'Ext.data.Model',
    requires: ['kdApp.model.StoriesM'],
    config: {
        fields: [
        	'profileID',
        	'profileName',
        	'emailID', 
        	'address'
        	],
        proxy: {
            type: 'ajax',
            url: 'kidiographies.json',
            reader : {
                type : 'json',
                rootProperty : 'kidiographies'
            }
        },
        hasMany: {
            model: "kdApp.model.StoriesM",
            name: 'stories',
            associationKey: 'stories'
        },
        autoLoad: true
    }
    
});