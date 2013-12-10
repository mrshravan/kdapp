Ext.define('kdApp.view.ReadDiary', {
    extend: 'Ext.Panel',
    alias: 'widget.readdiaryview',
	//fullscreen: true,
	scrollable : {
            direction     : 'vertical',
            directionLock : true
         },

	config: {
			//scrollable: true,
			items: [
				{
					xtype: 'component',
					html: '<center><img height="10%" width="100%"  src="./resources/images/nitya.jpg" /></center>',
			
				},
				{
					xtype: 'label',
					//flex: 2,
					html: 'This photo is taken in Tenessay, USA. This time you, me and your father all went to accompany your father clients visit. This is on the way back to home to atlanta'
				}
			]
			}
});