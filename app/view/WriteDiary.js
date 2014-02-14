Ext.define('kdApp.view.WriteDiary', {
    extend: 'Ext.Panel',
    alias: 'widget.writediaryview',
	//fullscreen: true,
        
    config: {			
			items: [ 
					{
						 xtype: 'panel',
						 height:100000,

						 items: [
							{
							   xtype: 'fieldset',
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
													html: '<center>This photo is taken in Tenessay, USA. This time you, me and your father all went to accompany your father clients visit. This is on the way back to home to atlanta</center>'
												},
												]//items - 1
										},
										{
											xtype: 'label',
											//border: 1,
											//style: 'border-color: grey; border-style: solid;',
											html: '<br>This photo is taken in Tenessay, USA.'
								
										}

								]
						},
						{
							   xtype: 'fieldset',							
							   items: [
									{
										xtype: 'image',
										 src: Ext.Viewport.getOrientation() == 'portrait' ? './resources/images/nitya-numbers.jpg' : './resources/images/nitya-numbers.jpg',
										style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:300px;height:200px;margin:auto' : 'width:150px;height:150px;margin:auto'
									},
									{
										xtype: 'label',
										//flex: 2,
										html: '<center>This photo is taken in Tenessay, USA. This time you, me and your father all went to accompany your father clients visit. This is on the way back to home to atlanta</center>'
									},
									{
										xtype: 'label',
										html: '<br>This photo is taken in Tenessay, USA.'
										
									}
								]//items - 1
						},
						{
							   xtype: 'fieldset',							
							   items: [
									{
										xtype: 'image',
										 src: Ext.Viewport.getOrientation() == 'portrait' ? './resources/images/nitya-numbers.jpg' : './resources/images/nitya-numbers.jpg',
										style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:300px;height:200px;margin:auto' : 'width:150px;height:150px;margin:auto'
									},
									{
										xtype: 'label',
										//flex: 2,
										html: '<center>This photo is taken in Tenessay, USA. This time you, me and your father all went to accompany your father clients visit. This is on the way back to home to atlanta</center>'
									},
									{
										xtype: 'label',
										html: '<br>This photo is taken in Tenessay, USA.'
										
									}
								]//items - 1
						},
						
						
						]//items - 2
					}]
						
	}//config
	
            
    
});