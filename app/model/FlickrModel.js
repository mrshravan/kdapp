Ext.define('kdApp.model.FlickrModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id', 
            'farm',
            'secret',
            'server',
            'title',
            {name: 'photo_url', convert: function(v, r){ 
                r = r.data;
                //http://farm4.staticflickr.com/3679/12459613264_fd72c1e1e5.jpg
                return "http://farm"+r.farm+".staticflickr.com/"+r.server+"/"+r.id+"_"+r.secret+".jpg";
            }}
        ]
    }
});