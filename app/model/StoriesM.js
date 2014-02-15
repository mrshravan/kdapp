Ext.define('kdApp.model.StoriesM', {
    extend: 'Ext.data.Model',
    requires: ['kdApp.model.Photos'],

    config: {
        fields: [
        	'storyID',
        	'incident'
        	]
    },
	hasMany: {
		model: "kdApp.model.Photos",
		associationKey: 'photos'
	},
	belongsTo: "kdApp.model.Kidiography"

});