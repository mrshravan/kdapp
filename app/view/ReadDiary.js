Ext.define('kdApp.view.ReadDiary', {
    extend: 'Ext.Panel',
    alias: 'widget.readdiaryview',
	fullscreen: true,
	
	config: {			
			items: [ 
					{
						xtype: 'panel',
						 height:   10050,
						 layout: 'vbox',  
						 scrollable: true,
						 scroll: 'vertical',
						 items: [
							{
							   xtype: 'fieldset',							
							   items: [
									{
										xtype: 'image',
										 src: Ext.Viewport.getOrientation() == 'portrait' ? './resources/images/nitya.jpg' : './resources/images/nitya.jpg',
										style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:280px;height:200px;margin:auto' : 'width:150px;height:150px;margin:auto'
									},
									{
										xtype: 'label',
										//flex: 2,
										html: 'This photo is taken in Tenessay, USA. This time you, me and your father all went to accompany your father clients visit. This is on the way back to home to atlanta'
									}
								]//items - 1
						}]//items - 2
					}]
						
			}//itmes
			
});