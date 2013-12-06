Ext.create('kdApp.view.Login', {
    //fullscreen: true,
    extend: 'Ext.Panel',
    requires: [
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Text'
        
    ],
    alias: 'widget.simpeleview',
    items: [
        {
               xtype: 'button',
               text: 'Show Overlay',
               listeners: {
                  tap: function(button){
                     var overlay = Ext.create('Ext.Panel', {
                                                     height: 100,
                                                     width: 300,
                                                     html: 'Panel as Overlay'
                                           });
                     overlay.showBy(button);
                  }
               }

        }
    ]
});