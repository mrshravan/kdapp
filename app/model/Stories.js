Ext.define('kdApp.model.Stories', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        	'pk',
        	'profileID',
        	'profileName',
        	'storyID', 
        	'dttm',
        	'imgPath',
        	'photoURL',
        	'videoURL',
        	'comments']
       
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.pk,
            d.profileID,
            d.profileName,
            d.storyID,
            d.dttm,
            d.imgPath,
            d.photoURL,
            d.videoURL,
            d.comments
        ];
        return names.join(" ");
    }
});