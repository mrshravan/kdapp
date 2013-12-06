Ext.define('kdApp.model.MenuItems', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['menuItemId','menuItem', 'gruoupName']
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.menuItemId,
            d.menuItem,
            // (!d.middleInitial ? "" : d.middleInitial + "."),
            d.gruoupName
        ];
        return names.join(" ");
    }
});