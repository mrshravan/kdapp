Ext.define('kdApp.view.MainHomeTab', {
    extend: 'Ext.Panel',
    xtype: "mainhometab",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.util.DelayedTask'],
    config: {
        //title: 'Login',
        items: [ 
        	{
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },         
            {
                xtype: 'fieldset',
                title: 'Login',
                items: [
                	// {
//                 		xtype: 'component',
// //                 		html: './resources/',
//                 		html: '<center><img height="50%" width="10%"  src="./resources/startup/320x460.jpg" /></center>',
//                 	},
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

