Ext.define('kdApp.view.MainHomeTab', {
    extend: 'Ext.Panel',
    xtype: 'mainhometab',
    
    config: {
        title: 'Login',
        layout: 'vbox',
        

        items: [ 
        	        
            {
            	xtype: 'label',
            	html: '<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>',

            },
            {
                //docked: 'bottom',
				xtype: 'button',
				itemId: 'logInButton',
				//ui: 'action',
				//padding: '10px',
				//width: '50%',
				centered: true,
				// iconCls: 'fa-facebook fa-2x'
// 				html: '<i class="fa-facebook fa-2x">Login Using Facebook</i>',
				text: 'Log In Using Facebook'
					
            }
         ],
        listeners: [{
            delegate: '#logInButton',
            event: 'tap',
            fn: 'onLogInButtonTap'
        }]
    },
    onLogInButtonTap: function () {
		var comp = Ext.ComponentQuery.query('viewportpage')[0];
        comp.setActiveItem('logincard');

    },
    
});

