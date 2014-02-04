Ext.define('kdApp.model.MenuItems', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['menuItemId','menuItem', 'gruoupName','groupId']
    },

    fullName: function() {
        var d = this.data,
        names = [
            d.menuItemId,
            d.menuItem,
            // (!d.middleInitial ? "" : d.middleInitial + "."),
            d.gruoupName,
            d.groupId
        ];
        return names.join(" ");
    }
});