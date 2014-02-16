Ext.define('kdApp.model.Photos', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	'photoID',
        	'incident'
        	],
       belongsTo: "kdApp.model.StoriesM"
    },
	

});