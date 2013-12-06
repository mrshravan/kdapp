Ext.define('kdApp.view.WriteDiary', {
    extend: 'Ext.Panel',
    alias: 'widget.writediaryview',
	fullscreen: true,

    config: {
        items: [
        {
			xtype: 'label',
			html: 'Write Diary',
			
		},
		{
			xtype: 'textareafield',
			maxRows: 3,
			name: 'bio'
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