Ext.define('kdApp.view.Login', {
    extend: 'Ext.Panel',
    xtype: "loginview",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.util.DelayedTask'],
    config: {
        items: [ 
        	        
            {
                xtype: 'fieldset',
                title: 'Login',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'Username',
                        itemId: 'userNameTextField',
                        name: 'userNameTextField',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        itemId: 'passwordTextField',
                        name: 'passwordTextField',
                        required: true
                    }
                    ,
                    {
                    	xtype:'spacer',
                    	height:'10px',
                    },
					{
						xtype: 'button',
						itemId: 'logInButton',
						ui: 'action',
						//padding: '10px',
						//width: '25%',
						//centered: true,
						//iconCls: 'fa fa-facebook',
						text: 'Log In'
					}
                ]
            }
         ],
        listeners: [{
            delegate: '#logInButton',
            event: 'tap',
            fn: 'onLogInButtonTap'
        }]
    },
    onLogInButtonTap: function () {

        var me = this,
            usernameField = me.down('#userNameTextField'),
            passwordField = me.down('#passwordTextField'),
            label = me.down('#signInFailedLabel'),
            username = usernameField.getValue(),
            password = passwordField.getValue();

        label.hide();

        // Using a delayed task in order to give the hide animation above
        // time to finish before executing the next steps.
        var task = Ext.create('Ext.util.DelayedTask', function () {

            label.setHtml('');

            me.fireEvent('signInCommand', me, username, password);

            usernameField.setValue('');
            passwordField.setValue('');
        });

        task.delay(500);

    },
    showSignInFailedMessage: function (message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    }
});

