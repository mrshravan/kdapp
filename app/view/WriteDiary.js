Ext.define('kdApp.view.WriteDiary', {
    extend: 'Ext.Panel',
    alias: 'widget.writediaryview',
	//fullscreen: true,
    requires: ['kdApp.store.Kidiography'],				
    
    config: {			
			tpl: '<div> {profileName}',
			items:[
				{
				xtype   : 'fieldset',
				items: [
						{
							xtype: 'fieldset',
						   items: [
								{
									xtype: 'image',
									src: Ext.Viewport.getOrientation() == 'portrait' ? './resources/images/nitya.jpg' : './resources/images/nitya.jpg',
									style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:300px;height:200px;margin:auto' : 'width:150px;height:150px;margin:auto'
								},
								{
									xtype: 'label',
									height:'20%',
									tpl: '<div> {profileName}',									
								},
								]//items - 1
						},
						{
							xtype: 'label',
							html: '<br>This photo is taken in Tenessay, USA.'
	
						}
				]
			}
			]
			
	},//config
	initialize : function(){
        var me = this;
        Ext.create('kdApp.store.Kidiography', {
            autoLoad: true,
            listeners: {
                load: function (self, records) {
                	var data = records[0].getData();
                	
                    console.log('Name4: '+data.profileName);
                    me.setData(data);
                    
                }
            }
        });
        
       
        me.callParent();
    }
    
});