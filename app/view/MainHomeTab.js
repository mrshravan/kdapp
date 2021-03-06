Ext.define('kdApp.view.MainHomeTab', {
    extend: 'Ext.Panel',
    xtype: 'mainhometab',
    
    config: {
        title: 'Login',
        padding: 20,
        layout: {
            type: 'fit'
        },

        items: [ 
         ],
        listeners: [{
            delegate: '#logInButton',
            event: 'tap',
            fn: 'onLogInButtonTap'
        },
        {
        	delegate: '#showLoginText',
            event: 'tap',
            fn: 'showLoginText'
        	
        }]
    },
    onLogInButtonTap: function () {
		var comp = Ext.ComponentQuery.query('viewportpage')[0];
        comp.setActiveItem('logincard');
    },
    initialize: function() {
        this.callParent();
    
        var redirectUrl = Ext.Object.toQueryString({
            redirect_uri: window.location.protocol + "//" + window.location.host + window.location.pathname,
            client_id: kdApp.app.facebookAppId,
            response_type: 'token'
        });

        this.setHtml([
            '<h2>Welcome to Kidiography</h2>',
            '<p>In this app, parents write kids diary till the kids grown to a age where they can remember the little things they do.</p>',
            '<p>That means, Kiddy Diary tells grown ups what they did in their kiddy days. To start writing your kids diary you must sign in with your Facebook account.</p>',
            '',
            //'<a class="fb-login-button" href="https://m.facebook.com/dialog/oauth?' + redirectUrl + '"></a>',            
        ].join(''));

         //FB.XFBML.parse(document.getElementById('splash'));
    }
    
});

