Ext.define('kdApp.model.StoriesM', {
    extend: 'Ext.data.Model',
    requires: ['kdApp.model.Photos'],

    config: {
        fields: [
        	'storyID',
        	'incident'
        	],
       	 hasMany: {
			model: "kdApp.model.Photos",
			name: 'photos',
			associationKey: 'photos'
		},
		belongsTo: "kdApp.model.Kidiography"
 	
    },

});