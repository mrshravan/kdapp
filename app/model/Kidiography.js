Ext.define('kdApp.model.Kidiography', {
    extend: 'Ext.data.Model',
    requires: ['kdApp.model.StoriesM'],
    config: {
        fields: [
        	'id',
        	'name',
        	'emailID', 
        	'address'
        	]
    },
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
            associationKey: 'stories'
        }
});