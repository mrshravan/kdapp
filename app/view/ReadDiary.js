Ext.define('kdApp.view.ReadDiary', {
    extend: 'Ext.Panel',
    alias: 'widget.readdiaryview',
	fullscreen: true,

    config: {
        items: [
		
		{
			xtype: 'label',
			html: 'Read Diary',
			
		}
        ],
        listeners: [{
            delegate: '#logOffButton',
            event: 'tap',
            fn: 'onLogOffButtonTap'
        },{
            delegate: '#refresh',
            event: 'tap',
            fn: 'onRefreshButtonTap'
        }]
    },
    onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    },
	onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    }
	
            
    
});